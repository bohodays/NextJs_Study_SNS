import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

const initialState = {
  isOpen: false,
};

const usePostEditorModalStroe = create(
  devtools(
    combine(initialState, (set) => ({
      actions: {
        open: () => {
          set({ isOpen: true });
        },
        close: () => {
          set({ isOpen: false });
        },
      },
    })),
    {
      name: "postEditorModalStore",
    },
  ),
);

export const useOpenPostEditorModal = () => {
  const open = usePostEditorModalStroe((store) => store.actions.open);
  return open;
};

export const usePostEditorModal = () => {
  const {
    isOpen,
    actions: { open, close },
  } = usePostEditorModalStroe();

  return {
    isOpen,
    open,
    close,
  };
};
