import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const CreateEntity=()=> {
    const [available, setAvailable] = useState({
        Name: "",
        City:"",
        Address:"",
        Capacity:"",
        Cost_per_day:"",
        verified:"",
        Rating:"",
    });

    const handleChange = ({ className, value}) => {
        setAvailable({ ...available, [className]: value});
    };

    const handleSubmit = () => {
        axios
        .post("http://localhost:8081/available", available)
        .then((res) => {})
        .catch((er) => {});
    };
  return (
      <>
    {/* <h1>CreateEntity</h1> */}
    <div className='addData'>
        <form
        onSubmit={(e) => {
            e.preventDefault();
            handleSubmit()
        }}>
            <h1>ADD ENTITY</h1>
            <label>Name</label>
            <input
            type="text" 
            className='Name'
            onChange={(event) => {
                handleChange(event.target);
            }}
            required
            />
            <label>City</label>
            <select
          value={""}
          className="City"
          onChange={(event) => {
            handleChange(event.target);
          }}
        >
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>Address</label>
        <input 
        type="text" 
        className='Address'
        onChange={(event) => {
            handleChange(event.target);
        }}
        required
        />
        <br />
        <label>Capacity</label>
        <input 
        type="text" 
        className='Capacity'
        onChange={(event) => {
            handleChange(event.target);
        }}
        required
        />
        <br />
        <label>Cost_per_day</label>
        <input 
        type="Number" 
        className='Cost_per_day'
        onChange={(event) => {
            handleChange(event.target);
        }}
        required
        />
        <br />
        <label>Verified</label>
        <input 
        type="text" 
        className='verified'
        onChange={(event) => {
            handleChange(event.target);
        }}
        />
        <br />
        <label>Rating</label>
        <input 
        type="Number" 
        className='Rating'
        onChange={(event) => {
            handleChange(event.target);
        }}
        required
        />
        <br />
        <input type="submit" className='submitentity' />
        <Link to={`/`}>HOME</Link>
        </form>
        
    </div>
    </>
  )
}

export default CreateEntity