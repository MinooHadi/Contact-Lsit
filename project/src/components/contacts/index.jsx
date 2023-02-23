import Contact from "../contact";
import "./../../assets/styles/contacts.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { contactSliceActions } from "../../redux/store";

function Contacts() {
  const dispatch = useDispatch()
  const { contact } = useSelector((state) => state.contact);
  console.log(contact);

  
  return (
    <div className="main-contacts">
      {contact.map(item => <Contact key={item.id} id={item.id} firstName={item.firstName} lastName={item.lastName} relation={item.relation} email={item.email} />)}
    </div>
  );
}

export default Contacts;
