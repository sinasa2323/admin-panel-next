import { create } from 'zustand';

export const useUIStore = create((set) => ({
  themeMode: 'light',
  toggleTheme: () =>
    set((state) => ({
      themeMode: state.themeMode === 'light' ? 'dark' : 'light',
    })),

  sidebarOpen: true,
  toggleSidebar: () =>
    set((state) => ({
      sidebarOpen: !state.sidebarOpen,
    })),
}));
