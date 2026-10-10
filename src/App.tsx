import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, RotateCcw, Award, BookOpen, LayoutGrid, Calendar, User as UserIcon, History, Globe, Library, ArrowLeft, Trash2 } from 'lucide-react';
import { COURSES } from './data/allCourses';
import { saveProgress, getProgress, ProgressData, getAssessmentHistory, clearAssessmentHistory, AssessmentRecord, saveSession, getSession, clearSession } from './lib/storage';
import { format } from 'date-fns';

export default function App() {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [appMode, setAppMode] = useState<'learning' | 'assessment' | 'simulation' | 'profile'>('learning');
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
  const [allProgress, setAllProgress] = useState<ProgressData>({});
  const [assessmentHistory, setAssessmentHistory] = useState<AssessmentRecord[]>([]);

  const loadLocalRecords = () => {
    setAllProgress(getProgress());
    setAssessmentHistory(getAssessmentHistory());
  };

  useEffect(() => {
    loadLocalRecords();
  }, []);

  // Sync URL search parameters on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    if (courseId && COURSES.some(c => c.id === courseId)) {
      setSelectedCourseId(courseId);
    }
  }, []);

  // Update URL search parameters when selectedCourseId changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (selectedCourseId) {
      params.set('courseId', selectedCourseId);
    } else {
      params.delete('courseId');
    }
    const queryStr = params.toString();
    const newPath = queryStr ? `${window.location.pathname}?${queryStr}` : window.location.pathname;
    window.history.replaceState({}, '', newPath);
  }, [selectedCourseId]);

  const visibleCourses = useMemo(() => COURSES, []);

  const selectedCourse = useMemo(() => 
    visibleCourses.find(c => c.id === selectedCourseId) || visibleCourses[0], 
  [selectedCourseId, visibleCourses]);

  useEffect(() => {
    if (selectedCourseId && selectedCourseId !== 'loma280' && (appMode === 'assessment' || appMode === 'simulation')) {
      setAppMode('learning');
    }
  }, [selectedCourseId, appMode]);

  const activeChapters = useMemo(() => {
    if (!selectedCourse) return [];
    
    switch(appMode) {
      case 'learning': {
        const base = [...selectedCourse.chapters];
        if (selectedCourse.finalExam) {
          base.push({
            id: 100,
            title: `${selectedCourse.shortTitle} Comprehensive Final Examination`,
            description: `A full bloom-level evaluation across all chapters of ${selectedCourse.shortTitle}.`,
            questions: selectedCourse.finalExam
          });
        }
        return base;
      }
      case 'assessment': {
        if (selectedCourseId !== 'loma280') return selectedCourse.chapters;
        const chaptersToUse = selectedCourse.tpgChapters || selectedCourse.chapters;
        const base = chaptersToUse.map(c => ({
          ...c,
          title: `${selectedCourse.shortTitle} TPG Review: ${c.title.replace('Chapter ', '')}`,
          description: `Official Test Preparation Guide questions for ${selectedCourse.shortTitle}.`
        }));
        if (selectedCourse.tpgFinalExam) {
          base.push({
            id: 100,
            title: `${selectedCourse.shortTitle} TPG Final Sample Examination`,
            description: `Full-length TPG-level practice exam for ${selectedCourse.shortTitle}.`,
            questions: selectedCourse.tpgFinalExam
          });
        }
        return base;
      }
      case 'simulation': {
        if (selectedCourseId !== 'loma280') return selectedCourse.chapters;
        const base = selectedCourse.simulationRounds.map((round, index) => ({
          id: index + 1,
          title: `${selectedCourse.shortTitle} Simulation Round ${index + 1}`,
          description: `Full-length 60-question exam simulation for ${selectedCourse.shortTitle}.`,
          questions: round
        }));
        if (selectedCourse.masteryChallenge) {
          base.push({
            id: 99,
            title: `${selectedCourse.shortTitle} 100-Question Mastery Challenge`,
            description: `The ultimate endurance test for ${selectedCourse.shortTitle} students.`,
            questions: selectedCourse.masteryChallenge
          });
        }
        return base;
      }
      default: return selectedCourse.chapters;
    }
  }, [appMode, selectedCourse, selectedCourseId]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sessionState, setSessionState] = useState<Record<number, { selected: number | null, isLocked: boolean }>>({});
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  
  const isInitialized = useRef<string | null>(null);

  // Persist session state
  useEffect(() => {
    if (selectedChapterId !== null && !showResults) {
      const assessmentId = `${selectedCourseId}_${appMode}_${selectedChapterId}`;
      if (isInitialized.current === assessmentId) {
        saveSession(assessmentId, {
          currentQuestionIndex,
          sessionState,
          score
        });
      }
    }
  }, [currentQuestionIndex, sessionState, score, selectedChapterId, selectedCourseId, appMode, showResults]);

  // Load session state
  useEffect(() => {
    if (selectedChapterId !== null) {
      const assessmentId = `${selectedCourseId}_${appMode}_${selectedChapterId}`;
      if (isInitialized.current !== assessmentId) {
        const saved = getSession(assessmentId);
        if (saved) {
          setCurrentQuestionIndex(saved.currentQuestionIndex);
          setSessionState(saved.sessionState);
          setScore(saved.score);
        } else {
          setCurrentQuestionIndex(0);
          setSessionState({});
          setScore(0);
        }
        isInitialized.current = assessmentId;
      }
    } else if (selectedChapterId === null) {
      isInitialized.current = null;
    }
  }, [selectedChapterId, selectedCourseId, appMode]);

  const currentChapter = useMemo(() => 
    activeChapters.find(c => c.id === selectedChapterId) || null
  , [selectedChapterId, activeChapters]);

  const questions = currentChapter?.questions || [];
  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((Object.keys(sessionState).filter(k => sessionState[Number(k)].isLocked).length) / questions.length) * 100 : 0;

  const currentStatus = sessionState[currentQuestionIndex] || { selected: null, isLocked: false };

  const handleOptionSelect = (index: number) => {
    if (currentStatus.isLocked) return;
    setSessionState(prev => ({
      ...prev,
      [currentQuestionIndex]: { ...prev[currentQuestionIndex], selected: index, isLocked: false }
    }));
  };

  const handleConfirm = () => {
    if (currentStatus.selected === null || currentStatus.isLocked || !currentQuestion) return;
    const isCorrect = currentStatus.selected === currentQuestion.answer;
    if (isCorrect) setScore(prev => prev + 1);
    
    setSessionState(prev => ({
      ...prev,
      [currentQuestionIndex]: { ...prev[currentQuestionIndex], isLocked: true }
    }));
  };

  const handleNext = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const finalAccuracy = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
      if (selectedChapterId !== null) {
        const assessmentId = `${selectedCourseId}_${appMode}_${selectedChapterId}`;
        const newProgress = await saveProgress(appMode, String(selectedChapterId), finalAccuracy, questions.length, currentChapter?.title || 'Unknown');
        setAllProgress(newProgress);
        setAssessmentHistory(getAssessmentHistory());
        clearSession(assessmentId);
      }
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const restartQuiz = () => {
    if (selectedChapterId !== null) {
      const assessmentId = `${selectedCourseId}_${appMode}_${selectedChapterId}`;
      clearSession(assessmentId);
    }
    setCurrentQuestionIndex(0);
    setSessionState({});
    setScore(0);
    setShowResults(false);
  };

  const goHome = () => {
    if (selectedChapterId !== null) {
      const assessmentId = `${selectedCourseId}_${appMode}_${selectedChapterId}`;
      clearSession(assessmentId); 
    }
    setSelectedChapterId(null);
    restartQuizInternal();
  };

  const restartQuizInternal = () => {
    setCurrentQuestionIndex(0);
    setSessionState({});
    setScore(0);
    setShowResults(false);
  };

  const exitCourse = () => {
    goHome();
    setSelectedCourseId(null);
  };

  const getAccuracy = () => questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  const handleClearHistory = () => {
    clearAssessmentHistory();
    loadLocalRecords();
  };

  // Course Selection Phase
  if (selectedCourseId === null && appMode !== 'profile') {
    return (
      <div className="min-h-screen bg-bg p-6 md:p-24 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Globe className="w-8 h-8 text-accent animate-pulse" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-muted">Global Professional Standard &bull; Offline Static Edition</span>
              </div>
              <h1 className="font-serif italic text-4xl md:text-7xl text-ink leading-tight mb-6">
                FLMI Program <br />
                <span className="text-accent underline decoration-border decoration-1 underline-offset-8">Study Suite</span>
              </h1>
            </div>
            
            <button 
              onClick={() => setAppMode('profile')}
              className="group flex items-center gap-6 p-6 border border-border hover:bg-ink hover:text-white bg-white/45 transition-all shadow-xl hover:shadow-2xl cursor-pointer"
            >
              <div className="text-right">
                <span className="block text-[8px] font-bold uppercase tracking-widest text-muted">
                  Personal Study Mode
                </span>
                <span className="block text-sm font-serif italic">Performance & History</span>
              </div>
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                <UserIcon className="w-6 h-6 text-ink" />
              </div>
            </button>
          </header>

          <section className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 animate-fade-in">
            <div className="space-y-4 border border-border p-8 md:p-12 hover:bg-white bg-white/20 backdrop-blur-sm transition-colors group">
              <h4 className="font-serif italic text-2xl text-ink">Program Overview</h4>
              <p className="text-muted text-sm leading-relaxed font-serif italic">
                The Fellow, Life Management Institute (FLMI) is a 10-course professional development program providing industry-specific business education since 1932.
              </p>
            </div>
            <div className="md:col-span-2 bg-ink p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
                <div className="space-y-1">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-accent">Level I</span>
                  <h5 className="font-serif italic text-lg">Fundamentals</h5>
                  <p className="text-white/40 text-[10px] leading-relaxed">Products & operations for quick confidence.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-accent">ALMI</span>
                  <h5 className="font-serif italic text-lg">Associate</h5>
                  <p className="text-white/40 text-[10px] leading-relaxed">Core insurance functions & financial acumen.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-accent">FLMI</span>
                  <h5 className="font-serif italic text-lg">Fellow</h5>
                  <p className="text-white/40 text-[10px] leading-relaxed">Big-picture strategic business topics.</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-4">
                <Award className="w-12 h-12 text-white/10 animate-spin-slow" />
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-border border border-border shadow-md">
            {visibleCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedCourseId(course.id)}
                className="bg-white p-8 md:p-12 cursor-pointer group hover:bg-ink transition-all relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted group-hover:text-accent transition-colors">
                      {idx < 2 ? 'Level I' : idx < 5 ? 'ALMI Level' : 'FLMI Level'} • {course.shortTitle}
                    </span>
                    <Library className="w-5 h-5 text-border group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-3xl font-serif italic text-ink mb-6 group-hover:text-white leading-snug transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-10 group-hover:text-white/60 transition-colors line-clamp-2 font-serif italic">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                    Initialize Module <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 text-bg group-hover:text-white/5 transition-colors">
                  <Library className="w-48 h-48 rotate-12" />
                </div>
              </motion.div>
            ))}
          </div>

          <footer className="mt-20 pt-12 border-t border-border flex justify-between items-center text-[8px] font-bold uppercase tracking-widest text-muted">
            <div className="flex gap-8">
              <span>LOMA & PFLP Comprehensive Suite</span>
              <span>© 2026 Academic Research &bull; Prepared by Safdar Hussain</span>
            </div>
            <div className="flex gap-8">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-2 h-2" /> Verified Content</span>
              <span className="flex items-center gap-1"><Globe className="w-2 h-2" /> 100% Static Local Storage</span>
            </div>
          </footer>
        </div>
      </div>
    );
  }

  // Profile Page
  if (appMode === 'profile' && selectedChapterId === null) {
    return (
      <div className="min-h-screen bg-bg p-8 md:p-24 overflow-x-hidden">
        <div className="max-w-5xl mx-auto">
          <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <button 
                onClick={() => {
                  setAppMode('learning');
                  setSelectedCourseId(null);
                }}
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors mb-4 cursor-pointer"
              >
                <ArrowLeft className="w-3 h-3" /> Back to Courses
              </button>
              <h1 
                onClick={goHome}
                className="font-serif italic text-5xl text-ink mb-4 cursor-pointer hover:opacity-70 transition-opacity"
              >
                LOMA Exam Master
              </h1>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted">Prepared by Safdar Hussain</p>
            </div>
            
            <div className="flex bg-white/50 backdrop-blur p-1 border border-border">
              <button
                onClick={() => setAppMode('learning')}
                className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  appMode === 'learning' ? 'bg-ink text-white shadow-xl' : 'text-muted hover:text-ink'
                }`}
              >
                Learning
              </button>
              {selectedCourseId === 'loma280' && (
                <>
                  <button
                    onClick={() => setAppMode('assessment')}
                    className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                      appMode === 'assessment' ? 'bg-ink text-white shadow-xl' : 'text-muted hover:text-ink'
                    }`}
                  >
                    TPG Review
                  </button>
                  <button
                    onClick={() => setAppMode('simulation')}
                    className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                      appMode === 'simulation' ? 'bg-ink text-white shadow-xl' : 'text-muted hover:text-ink'
                    }`}
                  >
                    Sim Rounds
                  </button>
                </>
              )}
              <button
                onClick={() => setAppMode('profile')}
                className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  appMode === 'profile' ? 'bg-ink text-white shadow-xl' : 'text-muted hover:text-ink'
                }`}
              >
                Profile
              </button>
            </div>
          </header>

          <motion.div
            key="profile-content"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-12"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 bg-ink p-12 text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent/80 mb-2 block">Local Assessment Workspace</span>
                <h2 className="text-4xl font-serif italic mb-4">Personal Preparation Dashboard</h2>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-muted">Completed</span>
                    <span className="text-2xl font-serif text-accent">{assessmentHistory.length}</span>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-muted">Avg Accuracy</span>
                    <span className="text-2xl font-serif text-accent">
                      {assessmentHistory.length > 0 
                        ? Math.round(assessmentHistory.reduce((acc, h) => acc + h.score, 0) / assessmentHistory.length) 
                        : 0}%
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col gap-4">
                <button 
                  onClick={loadLocalRecords}
                  className="flex items-center justify-center gap-2 px-8 py-3 bg-accent text-ink font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all shadow-lg cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" /> Refresh Records
                </button>
                {assessmentHistory.length > 0 && (
                  <button 
                    onClick={handleClearHistory}
                    className="flex items-center justify-center gap-2 px-8 py-3 bg-white/10 hover:bg-white text-white hover:text-ink transition-all font-bold uppercase tracking-widest text-[10px] border border-white/20 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" /> Reset Local History
                  </button>
                )}
              </div>

              <Award className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12 group-hover:scale-110 transition-transform duration-1000" />
            </div>

            <div className="bg-white border border-border overflow-hidden">
              <div className="p-8 border-b border-border bg-bg/30 flex items-center justify-between">
                <h3 className="text-xl font-serif italic text-ink flex items-center gap-3">
                  <History className="w-6 h-6 text-accent" /> Achievement Timeline
                </h3>
              </div>
              
              <div className="divide-y divide-border">
                {assessmentHistory.length === 0 ? (
                  <div className="text-center py-32">
                    <Award className="w-20 h-20 text-border mx-auto mb-6" />
                    <p className="text-ink font-serif text-lg mb-2">No records found yet.</p>
                    <p className="text-muted italic text-sm max-w-sm mx-auto">Complete any chapter or simulation round to see your performance history here.</p>
                    <button 
                      onClick={() => setAppMode('learning')}
                      className="mt-8 px-10 py-4 bg-ink text-white font-bold uppercase tracking-widest text-[10px] hover:shadow-2xl transition-all cursor-pointer"
                    >
                      Start Your First Module
                    </button>
                  </div>
                ) : (
                  <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
                    {assessmentHistory.map((record) => (
                      <div key={record.id} className="group p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-bg/40 transition-colors">
                        <div className="flex items-start gap-6">
                          <div className={`w-16 h-16 shrink-0 flex items-center justify-center border-2 ${
                            record.score >= 70 ? 'border-accent/40 bg-accent/5' : 'border-border bg-bg'
                          }`}>
                            <span className={`text-xl font-serif ${record.score >= 70 ? 'text-accent' : 'text-muted'}`}>{record.score}%</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              {record.score >= 70 ? (
                                <span className="flex items-center gap-1 text-[8px] font-bold uppercase tracking-widest text-accent">
                                  <CheckCircle2 className="w-3 h-3" /> Mastered
                                </span>
                              ) : (
                                <span className="flex items-center gap-1 text-[8px] font-bold uppercase tracking-widest text-muted">
                                  <BookOpen className="w-3 h-3" /> Practicing
                                </span>
                              )}
                            </div>
                            <h4 className="text-2xl font-serif text-ink group-hover:text-accent transition-colors">{record.assessmentTitle}</h4>
                          </div>
                        </div>
                        
                        <div className="mt-6 md:mt-0 flex flex-col items-end">
                          <div className="text-[10px] font-bold uppercase tracking-widest text-muted flex items-center gap-2 mb-2">
                            <Calendar className="w-3 h-3 text-accent" /> 
                            {record.completedAt ? format(new Date(record.completedAt), 'MMM dd, yyyy') : 'Recently'}
                          </div>
                          <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-muted/60 self-start md:self-end">
                            {record.completedAt ? format(new Date(record.completedAt), 'HH:mm:ss') : '--:--:--'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Chapter Selection Page
  if (selectedChapterId === null) {
    return (
      <div className="min-h-screen bg-bg p-6 md:p-24 overflow-x-hidden">
        <div className="max-w-5xl mx-auto">
          <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex items-start justify-between md:block">
              <div>
                <button 
                  onClick={exitCourse}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors mb-4"
                >
                  <ArrowLeft className="w-3 h-3" /> All Courses
                </button>
                <h1 className="font-serif italic text-3xl md:text-5xl text-ink mb-2 md:mb-4">{selectedCourse.shortTitle}</h1>
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted">Prepared by Safdar Hussain</p>
              </div>
            </div>
            
            <div className="flex bg-white/50 backdrop-blur p-1 border border-border overflow-x-auto no-scrollbar">
              <div className="flex min-w-max">
                <button
                  onClick={() => setAppMode('learning')}
                  className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest transition-all ${
                    appMode === 'learning' ? 'bg-ink text-white shadow-xl' : 'text-muted hover:text-ink'
                  }`}
                >
                  Learning
                </button>
                {selectedCourseId === 'loma280' && (
                  <>
                    <button
                      onClick={() => setAppMode('assessment')}
                      className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest transition-all ${
                        appMode === 'assessment' ? 'bg-ink text-white shadow-xl' : 'text-muted hover:text-ink'
                      }`}
                    >
                      TPG Review
                    </button>
                    <button
                      onClick={() => setAppMode('simulation')}
                      className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest transition-all ${
                        appMode === 'simulation' ? 'bg-ink text-white shadow-xl' : 'text-muted hover:text-ink'
                      }`}
                    >
                      Sim Rounds
                    </button>
                  </>
                )}
                <button
                  onClick={() => setAppMode('profile')}
                  className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest transition-all ${
                    appMode === 'profile' ? 'bg-ink text-white shadow-xl' : 'text-muted hover:text-ink'
                  }`}
                >
                  Profile
                </button>
              </div>
            </div>
          </header>

          <div className="mb-16 max-w-2xl">
            <h2 className="font-serif italic text-2xl text-ink mb-4">
              {appMode === 'learning' ? 'Deep Learning Phase' : appMode === 'assessment' ? 'Official Preparation Center' : 'Exam Simulation Room'}
            </h2>
            <p className="font-serif italic text-sm text-muted leading-relaxed">
              {appMode === 'learning' 
                ? `Comprehensive modules featuring scenario-based questions to ensure mastery of the ${selectedCourse.shortTitle} curriculum.`
                : appMode === 'assessment'
                ? 'Accelerated assessment containing the official practice questions and sample exam from the LOMA Test Preparation Guide (TPG).'
                : 'Full-length 60-question rounds sampled from our massive question bank. Same difficulty, unique questions every round.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeChapters.map(chapter => {
              const chProgress = allProgress[appMode]?.[chapter.id];
              return (
                <motion.button
                  key={chapter.id}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedChapterId(chapter.id)}
                  className="group text-left bg-white border border-border p-10 relative overflow-hidden transition-all hover:border-accent"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-border group-hover:bg-accent transition-colors" />
                  
                  {chProgress && (
                    <div className="absolute top-0 right-0 p-4 flex flex-col items-end opacity-40 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Best Score</span>
                      <span className="text-xl font-serif text-ink">{chProgress.bestScore}%</span>
                    </div>
                  )}

                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted mb-6 font-bold font-sans">
                    {chapter.id === 100 ? 'Comprehensive Assessment' : `Chapter ${chapter.id}`}
                  </span>
                  <h2 className="font-serif text-2xl text-ink mb-4 leading-tight">{chapter.title}</h2>
                  <p className="font-serif italic text-xs text-muted leading-relaxed mb-8">{chapter.description}</p>
                  
                  <div className="mt-auto flex justify-between items-center">
                    <div className="flex items-center gap-2 text-accent font-sans text-[10px] font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                      Start Assessment <ChevronRight className="w-3 h-3" />
                    </div>
                    {chProgress && (
                      <span className="text-[8px] uppercase tracking-widest text-muted flex items-center gap-1">
                        <Calendar className="w-2 h-2" />
                        {new Date(chProgress.lastDate).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          <footer className="mt-32 pt-12 border-t border-border flex justify-between items-center text-muted text-[10px] uppercase tracking-widest font-bold">
             <span>{selectedCourse.title}</span>
             <span>© 2026 &bull; Prepared by Safdar Hussain</span>
          </footer>
        </div>
      </div>
    );
  }

  // Quiz Results
  if (showResults) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center p-6 md:p-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl w-full bg-white border border-border p-8 md:p-12 text-center relative"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-ink" />
          <Award className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 text-accent" />
          <h1 className="font-serif italic text-3xl md:text-4xl mb-4 text-ink">
            {selectedChapterId === 100 ? 'Final Exam Results' : `Results: Ch. ${selectedChapterId}`}
          </h1>
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted mb-8 md:mb-12">Performance Summary</p>
          
          <div className="grid grid-cols-2 gap-px bg-border mb-8 md:mb-12 border border-border">
            <div className="bg-white p-6 md:p-8">
              <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-muted mb-2 font-bold font-sans">Score</span>
              <span className="font-serif text-2xl md:text-4xl text-ink">{score} / {questions.length}</span>
            </div>
            <div className="bg-white p-6 md:p-8">
              <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-muted mb-2 font-bold font-sans">Accuracy</span>
              <span className={`font-serif text-2xl md:text-4xl ${getAccuracy() >= 70 ? 'text-ink' : 'text-accent'}`}>{getAccuracy()}%</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={restartQuiz}
              className="w-full py-4 border border-ink font-sans font-bold text-xs uppercase tracking-widest hover:bg-ink hover:text-white transition-colors flex items-center justify-center gap-3"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Exam
            </button>
            <button 
              onClick={goHome}
              className="w-full py-4 bg-ink text-white font-sans font-bold text-xs uppercase tracking-widest hover:bg-transparent hover:text-ink border border-ink transition-all flex items-center justify-center gap-3"
            >
              <LayoutGrid className="w-4 h-4" />
              Select Different Chapter
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Quiz Interface
  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-bg flex flex-col md:grid md:grid-cols-[260px_1fr] lg:grid-cols-[260px_1fr_280px]">
      {/* Left Sidebar */}
      <aside className="border-b md:border-b-0 md:border-r border-border p-10 flex flex-col justify-between bg-bg">
        <div>
          <button onClick={goHome} className="font-serif italic text-2xl tracking-tighter mb-16 text-ink block hover:text-accent transition-all">
            {selectedCourse.shortTitle} <span className="text-accent underline decoration-1 underline-offset-4">Prep</span>
            <span className="block text-[8px] font-bold uppercase tracking-[0.4em] text-muted mt-2">Prepared by Safdar Hussain</span>
          </button>

          <div className="mb-12">
            <span className="block text-[10px] uppercase tracking-[0.15em] text-muted mb-2 font-bold font-sans">Module Progress</span>
            <div className="font-serif text-xl text-ink leading-tight">{currentChapter.title}</div>
          </div>

          <div className="max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
            <ul className="hidden md:block space-y-0 text-muted">
              {activeChapters.map(c => {
                const chProgress = allProgress[appMode]?.[c.id];
                return (
                  <li key={c.id} className={`py-4 border-b border-border flex justify-between items-center ${c.id === selectedChapterId ? 'text-ink font-semibold' : 'opacity-40'}`}>
                    <div className="flex flex-col">
                      <button 
                        onClick={() => { 
                          setSelectedChapterId(c.id); 
                          restartQuiz(); 
                        }} 
                        className="text-[13px] font-sans hover:text-accent text-left"
                      >
                        {appMode === 'simulation' 
                          ? `Sim Round ${c.id}`
                          : c.id === 100 
                          ? (appMode === 'learning' ? 'Prep Exam' : 'Sample Exam') 
                          : `Ch. ${c.id} ${appMode === 'learning' ? 'Study' : 'TPG'}`
                        }
                      </button>
                      {chProgress && (
                        <span className="text-[9px] font-bold tracking-widest text-accent uppercase">Best: {chProgress.bestScore}%</span>
                      )}
                    </div>
                    {c.id === selectedChapterId && <span className="text-[11px] font-sans opacity-60 ml-2">{Math.round(progress)}%</span>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border hidden md:block">
          <span className="block text-[10px] uppercase tracking-[0.15em] text-muted mb-2 font-bold font-sans">Status</span>
          <div className="text-[13px] font-sans text-ink">Question {currentQuestionIndex + 1} of {questions.length}</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative p-6 md:p-24 flex-1 flex flex-col bg-bg overflow-y-auto border-r border-border">
        <div className="max-w-3xl w-full mx-auto relative h-full flex flex-col">
          {/* Decorative Number */}
          <div className="absolute -top-12 -left-12 md:-top-20 md:-left-20 font-serif text-[100px] md:text-[200px] leading-none text-ink opacity-[0.05] select-none pointer-events-none">
            {currentQuestionIndex + 1}
          </div>

          <div className="relative z-10 flex-1">
            {/* Mobile-Only Question Navigator */}
            <div className="lg:hidden mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-muted uppercase tracking-wider">Navigate Questions</span>
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Q {currentQuestionIndex + 1} / {questions.length}</span>
              </div>
              <div className="flex flex-nowrap gap-2 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 mask-edge-fade">
                {questions.map((_, idx) => {
                  const qState = sessionState[idx];
                  const isCurrent = idx === currentQuestionIndex;
                  const isAnswered = qState?.isLocked;
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`min-w-[44px] h-11 text-[11px] font-bold border transition-all flex items-center justify-center shrink-0 ${
                        isCurrent 
                          ? 'bg-ink text-white border-ink ring-2 ring-accent/20' 
                          : isAnswered 
                          ? 'bg-accent/10 border-accent/30 text-accent' 
                          : 'bg-white border-border text-muted hover:border-ink shadow-sm'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="font-serif italic text-accent mb-2 md:mb-4 text-base md:text-lg">
              Section {currentQuestion.lo} &bull; Principles
            </div>

            <h1 className="font-serif text-xl md:text-3xl lg:text-4xl text-ink leading-tight mb-8 md:mb-16 max-w-2xl">
              {currentQuestion.question}
            </h1>

            <div className="grid grid-cols-1 gap-3 md:gap-4 max-w-2xl mb-16 md:mb-24">
              <AnimatePresence mode="popLayout">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = currentStatus.selected === idx;
                  const isCorrect = idx === currentQuestion.answer;
                  const showFeedback = currentStatus.isLocked;

                  let borderColor = "border-border";
                  let bgOverlay = "transparent";
                  let markerStyles = "border border-border text-muted";

                  if (showFeedback) {
                    if (isCorrect) {
                      borderColor = "border-accent";
                      bgOverlay = "#fdfaf5";
                      markerStyles = "border border-accent text-accent bg-bg";
                    } else if (isSelected) {
                      borderColor = "border-ink";
                      markerStyles = "border border-ink bg-ink text-white";
                    } else {
                      borderColor = "border-border opacity-50";
                    }
                  } else if (isSelected) {
                    borderColor = "border-ink";
                    markerStyles = "border border-ink text-ink";
                  }

                  return (
                    <motion.button
                      key={`${currentQuestionIndex}-${idx}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={currentStatus.isLocked}
                      style={{ backgroundColor: bgOverlay }}
                      className={`group w-full text-left flex items-center p-5 border ${borderColor} transition-all duration-200 relative`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold mr-5 flex-shrink-0 transition-colors ${markerStyles}`}>
                        {idx + 1}
                      </div>
                      <span className={`text-[15px] leading-relaxed font-sans ${currentStatus.isLocked && !isCorrect && !isSelected ? 'text-muted' : 'text-ink'}`}>
                        {option}
                      </span>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Explanation Overlay */}
          <AnimatePresence>
            {currentStatus.isLocked && (
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                className="md:absolute bottom-32 right-0 w-full md:w-80 bg-white border border-accent p-8 p-shadow z-20"
                style={{ boxShadow: '20px 20px 0px rgba(178, 139, 92, 0.1)' }}
              >
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-3 font-sans">
                  {currentStatus.selected === currentQuestion.answer ? 'Confirmation' : 'Concept Revision'}
                </div>
                <p className="text-[13px] leading-[1.6] text-ink/80 font-serif">
                  {currentQuestion.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Bar */}
          <div className="mt-auto pt-10 border-t border-border flex justify-between items-center pb-8">
            <div className="flex gap-x-6 items-center">
              <button 
                onClick={goHome} 
                className="text-muted font-sans text-[10px] uppercase tracking-widest font-bold hover:text-ink transition-colors"
              >
                Quit Exam
              </button>
              
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`font-sans text-[10px] uppercase tracking-widest font-bold transition-colors flex items-center gap-2 ${
                  currentQuestionIndex === 0 ? 'text-border cursor-not-allowed' : 'text-muted hover:text-ink'
                }`}
              >
                <RotateCcw className="w-3 h-3" />
                Previous
              </button>
            </div>
            
            <div className="flex gap-x-4">
              {!currentStatus.isLocked ? (
                <button
                  onClick={handleConfirm}
                  disabled={currentStatus.selected === null}
                  className={`px-10 py-3 uppercase tracking-widest text-[11px] font-bold transition-all border ${
                    currentStatus.selected === null 
                      ? 'border-border text-muted cursor-not-allowed'
                      : 'border-ink bg-ink text-white hover:bg-transparent hover:text-ink shadow-sm'
                  }`}
                >
                  Confirm Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-10 py-3 bg-ink text-white border border-ink uppercase tracking-widest text-[11px] font-bold transition-all flex items-center gap-3 hover:bg-transparent hover:text-ink shadow-sm"
                >
                  {currentQuestionIndex === questions.length - 1 ? 'Finish Results' : 'Next Question'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar: Navigation Grid */}
      <aside className="hidden lg:flex p-10 flex-col bg-bg sticky top-0 h-screen overflow-y-auto">
          <div className="mb-10">
            <span className="block text-[10px] uppercase tracking-[0.15em] text-muted mb-4 font-bold font-sans">Session Progress</span>
            <div className="h-[2px] w-full bg-border relative overflow-hidden mb-3">
              <motion.div 
                className="h-full bg-accent absolute left-0 top-0"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-bold text-muted uppercase tracking-wider">{Math.round(progress)}% Complete</span>
              <span className="text-[9px] font-bold text-accent uppercase tracking-wider">Score: {score}</span>
            </div>
          </div>

          <span className="block text-[10px] uppercase tracking-[0.15em] text-muted mb-4 font-bold font-sans">Question Navigator</span>
          <div className="grid grid-cols-4 gap-1.5 pr-1">
            {questions.map((_, idx) => {
              const qState = sessionState[idx];
              const isCurrent = idx === currentQuestionIndex;
              const isAnswered = qState?.isLocked;
              
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`h-10 text-[10px] font-bold border transition-all ${
                    isCurrent 
                      ? 'bg-ink text-white border-ink ring-2 ring-accent/20' 
                      : isAnswered 
                      ? 'bg-accent/10 border-accent/30 text-accent' 
                      : 'bg-white border-border text-muted hover:border-ink hover:bg-bg/50 shadow-sm'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div className="mt-auto pt-10 space-y-4">
            <div className="p-5 border border-border bg-white rounded-none">
                <span className="block text-[8px] font-bold uppercase tracking-widest text-muted mb-2">Requirement</span>
                <p className="text-[11px] font-serif italic text-ink/70 leading-relaxed">
                  Minimum 70% required for module mastery.
                </p>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-muted">Session Active</span>
            </div>
          </div>
      </aside>
    </div>
  );
}
