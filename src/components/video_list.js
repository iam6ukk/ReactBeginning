import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props) => {
  // 함수형 컴포넌트 사용할 경우, props는 함수의 요소로 들어감
  const VideoItems = props.videos.map((video) => {
    // 배열 반복
    // 함수 안에 video 프로퍼티를 넘겨서 전달받은 리스트 아이템 컴포넌트 반환
    // 함수 결과값 저장
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        // 2) app으로 부터 가져온 props를 비디오 리스트 아이템에 전달
        key={video.etag}
        // 비디오 배열의 키 설정, 각 비디오는 같은 etag를 가짐
        // 각 리스트 아이템에 키 값 넣어 업데이트
        video={video}
        // 각 비디오 리스트 아이템 컴포넌트 반환
      />
    );
  });

  return <ul className="col-md-4 list-group">{VideoItems}</ul>;
  // 랜더링
};

export default VideoList;
// 어느 곳에서도 VideoList 컴포넌트 참조 가능
