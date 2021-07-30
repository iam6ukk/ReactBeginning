import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  // onVideoSelect 프로퍼티에 접근함
  const imageUrl = video.snippet.thumbnails.default.url;
  // video 객체 가져와 선언, 유튜브로 부터 반환되는 값의 일부

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      {/* 유저가 li 클릭할 때마다 이벤트 필요 -> onClick 
          유저가 클릭할 때, onVideoSelect 호출해 해당 리스트 아이템의 비디오 전달*/}
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
          {/* 썸네일 */}
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
          {/* 타이틀 */}
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
