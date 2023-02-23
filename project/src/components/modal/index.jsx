import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { contactSliceActions } from "../../redux/store";
import "./../../assets/styles/modal.css"

function Modal() {
  const dispatch = useDispatch();
  const { contact, deletingId } = useSelector((state) => state.contact);

  const deleteContactInfo = contact.find((item) => item.id === deletingId);
  const contactFullName =
    deleteContactInfo.firstName + " " + deleteContactInfo.lastName;

  function deleteContact(id) {
    dispatch(contactSliceActions.deleteContact(id));
  }

  function cancel() {
    dispatch(contactSliceActions.showModal(undefined));
  }

  return ReactDOM.createPortal(
    <>
      <div className="main-modal">
        <p>آیا میخواهید {contactFullName} را حذف کنید؟</p>
        <div className="modal-btn">
          <button className="btn" onClick={() => deleteContact(deletingId)}>بله</button>
          <button className="btn" onClick={cancel}>خیر</button>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
