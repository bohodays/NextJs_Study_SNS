import { usePostsData } from "@/hooks/queries/use-posts-data";
import React from "react";
import Fallback from "../fallback";
import Loader from "../loader";
import PostItem from "./post-item";

const PostFeed = () => {
  const { data, error, isPending } = usePostsData();

  if (error) return <Fallback />;

  if (isPending) return <Loader />;

  return (
    <div className="flex flex-col gap-10">
      {data.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostFeed;
