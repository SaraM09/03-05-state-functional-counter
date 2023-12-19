import {useState} from 'react'
function Counter() {
const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>

        </div>
    )
}
export default Counter