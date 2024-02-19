import { useState } from 'react'

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <h2>Enviando ordenes</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <button type='submit'>Send</button>
            </form>

        </>
    )
}
export default Form