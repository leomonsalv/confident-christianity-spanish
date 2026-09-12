export type ThemeMode = 'light' | 'dark' | 'sepia';
export type FontFamily = 'sans' | 'serif';
export type FontSize = 'sm' | 'base' | 'lg' | 'xl';
export type ReaderMode = 'continuous' | 'chapter' | 'cards';

export interface ReaderSettings {
  theme: ThemeMode;
  font: FontFamily;
  fontSize: FontSize;
  readerMode: ReaderMode;
  autoScroll: boolean;
  autoScrollSpeed: number; // 1 to 5
}

export interface FacilitatorNote {
  moduleId: number;
  note: string;
  updatedAt: string;
}
