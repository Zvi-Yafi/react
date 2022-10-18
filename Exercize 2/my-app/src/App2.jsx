import React from "react";
import arrayOfKeybord from "./component/ArreyOfKeyBord";

const KeyBoard = () => {
    let style={
        border:'1px solid black'
    }


    return (
        <div>
            {arrayOfKeybord[0].map((i, idx) => <div style={style} key={idx}>{i}</div>)}
        </div>
    )

}
export default KeyBoard