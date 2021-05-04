export type DirectusId = number;
export type DirectusSort = number | null;
export type DirectusStatus = 'published' | 'draft' | 'deleted';
export type DirectusMarkdown = string;
export type DirectusColor = string;
export type DirectusPrice = string | number;

export interface DirectusPage {
  slug: string;
}