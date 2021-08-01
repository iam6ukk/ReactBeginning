import React, { Component } from "react";
// react 라이브러리를 불러와 Componenet변수를 프로퍼티 형태로 가져옴

class SearchBar extends Component {
  // 클래스 컴포넌트는 내부적인 정보 저장할 때 사용
  // 클래스형 컴포넌트는 자체의 state를 가짐
  // 컴포넌트 즉시 리랜더링 / render함수 재실행 (변화있을 시)
  constructor(props) {
    super(props);

    this.state = { term: "" };
    // state의 term 빈 문자열로 초기화
  }

  render() {
    // App 컴포넌트가 검색바 랜더링할 때마다 render함수 호출
    // 모든 클래스의 함수에는 JSX 반환해야 함
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          // this.state의 term값 가져와 value
          onChange={(event) => this.onInputChange(event.target.value)}
          // onChange발생 시, onInputChange가 term과 함께 호출
        />
      </div>
    );
  }

  onInputChange(term) {
    // 검색바 인풋 요소 변화 감지
    this.setState({ term });
    // state update
    this.props.onSearchTermChange(term);
    // 새로운 검색어 전달
  }
}

export default SearchBar;
// 어느 곳에서도 SearchBar 컴포넌트 참조 가능
