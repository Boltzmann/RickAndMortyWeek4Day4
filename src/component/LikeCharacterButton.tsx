import React, {useState} from "react";


export default function LikeCharacterButton(){
    const [count, setCount] = useState<number>(0)

    console.log(count)

    const onButtonClick = () => {
        console.log("Like me!")
        setCount(count+1)

    }
    return <div>
        <div>Likes: {count}</div>
        <button onClick={onButtonClick} id="gallery-button">Like me!</button>
    </div>
}