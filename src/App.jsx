import React, {useState} from "react"
import State from './hookState'
import Effect from './useEffect'
import Context from './useContext'
import Ref from './useRef'

const App = () => {
    // const [count, setCount] = useState(0);
    // const [obj, setObj] = useState({name: "zhangsan", age: 16});
    // const [arr, setArr] = useState([1,2,3]);
    // // 注: 如过初始化是个函数的话, 那么接收的是函数的返回值
    // const [func, setFunc] = useState(()=>{
    //     return 1;
    // });
    // const changeCount = () => {
    //     setCount(count + 1);
    // }
    // return <div>
    //     <h1>这是app.js组件</h1>
    //     {/* <button onClick={() => {setCount(count + 1)}}>改变count值</button> */}
    //     <button onClick={changeCount}>改变count值</button>
    //     <h2>{count}</h2>
    //     <button onClick={() => {setObj(
    //         ...obj,
    //         {name: 'wangxiaohong', age: 18}
    //         )}}>改变obj值</button>
    //     <h2>姓名: {obj.name} --- 年龄: {obj.age}</h2>
    //     <button onClick={()=>{
    //         setArr(()=>{
    //         arr.push(5);
    //         return [...arr];
    //     })}}>改变数组的值</button>
    //     <h2>{arr}</h2>
    // </div>
    return <div>
        <State></State>
        <Effect></Effect>
        <Context></Context>
        <Ref></Ref>
    </div>
}


export default App;