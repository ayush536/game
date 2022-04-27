import React from 'react'
import Home from '../Components/Home'
import Entity from '../Components/Entity'
import CreateEntity from '../Components/CreateEntity'
import Navbar from '../Components/Navbar'
import { Routes, Route } from 'react-router-dom'

const AllRoutes=()=> {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listing/:id' element={<Entity />} />
        <Route path='/listing/create' element={<CreateEntity />} />
        {/* <Route path='/nav' element={<Navbar />} /> */}
    </Routes>
    </>
  )
}

export default AllRoutes