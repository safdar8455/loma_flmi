export interface Question {
  id: number;
  lo: string;
  question: string;
  options: string[];
  answer: number; // 0-indexed
  explanation: string;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

export interface Course {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  chapters: Chapter[];
  simulationRounds: Question[][];
  tpgQuestions?: Question[]; // This was used for getting all TPG questions
  tpgChapters?: Chapter[];    // For specific TPG chapters if different from Bloom
  finalExam?: Question[];     // Bloom Level Final
  tpgFinalExam?: Question[];  // TPG Level Final
  masteryChallenge?: Question[]; // Simulation Level Mastery
  approved?: boolean;         // Approval status of course
}

export interface Subscription {
  id?: string;
  userId: string;
  courseId: string;
  courseName: string;
  paymentAmount: number;
  transactionId: string;
  receiptUrl: string;
  submittedAt: string;
  approved: boolean;
  status: 'pending' | 'approved' | 'rejected';
  startDate?: string;
  expiryDate?: string;
  approvedBy?: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  paymentMethod: string;
  paymentDate: string;
  planMonths: number;
}

export interface CourseAssignment {
  id?: string;
  userId: string;
  courseId: string;
  courseName?: string;
  assignedBy: string;
  assignedAt: string;
  accessType: "admin_granted";
  expiryDate: string | null; // ISO String or null for lifetime
  notes: string;
  active: boolean;
  studentEmail?: string;
  studentName?: string;
}

export interface PaymentQr {
  imageUrl: string;
  paymentMethod: string;
  updatedAt: string;
  updatedBy: string;
}


