'use client';

import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  justLoggedIn: false, // برای نمایش نوتیفیکیشن بعد از ورود
  login: () => set({ isLoggedIn: true, justLoggedIn: true }),
  consumeJustLoggedIn: () => set({ justLoggedIn: false }),
  logout: () => set({ isLoggedIn: false }),
}));
