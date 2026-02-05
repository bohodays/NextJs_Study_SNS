import CreatePostButton from "@/components/post/create-post-button";
import PostFeed from "@/components/post/post-feed";

const IndexPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <CreatePostButton />
      <PostFeed />
    </div>
  );
};

export default IndexPage;
