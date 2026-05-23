import './Modal.css'

function Modal(){
    return(
        <div className="modal">
            <div className="inner">
                <form action="" className='signUp'>
                    <h4>Username</h4>
                    <input type="text" placeholder='Enter username'/>
                    <h4>Password</h4>
                    <input type="password" placeholder='Enter Password'/>
                    <input type="password" placeholder='Repeat Password'/>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Modal