import './Modal.css'
import User from './User'

function Modal({setIsModalOpen, modalType, setUsers}){



    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')


    const createUser = () => {
        if(!username || !password || !repeatPassword){
            alert('Zapolni vse polya')
            return 
        }        

        if(password !== repeatPassword){
            alert('Paroli ne sov')
            return 
        }

        const exist = dff.filter()

        if(!exist){
            alert('Takoi polz uzhe est')
            return
        }

        const [...users, ]

    }
   
    return(
        <div className="modal">
            <div className="inner">
                <i className="fa-solid fa-xmark" onClick={() => 
                    setIsModalOpen(false)
                }></i>
                {modalType === 'signup' && (
                    <form className='signUp'>
                        <h1>Sign Up</h1>
                        <h4>Username</h4>
                        <input type="text" placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value.trim())}/>
                        <h4>Password</h4>
                        <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value.trim())}/>
                        <input type="password" placeholder='Repeat Password' value={repeatPassword} className='lastinput' onChange={(e) => setRepeatPassword(e.target.value.trim())}/>
                        <button onClick={createUser}>Sign Up</button>
                    </form> 
                )}
                {modalType === 'signin' && (
                    <form className='signIn'>
                        <h1>Sign In</h1>
                        <h4>Username</h4>
                        <input type="text" placeholder='Enter username'/>
                        <h4>Password</h4>
                        <input type="password" placeholder='Enter Password' className='last'/>
                        <button onClick={createUser}>Sign In</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Modal