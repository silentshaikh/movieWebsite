import React from 'react'
import { useGlobelContext} from '../context';
function Search() {
    let {inpValue,upInputValue,err} = useGlobelContext();
  return (
    <div className="inpCont">
        <h2>Search Your Movie</h2>
        <input type="text" name="" id="" placeholder='Search Here...' value={inpValue} onChange={(e) => upInputValue(e.target.value)} />
        <div className="error">
            <p style={{color:'crimson',}}>{err.show && err.msg}</p>
        </div>
    </div>
  )
}

export default Search
