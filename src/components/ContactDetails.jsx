import "./ContactDetails.css"

const ContactDetails = ({ contactDetails }) => {
    return (
        <div className="contactDetailsContainer">
            <h1 className="contactHeading">{contactDetails.name}</h1>
            <div className="contactDetails">
                <p>
                    {contactDetails.phone}
                </p>
                <p>
                    {contactDetails.email}
                </p>
            </div>
        </div>
    )
}

export default ContactDetails;