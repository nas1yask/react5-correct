import './Modal.css'
import Signin from './Signin'
import Signup from './Signup'
import User from './User'

function Modal({setIsModalOpen, modalType, users, setUsers}){



    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    // const [repeatPassword, setRepeatPassword] = useState('')


    // const createUser = () => {
    //     if(!username || !password || !repeatPassword){
    //         alert('Zapolni vse polya')
    //         return 
    //     }        

    //     if(password !== repeatPassword){
    //         alert('Paroli ne sov')
    //         return 
    //     }

    //     const exist = dff.filter()

    //     if(!exist){
    //         alert('Takoi polz uzhe est')
    //         return
    //     }

    //     const [...users, ]

    // }
   
    return(
        <div className="modal">
            {/* <div className="inner">
                <i className="fa-solid fa-xmark" onClick={() => 
                    setIsModalOpen(false)
                }></i>
                {modalType === 'signup' && (
                    <Signup username={username} password={password} repeatPassword={repeatPassword} createUser={createUser} setRepeatPassword={setRepeatPassword} setUsername={setUsername} setPassword={setPassword}/>
                )}
                {modalType === 'signin' && (
                    <Signin createUser={createUser}/>
                )}
            </div> */}
        </div>
    )
}

export default Modal