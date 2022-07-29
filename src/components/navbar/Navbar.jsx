import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../asset/images/logo.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  let navigate=useNavigate()

  const [input,setInput]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate('/search/'+input)
  }

  return (
    <div className='navbar'>
      <div className="navbar__wrapper">
        <Link to='/' className='link'>
          <div className="logo">
              <img src={Logo} alt="" />
          </div>
        </Link>
          <form className="search__container" onSubmit={handleSubmit}>
              <button><SearchIcon className='search__icon'/></button>
              <input type="text" className='search__input' onChange={(e)=>setInput(e.target.value)} value={input}/>
          </form>
      </div>
    </div>
  )
}

export default Navbar
