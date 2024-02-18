import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import YouTube from "react-youtube";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div>
      <YouTube
        className="m-10 mb-4"
        videoId={videoId}
        opts={{
          playerVars: {
            autoplay: 1,
          },
        }}
      />
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
