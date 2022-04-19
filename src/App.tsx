import './App.css';
import Title from "./component/Title";
import {exportedDatas} from "./repo/Datas";
import Gallery from "./component/Gallery";
import {useEffect, useState} from "react";

export default function App() {

    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        console.log("useEffect used. " + count)
    }, [count]
    )

    const onClick = () => {
        setCount(count+1)
    }

  return (
    <div>

      <Title />
        <Gallery characters = {exportedDatas} />
<button onClick={onClick}>Click me.</button>
    </div>
  )
}

