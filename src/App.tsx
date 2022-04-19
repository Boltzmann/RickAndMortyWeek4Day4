import React, {useState} from 'react';
import './App.css';
import Title from "./component/Title";
import {exportedDatas} from "./repo/Datas";
import Gallery from "./component/Gallery";

export default function App() {
    const [count, setCount] = useState<number>(0)

    console.log(count)

    const onButtonClick = () => {
        console.log("Click me!")
        setCount(count+1)

    }
  return (
    <div>

      <Title />
        <Gallery characters = {exportedDatas} />
        <div>Button clicked: {count}</div>
    <button onClick={onButtonClick}>Click me!</button>
    </div>
  )
}

