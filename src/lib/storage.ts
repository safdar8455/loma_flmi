
export interface ChapterProgress {
  bestScore: number;
  lastScore: number;
  completedCount: number;
  lastDate: string;
}

export interface ProgressData {
  [mode: string]: {
    [chapterId: string]: ChapterProgress;
  };
}

export interface AssessmentRecord {
  id: string;
  assessmentId: string;
  assessmentTitle: string;
  score: number;
  totalQuestions: number;
  completedAt: string;
}

const STORAGE_KEY = 'loma_progress';
const HISTORY_KEY = 'loma_assessment_history';
const SESSION_PREFIX = 'loma_session_';

export const saveProgress = async (mode: string, chapterId: string, score: number, totalQuestions: number, title: string) => {
  const data = getLocalProgress();
  const modeData = data[mode] || {};
  const prevProgress = modeData[chapterId] || { bestScore: 0, lastScore: 0, completedCount: 0, lastDate: '' };

  const nowIso = new Date().toISOString();

  const newProgress: ChapterProgress = {
    bestScore: Math.max(prevProgress.bestScore, score),
    lastScore: score,
    completedCount: (prevProgress.completedCount || 0) + 1,
    lastDate: nowIso,
  };

  data[mode] = {
    ...modeData,
    [chapterId]: newProgress
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

  // Save to local assessment history
  const history = getAssessmentHistory();
  const newRecord: AssessmentRecord = {
    id: `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    assessmentId: chapterId,
    assessmentTitle: title,
    score,
    totalQuestions,
    completedAt: nowIso
  };
  const updatedHistory = [newRecord, ...history].slice(0, 200);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));

  return data;
};

export const getLocalProgress = (): ProgressData => {
  const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('loma280_progress');
  if (!saved) return {};
  try {
    return JSON.parse(saved);
  } catch {
    return {};
  }
};

export const getAssessmentHistory = (): AssessmentRecord[] => {
  const saved = localStorage.getItem(HISTORY_KEY);
  if (!saved) return [];
  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
};

export const clearAssessmentHistory = () => {
  localStorage.removeItem(HISTORY_KEY);
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem('loma280_progress');
};

export interface SessionState {
  currentQuestionIndex: number;
  sessionState: Record<number, { selected: number | null, isLocked: boolean }>;
  score: number;
}

export const saveSession = (assessmentId: string, state: SessionState) => {
  localStorage.setItem(`${SESSION_PREFIX}${assessmentId}`, JSON.stringify(state));
};

export const getSession = (assessmentId: string): SessionState | null => {
  const saved = localStorage.getItem(`${SESSION_PREFIX}${assessmentId}`);
  if (!saved) return null;
  try {
    return JSON.parse(saved);
  } catch {
    return null;
  }
};

export const clearSession = (assessmentId: string) => {
  localStorage.removeItem(`${SESSION_PREFIX}${assessmentId}`);
};

export const getProgress = getLocalProgress;

