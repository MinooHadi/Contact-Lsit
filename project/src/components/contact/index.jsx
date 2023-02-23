import { useDispatch } from "react-redux";
import { contactSliceActions } from "../../redux/store";

function Contact(props) {
  const dispatch = useDispatch();

  function showDeleteModal(id) {
    dispatch(contactSliceActions.showModal(id));
  }

  function editingMode(id) {
    dispatch(contactSliceActions.editedId(id));
  }

  return (
    <div className={`w-52 h-32 px-5 border-2 border-gray-40 flex flex-col gap-4 justify-center`}>
      <div className={`flex justify-between`}>
        <h3>
          {props.firstName} {props.lastName}
        </h3>
        <div className="icon-contact">
          <iconify-icon
            icon="eva:trash-2-fill"
            onClick={() => showDeleteModal(props.id)}
          ></iconify-icon>
          <iconify-icon
            icon="material-symbols:edit-square-rounded"
            onClick={() => editingMode(props.id)}
          ></iconify-icon>
        </div>
      </div>
      <p> {props.relation} </p>
      <p> {props.email} </p>
    </div>
  );
}

export default Contact;
