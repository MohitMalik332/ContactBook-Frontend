import { useState } from "react";
import "./ShowAllContacts.css";

const ShowAllContacts = ({ error, showAllContacts, showContactDetails }) => {
    


    return (
        <div className="divForAllContacts">
            {error && <p>{error}</p>}
            {!error && showAllContacts.map((contact, index) => 
                <ul key={index}>
                    <li>
                        <button 
                            className="listofContacts"
                            onClick={() => showContactDetails(contact)}
                        >
                            {contact.name}
                        </button>
                    </li>
                    {/* <li>{contact.phone}</li>
                    <li>{contact.email}</li> */}
                </ul>
            )}
        </div>
    )


}

export default ShowAllContacts