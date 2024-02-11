import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import YouTube from "react-youtube";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <YouTube
      className="m-10"
      videoId={videoId}
      opts={{
        playerVars: {
          autoplay: 1,
        },
      }}
    />
  );
};

export default WatchPage;
