import { RegisterStore } from "@/type/store";
import { create } from "zustand";

export const useRegisterStore = create<RegisterStore>((set) => ({
  steps: 1,
  credentials: null,
  updateCredentials: (credentials) => set(() => ({ credentials })),
  incrementStep: () => set((state) => ({ steps: state.steps + 1 })),
  clear: () =>
    set({
      steps: 1,
      credentials: null,
    }),
}));
