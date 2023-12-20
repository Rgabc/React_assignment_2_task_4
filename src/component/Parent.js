import React, { useState } from "react";
import Child from "./Child";
const Parent=()=>{
    const[data,setData]=useState([
    {id:1,title:"learn React",status:"not completed"},
    {id:2,title:"build react app",status:"not completed"},
    {id:3,title:"deploy react app",status:"not completed"},])
    const status=()=>{

    }
    return(<>
    <div>
        <h1>Parent component</h1>
        <Child data={data} status={status}/>
    </div>
    
    
    
    </>)
}
export default Parent