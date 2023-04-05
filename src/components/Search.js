import React, { useContext } from 'react'
import { BsSearch } from "react-icons/bs"
import MainContex from '../MainContex'

function Search() {
  const {setSearch} = useContext(MainContex)
  
  return (
    <div className='search'>
      <div className='icon'>
        <BsSearch />
      </div>
      <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search Brands' />
    </div>
  )
}

export default Search