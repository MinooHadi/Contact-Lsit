import "./../../assets/styles/contact.css";

function Contact(props) {
  return (
    <div className="main-contact">
      <div className="header-contact">
        <h3> {props.firstName} {props.lastName} </h3>
        <div className="icon-contact">
          <iconify-icon icon="eva:trash-2-fill"></iconify-icon>
          <iconify-icon icon="material-symbols:edit-square-rounded"></iconify-icon>
        </div>
      </div>
      <p> {props.relation} </p>
      <p> {props.email} </p>
    </div>
  );
}

export default Contact;
