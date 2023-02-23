import Contact from "../contact";
import "./../../assets/styles/contacts.css";
import { useSelector } from "react-redux";

function Contacts() {
  const { contact } = useSelector((state) => state.contact);

  return (
    <div className="main-contacts">
      {contact.map((item) => (
        <Contact
          key={item.id}
          id={item.id}
          firstName={item.firstName}
          lastName={item.lastName}
          relation={item.relation}
          email={item.email}
        />
      ))}
    </div>
  );
}

export default Contacts;
