import React from 'react'
import Card from './Card.js'
import { data } from './data.js'

export default function Home() {
    // const [people, setPeople] = useState(Data)

    // const handleSubmit = (e) => {
    //     e.preventDefault();
        
    //     setPeople([...people, {
    //         id: 20,
    //         img: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
    //         firstName: 'Ulutho',
    //         lastName: 'Madela',
    //         phone: 735701763,
    //         age: 22,
    //         isFavourite: true
    //     }])
    // }

    // const [inputs, setInputs] = useState(data)

    const contacts = data.map(contact => {
        return (
          <Card 
            key = {contact.id}
            src = {contact.img}
            firstName = {contact.firstName}
            lastName = {contact.lastName}
            phone = {"0" + contact.phone}
            age = {contact.age + " years"}
            isFavourite = {contact.isFavourite}
          />
        )
    })

    return (
        <>
            <div className="home">
                <h1 className='heading'>My Contacts</h1>
                
                {/* <form className="form-group">
                    <input 
                        type="text"
                        name='id'
                        value={ inputs.src || "" }
                        className="input-field"
                    />
                    <input 
                        type="text"
                        name='src'
                        value={ inputs.src || "" }
                        className="input-field"
                    />
                    <input 
                        type="text"
                        name='firstName'
                        value={ inputs.firstName || "" }
                        className="input-field"
                    />
                    <input 
                        type="text"
                        name='lastName'
                        value={ inputs.lastName || "" }
                        className="input-field"
                    />
                    <input 
                        type="text"
                        name='phone'
                        value={ inputs.phone || "" }
                        className="input-field"
                    />
                    <input 
                        type="text"
                        name='age'
                        value={ inputs.age || "" }
                        className="input-field"
                    />
                    <input 
                        type="text"
                        name='isFavourite'
                        value={ inputs.isFavourite || "" }
                        className="input-field"
                    />
                </form> */}

                <div className="section">
                {contacts}
                </div>
            </div>
        </>
    )
}