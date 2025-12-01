import { useState } from 'react'

function App() {
  
  // useState => Hook
  // useState는 리액트에서 가장 기본적인 훅이며, 함수 컴포넌ㅌ에서도 가변적인 상태를 지닐 수 있게 해준다.
  // 이 함수가 호출되면 배열을 반환한다.
  // 반환된 배열의 첫 번째 요소는 상태값, 두번째 요소는 상태값을 세팅하는 함수
  // useState 함수의 파라미터(매개변수)는 상태값의 초깃값이다.

  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("네임을 입력하세요");
  const [nickName, setNickName] = useState<string>("닉네임을 입력하세요");

  const increment = () => (setCount(count + 1));
  const decrement = () => (setCount(count - 1));

  const onChangeName = (e : React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value); }  

  const onChangeNickName  = (e : React.ChangeEvent<HTMLInputElement>) => {setNickName(e.target.value);}

  return (
    <>
      <p>
        현재 카운터 값은 : <b>{count}</b>
      </p>
      <button onClick={increment } > 1 증가</button>
      <button onClick={()=>setCount(count - 1) }  > 1 감소</button>

      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickName} onChange={onChangeNickName} />
      </div>

      <div>
        <b> 이름 : {name}</b>
                <b> 닉네임 : {nickName}</b>
      </div>
    </>
  )
}

export default App
