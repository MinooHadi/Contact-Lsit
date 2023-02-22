function Contact(props) {
  return (
    <div>
      <div>
        <h3> {props.name} </h3>
        <div>
          <iconify-icon icon="eva:trash-2-fill"></iconify-icon>
          <iconify-icon icon="material-symbols:edit-square-rounded"></iconify-icon>
        </div>
      </div>
      <p> {props.relation} </p>
      <p> {props.email} </p>
    </div>
  );
}

export default Contact
