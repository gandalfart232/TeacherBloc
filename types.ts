export interface Student {
  id?: string;
  ownerId: string;
  firstName: string;
  lastName: string;
  group: string;
  specialNeeds: string[];
  contactInfo: string;
  createdAt: number; // Timestamp
}

export type InterventionType = "Conducta" | "Académico" | "Familia" | "Positivo";
export type InterventionStatus = "pendiente" | "resuelto";

export interface Intervention {
  id?: string;
  ownerId: string;
  studentId: string;
  studentName: string; // Denormalized
  type: InterventionType;
  description: string;
  date: number; // Timestamp
  status: InterventionStatus;
}

export interface Resource {
  id?: string;
  ownerId: string;
  title: string;
  url: string;
  category: string;
  tags: string[];
  isFavorite: boolean;
}

export interface QuickNote {
  id?: string;
  ownerId: string;
  content: string;
  color: string;
  isArchived: boolean;
  createdAt: number;
}

export interface CalendarEvent {
  id?: string;
  ownerId: string;
  title: string;
  date: number; // Timestamp (start of day)
  type: 'general' | 'exam' | 'meeting';
  linkedNoteId?: string; // Optional link to a quick note
}
