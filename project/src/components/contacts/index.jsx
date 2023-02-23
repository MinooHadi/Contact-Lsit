import Contact from "../contact";
import { useSelector } from "react-redux";

function Contacts() {
  const { contact } = useSelector((state) => state.contact);

  return (
    <div className={`flex flex-start flex-wrap gap-3`}>
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
