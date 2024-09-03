/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [post, setPost] = useState(['강남 우동 맛집', '천안 맛집', '서울 오락실 추천']);
  let [logo, setLogo] = useState('ReactBlog');
  let [like, setLike] = useState(0)

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'white', fontSize:'16px'}}>블로그</h4>
      </div>

      <button onClick={()=>{
        let copy = [...post];
        copy.sort();
        setPost(copy);
      }}>정렬</button>

      <button onClick={()=>{
        let copy = [...post];
        copy[0] = '여자코트 추천';
        setPost(copy);
      }}>수정</button>

      <div className="list">
        <h4>{ post[0] }<span onClick={()=>{setLike(++like)}}>❤️</span>{ like }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ post[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ post[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal/>

    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
