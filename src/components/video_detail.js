import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  // video없으면 Loading 반환

  const videoId = video.id.videoId;
  // id는 video 객체 안에 있어 emned url을 가져올 수 있음
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
        {/* iframe에 컨텐츠 위치시킴*/}
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
        {/* 제목, 내용 가져옴 */}
      </div>
    </div>
  );
};

export default VideoDetail;
