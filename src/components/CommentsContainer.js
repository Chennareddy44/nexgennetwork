import { commentsData } from "../utils/constants";
import CommentsList from "./CommentList";

const CommentsContainer = () => {
  return (
    <div className="mx-8 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
