import { create } from "zustand";
type UserStore = {
  hasFinishedOnboarding: boolean;
  toggleHandleOnboarded: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  hasFinishedOnboarding: false,
  toggleHandleOnboarded() {
    set((state) => {
      return {
        ...state,
        hasFinishedOnboarding: !state.hasFinishedOnboarding,
      };
    });
  },
}));
