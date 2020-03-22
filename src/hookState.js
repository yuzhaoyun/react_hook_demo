import React, {useState} from "react"
const HookIndex = () => {
    const [count, setCount] = useState(123);
    // 点击处理事件
    const handleClick = e => {
        if (e === "reset") {
            setCount(123);
        } else if (e === '+1') {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }
    return <div>
        count: {count}
        <br/>
        <button onClick={()=>{handleClick('reset')}}>Reset</button>
        <br/>
        <button onClick={()=>{handleClick('+1')}}>+1</button>
        <br/>
        <button onClick={()=>{handleClick("-1")}}>-1</button>
    </div>
}

export default HookIndex;