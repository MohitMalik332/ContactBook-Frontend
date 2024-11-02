import "./AddContact.css"
import { useState } from "react";


const AddContact = ({ addContact }) => {
    const [userInput, setUserInput] = useState({
        name: '',
        phone: '',
        email: '',
    });

    function getUserInput(identifier, event) {
        setUserInput((prevInput) => ({
            ...prevInput,
            [identifier]: event.target.value,
        }))

        console.log(userInput);
    }


    return (
        <div className="addNewContact">
            <input 
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={(event) => getUserInput('name', event)}
            />

            <input 
                type="text"
                placeholder="Enter phone number" 
                name="phone"
                onChange={(event) => getUserInput('phone', event)}
            />

            <input 
                type="email"
                placeholder="Enter email address" 
                name="email"
                onChange={(event) => getUserInput('email', event)}
            />
            <button onClick={() => addContact(userInput)}>Add Contact</button>
        </div>
    )
}

export default AddContact;