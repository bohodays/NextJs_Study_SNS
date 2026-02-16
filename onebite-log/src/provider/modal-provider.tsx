import AlertModal from "@/components/modal/alert-modal";
import PostEditorModal from "@/components/modal/post-editor-modal";
import ProfileEditorModal from "@/components/modal/profile-editor-modal";
import React, { type ReactNode } from "react";
import { createPortal } from "react-dom";

const ModalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* createProtal을 이용하면 특정 dom 요소를 지정해서 컴포넌트를 해당 dom 요소 자식으로 추가할 수 있음 */}
      {createPortal(
        <>
          <PostEditorModal />
          <AlertModal />
          <ProfileEditorModal />
        </>,
        document.getElementById("modal-root")!,
      )}
      {children}
    </>
  );
};

export default ModalProvider;
