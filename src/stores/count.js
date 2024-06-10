import create from "zustand";

const useStore = create((set) => ({
  count: 0,
  num: 1,
  setNum: (newNum) => set({ num: newNum }),
  up: () => set((state) => ({ count: state.count + state.num })),
  down: () => set((state) => ({ count: state.count - state.num })),
  reset: () => set({ count: 0 }),
}));

export default useStore;
