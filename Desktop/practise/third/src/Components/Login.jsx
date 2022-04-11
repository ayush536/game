import React from 'react'

export const Login=()=> {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");


    const handleSubmit = () => {
        const handleDetails = {
            const userDetails = {
            username,
            password
            };

        fetch(`https://reqres.in/api/users`, {
            method: "POST",
            body: JSON.stringify(userDetails),
            headers:{
                "Content-type": "application/json"
            }
        }).then(()=> {})
    }

  return (
    <div>
        <input 
        type="text"
        placeholder='Enter Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        />
        <br />
        <input 
        type="text"
        placeholder='Enter Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        />
        <br />
        <button onSubmit={handleSubmit}>SUBMIT</button>
    </div>
  )
}

