function Signup(username, password, repeatPassword, createUser){
    return(
        <form className='signUp'>
            <h1>Sign Up</h1>
            <h4>Username</h4>
            <input type="text" placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value.trim())}/>
            <h4>Password</h4>
            <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value.trim())}/>
            <input type="password" placeholder='Repeat Password' value={repeatPassword} className='lastinput' onChange={(e) => setRepeatPassword(e.target.value.trim())}/>
            <button onClick={createUser}>Sign Up</button>
        </form> 
    )
}

export default Signup