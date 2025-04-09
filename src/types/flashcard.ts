
export interface Flashcard {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export interface CardStats {
  total: number;
  correct: number;
  incorrect: number;
}

export type FlashcardCollection = Flashcard[];
