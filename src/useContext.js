import React, {useState, useContext, createContext} from 'react'

const Text = createContext();

// 如果父组件和子组件是两个文件, 则需要导出 Text 和 导入 Text
const Context = () => {
    const [count, setCount] = useState(0);
    return <div>
        <h1>这是Context组件</h1>
        <button onClick={()=>{setCount(count+1)}}>+1</button>
        <Text.Provider value={{count, setCount}}>
            <Item/>
        </Text.Provider>
    </div>
}

const Item = () => {
    const {count, setCount} = useContext(Text);
    return <div>
        <h2>Item_count: {count}</h2>
        <br/>
        <button onClick={() => {setCount(count - 1)}}>-1</button>
    </div>
}

export default Context;