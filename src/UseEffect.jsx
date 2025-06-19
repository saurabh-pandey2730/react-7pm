import { useEffect, useState } from "react"


const UseEffect = () => {
       let [countX ,setCountX ] = useState(0)
       let [countY ,setCountY ] = useState(0)

         function incrementX(){
      setCountX(prev=>prev+1) 
    }
     function incrementY(){
    setCountY(prev=>prev+1) 
     }

     function hello(){
        console.log('hello....useEffect called')
     }

useEffect(hello,[countX])


  return (
    <div>
        <br /><br />
        <span>X: {countX}</span>
        <span>Y: {countY}</span> <br /><br />

      <button onClick={incrementX}>inc</button>
         <button onClick={incrementY}>dec</button>

    </div>
  )
}
export default UseEffect