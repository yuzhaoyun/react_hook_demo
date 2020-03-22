import React, {useState, useEffect} from 'react'

const Effect = () => {
    const [count, setCount] = useState(0);
    // 相当于componentDidUpdate
    useEffect(() => {
        console.log(123);
    }, [])
    // 相当于componentWillUnmount(可以是跳路由的时候触发)
    useEffect(() => {
        console.log(123);
        return () => {
            console.log(122);
        }
    })
    // 相当于componentDidMount
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })
    return <div>
        <p>You clicked {count} times</p>
        <button onClick={()=>setCount(count + 1)}>
            click me
        </button>
    </div>

}

export default Effect;