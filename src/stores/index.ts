import { ICategoryResponse, IAboutResponse } from '../services/type';
import { atom } from 'jotai';

// Global

export const bsAtom = atom('');
export const loaderAtom = atom(false);

// About
export const aboutAtom = atom<IAboutResponse['data'] | undefined>(undefined);
export const aboutLoaderAtom = atom(true);

// Category
export const categoryAtom = atom<ICategoryResponse['data'] | undefined>(
  undefined
);
export const categoryLoaderAtom = atom(true);
