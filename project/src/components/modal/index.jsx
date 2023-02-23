import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { contactSliceActions } from "../../redux/store";


function Modal() {
  //   const { contact } = useSelector((state) => state.contact);

  return ReactDOM.createPortal(
    <>
      <div>
        <p>آیا میخواهید این مخاطب را حذف کنید؟</p>
        <div>
          <button>بله</button>
          <button>خیر</button>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
