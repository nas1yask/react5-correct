function Signin(createUser){
    return(
        <form className='signIn'>
            <h1>Sign In</h1>
            <h4>Username</h4>
            <input type="text" placeholder='Enter username'/>
            <h4>Password</h4>
            <input type="password" placeholder='Enter Password' className='last'/>
            <button onClick={createUser}>Sign In</button>
        </form>
    )
}

export default Signin