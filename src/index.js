import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
// index는 어플리케이션의 루트, 모든 컴포넌트들은 여기에 속함

const API_KEY = "AIzaSyAc5I1lzVSij9yUjZy6WnhJMrDIADbZlLw";
// youtube api key

class App extends Component {
  // 클래스형 자체의 state를 가짐
  // 컴포넌트 즉시 리랜더링 / render함수 재실행 (변화있을 시)
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      // state에 video를 빈 배열로 세팅
      selectedVideo: null,
      // 선택된 video가 없음
    };
    // state 초기값 설정
    this.videoSearch("surfboards");
    // 초기 검색어
  }

  videoSearch(term) {
    // term은 검색어
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        // this.setState({ videos })
        // video들의 배열이여서
        selectedVideo: videos[0],
        // 초기 검색의 반환 값, 첫 번째 비디오 플레이되고 검색 결과 얻음
      });
      // state update
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);
    // videoSearch를 term과 함께 0.3초마다 호출

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        {/* 검색어가 바뀌면 term과 함께 videoSearch에 전달하여 호출 */}
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          // onVideoSelect는 비디오를 가져와 selectedVideo update
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
// App 컴포넌트를 랜더링
// container라는 클래스를 가진 div를 찾고 헤당 div에 랜더링
