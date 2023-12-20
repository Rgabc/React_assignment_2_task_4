import React, { useState } from "react";
const Child=({data,status})=>{
    const[item,setItm]=useState(data)

const handler=(id)=>{
 const btn= item.filter((row)=>{ return row.id!=id
   

    })
    console.log(btn)
    setItm(btn)


}
    return(<>
      <div>
    <h1>child component</h1>
    {
        item.map((row)=>{
            return(<>
            <ul>
                <li>{row.title} <button key={row.id} onClick={()=>handler(row.id)} >{row.id}complete</button></li>
            </ul>
            </>)

        })
    }
        </div>
  
    
    
    </>)
}
export default Child