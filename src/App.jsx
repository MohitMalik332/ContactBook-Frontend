import "./App.css";

import { useState } from "react"
import Header from "./components/Header/Header"
import ShowAllContacts from "./components/ShowAllContacts"
import SideBar from "./components/SideBar"
import AddContact from "./components/AddContact";
import { json } from "react-router-dom";


function App() {  
  const [error, setError] = useState();
  const [showAllContacts, setShowAllContacts] = useState([]);
  const [flag, setFlag] = useState(false);

    function getAllContacts() {
      fetchContacts();
    }

    async function fetchContacts() {
      try {
          const contacts = await fetch('http://localhost:5175/api/Contacts');
          const result = await contacts.json();
          setShowAllContacts(result);
      } catch (error){
          setError(error);
      }
    }


      async function addContact(contact) {
        const response = await fetch('http://localhost:5175/api/Contacts', {
          method: 'POST',
          body: JSON.stringify(contact),
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        const responseData = await response.json();
  
        if (!response.ok){
          throw new Error('Failed to Add Contact');
        }
  
        return responseData.message;
      }




    function addNewContact() {
      setFlag(true);
    }


  return (
    <>
      <Header />
      <div className="ShowAllContacts">
        <SideBar getAllContact={getAllContacts} addNewContact={addNewContact}/>
        <ShowAllContacts error={error} showAllContacts={showAllContacts}/>
        {flag && <AddContact addContact={addContact}/>}
      </div>

    </>
  )
}

export default App
