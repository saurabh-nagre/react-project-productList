
import { useState } from "react";

function SearchBar(props){
    
    const [value,setValue]= useState("")

    return (
        <>
            <input type='text' className="input" placeholder="Search..." value={value} onChange = {(event)=>{ 
                setValue(event.target.value);
                // console.log(event.target.value)
                props.setSearch(event.target.value);
                }}/>
        </>
    )
}
export default SearchBar;