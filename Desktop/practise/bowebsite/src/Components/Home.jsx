import React from 'react'
import { Link } from 'react-router-dom'

const Home=()=> {
  return (
      <>
    <h1>WELCOME TO THE HOME PAGE</h1>
    <Link to={`listing/create`}>Add Entity</Link>
    </>
  )
}

export default Home