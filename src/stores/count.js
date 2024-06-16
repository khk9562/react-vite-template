import { create } from "zustand";
import { devtools } from "zustand/middleware";

const isDev = import.meta.env.VITE_NODE_ENV === "development";

const couterStoreActions = (set) => ({
  count: 0,
  num: 1,
  setNum: (newNum) => set({ num: newNum }),
  up: () => set((state) => ({ count: state.count + state.num })),
  down: () => set((state) => ({ count: state.count - state.num })),
  reset: () => set({ count: 0 }),
});

const useStore = create(
  isDev ? devtools(couterStoreActions) : couterStoreActions
);

export default useStore;
