import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { contactSliceActions } from "../../redux/store";
import { toast } from "react-toastify";

function Modal() {
  const dispatch = useDispatch();
  const { contact, deletingId } = useSelector((state) => state.contact);

  const deleteContactInfo = contact.find((item) => item.id === deletingId);
  const contactFullName =
    deleteContactInfo.firstName + " " + deleteContactInfo.lastName;

  function deleteContact(id) {
    dispatch(contactSliceActions.deleteContact(id));
    toast.success("حذف با موفقیت انجام شد");
  }

  function cancel() {
    dispatch(contactSliceActions.showModal(undefined));
  }

  return ReactDOM.createPortal(
    <>
      <div
        className={`w-1/3 h-32 py-2 flex flex-col items-center fixed border-solid bg-white top-1/2 left-1/3 px-5 rounded-xl shadow-slate-900 gap-5 justify-center`}
      >
        <p>آیا میخواهید {contactFullName} را حذف کنید؟</p>
        <div className={`flex gap-10`}>
          <button
            className={`py-1 px-5 border-none bg-slate-800 text-white rounded-md`}
            onClick={() => deleteContact(deletingId)}
          >
            بله
          </button>
          <button
            className={`py-1 px-5 border-none bg-slate-800 text-white rounded-md`}
            onClick={cancel}
          >
            خیر
          </button>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
