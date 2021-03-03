import React,{useState} from 'react'

const Signup2 = () => {
    const [email, setEmail]=useState("")
    const [name, setName]=useState("")
    const [password, setPassword]=useState("")
    const [phone, setPhone]=useState("")

    const onSubmit = e => {
        e.preventDefault()
    }

    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='email'>
                    Email
                    <input
                         onChange={(e) => setEmail(e.target.value)}  
                         name='email'
                         value={email} />
                </label>
                
                <label htmlFor='name'>
                    Name
                    <input
                         onChange={(e) => setName(e.target.value)}  
                         name='name'
                         value={name} />
                </label>
                
                <label htmlFor='password'>
                    Password
                    <input
                         onChange={(e) => setPassword(e.target.value)}  
                         name='password'
                         value={password} />
                </label>
                
                <label htmlFor='phone'>
                    Phone
                    <input
                         onChange={(e) => setPhone(e.target.value)}  
                         name='phone'
                         value={phone} />
                </label>
                
            </form>
        </div>
    )
}

export default Signup2
