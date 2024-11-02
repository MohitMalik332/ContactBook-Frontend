

const ShowAllContacts = ({ error, showAllContacts }) => {
    return (
        <div>
            {error && <p>{error}</p>}
            {!error && showAllContacts.map((contact, index) => 
                <ul key={index}>
                    <li>{contact.name}</li>
                    <li>{contact.phone}</li>
                    <li>{contact.email}</li>
                </ul>
            )}
        </div>
    )


}

export default ShowAllContacts