import { useState } from "react"
import { users } from "./data"

const UseStateDemo = () => {
    
    const [data,setData] = useState([])
    
    console.log(data)  
  return (
    <div>
         <button onClick={()=>setData(users)}>show Users</button>
    {
        data.map((user)=>{
            return <div className={`userData ${user.isPermanent}?permanentEmployee:notPermanentEmployee`}>
               <h1>{user.name}</h1>
                <p>{user.age}</p>
                <h4>{user.department}</h4> 
            </div>
        })
    }
    </div>
  )
}
export default UseStateDemo