import { useState } from "react"


const UseStateComponent = () => {
       
        // let initialValue = useState("Value")[0]
        // let fun = useState("Value")[1]

        // console.log(initialValue,fun) 
     

        let [count ,setCount ] = useState(11)

    //   console.log(value)
     function increment(){
      // setCount(count+1)
      // setCount(prev=>prev+1)
      if(count>9){
        setCount(0)
      }
        else setCount(prev=>prev+1)
  
     }
     function decrement(){
      if(count<1){
        setCount(0)
      }else setCount(count-1)
     }


  return (
    <div> 
        <h1>{count}</h1>
         <button onClick={increment}>inc</button>
         <button onClick={decrement}>dec</button>
    </div>
  )
}
export default UseStateComponent