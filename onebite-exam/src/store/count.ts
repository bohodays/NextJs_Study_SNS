import { create } from "zustand";

type Store = {
  count: number;
  actions: {
    increase: () => void;
    decrease: () => void;
  };
};

export const useCountStore = create<Store>((set, get) => ({
  count: 0,
  actions: {
    increase: () => {
      // const count = get().count;
      // set({ count: count + 1 });
      set((store) => ({
        count: store.count + 1,
      }));
    },
    decrease: () => {
      set((store) => ({
        count: store.count - 1,
      }));
    },
  },
}));

// 유지보수성을 높이기 위해 아래와 같이 훅을 만들어서 사용함
// 위의 store를 각 파일에서 사용한다면, store에 변경사항이 생기면 모든 파일을 수정해야 하기 때문에 아래와 같이 훅의 형태로 사용함
export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decrease);
  return decrease;
};
