import _ from "lodash";
import React, { Component } from "react";
// 컴포넌트 생성/관리
import ReactDOM from "react-dom";
// 실제 DOM과 상호작용
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
// index는 어플리케이션의 루트, 모든 컴포넌트들은 여기에 속함

const API_KEY = "AIzaSyAc5I1lzVSij9yUjZy6WnhJMrDIADbZlLw";
// youtube api key

class App extends Component {
  // 클래스 컴포넌트는 내부적인 정보 저장할 때 사용
  // 클래스형 자체의 state를 가짐
  // 컴포넌트 즉시 리랜더링 / render함수 재실행 (변화있을 시)
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      // state에 videos를 빈 배열로 세팅
      selectedVideo: null,
      // 선택된 video 없음
    };
    // state 초기값 설정
    this.videoSearch("surfboards");
    // 초기 검색어 surfboards로 설정
  }

  videoSearch(term) {
    // term은 검색어
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      // 비디오 리스트 반환하는 데이터 get
      this.setState({
        videos: videos,
        // this.setState({ videos })
        // 키 : 값
        selectedVideo: videos[0],
        // 초기 검색의 반환 값, 첫 번째 비디오 플레이되고 검색 결과 얻음
      });
      // state update
    });
  }

  render() {
    // 모든 리액트/클래스 컴포넌트는 render 메소드로 정의되어야 함
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);
    // 검색어 입력 끝난 후 0.3초 후 출력
    // videoSearch를 term과 함께 0.3초마다 호출

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        {/* 검색어가 바뀌면 term과 함께 videoSearch에 전달하여 호출 */}
        <VideoDetail video={this.state.selectedVideo} />
        {/* selectedVideo를 video에 전달 */}
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          // onVideoSelect는 비디오를 가져와 selectedVideo update
          // 같이 넘길 요소 selectedVideo
          // 비디오와 스테이트 정의하고 app 스테이트를 새 비디오로 업데이트
          videos={this.state.videos}
          // state의 videos 접근 가능, 데이터는 videos 프로퍼티 참조
          // 1) 이 프로퍼티는 비디오 리스트에 전달
        />
        {/* 인스턴스 랜더링 */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
// App의 인스턴스 생성 -> ReactDOM.render에게 전달
// container라는 클래스를 가진 div를 찾고 헤당 div에 랜더링
