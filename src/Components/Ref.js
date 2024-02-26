import React, { useRef ,useState} from 'react'

const Ref = () => {
    const [count,setCount] = useState(0)
   const ref= useRef(0)

  
  return (
    <div>
        <button>Increase Count</button>
    <h1>Count</h1>

    </div>
  )
}

export default Ref;
