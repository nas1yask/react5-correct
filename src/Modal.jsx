import './Modal.css'

function Modal(){
    return(
        <div className="modal">
            
            <div className="inner">
                <i className="fa-solid fa-xmark"></i>
                <form action="" className='signUp'>
                    <h1>Sign Up</h1>
                    <h4>Username</h4>
                    <input type="text" placeholder='Enter username'/>
                    <h4>Password</h4>
                    <input type="password" placeholder='Enter Password'/>
                    <input type="password" placeholder='Repeat Password' className='lastinput'/>
                    <button>Sign Up</button>
                </form> 
                {/* <form action="" className='signIn'>
                    <h1>Sign In</h1>
                    <h4>Username</h4>
                    <input type="text" placeholder='Enter username'/>
                    <h4>Password</h4>
                    <input type="password" placeholder='Enter Password' className='last'/>
                    <button>Sign In</button>
                </form> */}
            </div>
        </div>
    )
}

export default Modal