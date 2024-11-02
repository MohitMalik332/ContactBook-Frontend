import { IoIosCreate } from "react-icons/io";
import { RiContactsBook3Fill } from "react-icons/ri";
import Button from "./Button/Button";
import "./SideBar.css";

export default function SideBar({ getAllContact, addNewContact }) {

    

    return (
        <aside className="sideBar">
            <nav>
                <div className="sidebarBtns">
                    <Button onClick={getAllContact}><RiContactsBook3Fill title="Show all Contacts"/></Button>
                    <Button onClick={addNewContact}><IoIosCreate title="Create new Contact"/></Button>
                </div>
            </nav>
        </aside>
    )
}