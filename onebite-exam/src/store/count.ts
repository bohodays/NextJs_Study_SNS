import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
/**
 * combine
 * - store 내부의 데이터와 action 함수를 각각 정의한 다음에 결합시켜주며, 타입스크립트의 추론 능력을 향상시킨다.

 * immer
 * - 객체가 중첩된 구조에서도 불변성 관리
 */

export const useCountStore = create(
  immer(
    // 타입을 정의하지 않아도 현재 store의 상태를 추론함
    combine({ count: 0 }, (set, get) => ({
      actions: {
        increase: () => {
          set((state) => {
            state.count += 1;
          });
        },
        decrease: () => {
          set((state) => {
            state.count -= 1;
          });
        },
      },
    })),
  ),
);

type Store = {
  count: number;
  actions: {
    increase: () => void;
    decrease: () => void;
  };
};
// export const useCountStore = create<Store>((set, get) => ({
//   count: 0,
//   actions: {
//     increase: () => {
//       // const count = get().count;
//       // set({ count: count + 1 });
//       set((store) => ({
//         count: store.count + 1,
//       }));
//     },
//     decrease: () => {
//       set((store) => ({
//         count: store.count - 1,
//       }));
//     },
//   },
// }));

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
