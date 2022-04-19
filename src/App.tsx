import './App.css';
import Title from "./component/Title";
import {exportedDatas} from "./repo/Datas";
import Gallery from "./component/Gallery";
import {useEffect} from "react";

export default function App() {

    useEffect(() =>
    console.log("useEffect used.")
    )

  return (
    <div>

      <Title />
        <Gallery characters = {exportedDatas} />

    </div>
  )
}

