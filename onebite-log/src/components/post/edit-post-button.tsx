import React from "react";
import { Button } from "../ui/button";
import type { PostEntity } from "@/types";
import { useOpenEditPostModal } from "@/store/post-editor-modal";

const EditPostButton = (props: PostEntity) => {
  const openEditPostModal = useOpenEditPostModal();

  const handleButtonClick = () => {
    openEditPostModal({
      postId: props.id,
      content: props.content,
      imgUrls: props.image_urls,
    });
  };

  return (
    <Button
      onClick={handleButtonClick}
      className="cursor-pointer"
      variant={"ghost"}
    >
      수정
    </Button>
  );
};

export default EditPostButton;
