import { useState } from 'react';
import './Search.css'

function Search({search, setSearch}) {

    // const [modal, setModal] = useState('none')

    return(
        <>
            <div className='search'>
                <aside>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="search" placeholder='Search...' value={search} onChange={(e)=> setSearch(e.target.value)}/>
                </aside>
                <div className="btns">
                    <button>Sign Up</button>
                    <button><i className="fa-solid fa-lock"></i> Sign In</button>
                </div>
            </div>
        </>
    )
}

export default Search;