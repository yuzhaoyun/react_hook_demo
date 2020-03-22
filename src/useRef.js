import React, {useRef, useEffect} from 'react'

const Ref = () => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.value = 2;
    })
    const handleClick = () => {
        inputRef.current.focus();
    }
    return <div>
        <h1>这是 Ref 组件</h1>
        <input ref={inputRef} type='text'/>
        <br/>
        <button onClick={handleClick}>click me</button>
    </div>
}

export default Ref;