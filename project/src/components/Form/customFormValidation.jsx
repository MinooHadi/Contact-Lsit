import { useDispatch, useSelector } from "react-redux";
// import { contactSliceActions } from "./";
import { useEffect, useRef, useState } from "react";

function useFormValidation() {
  const dispatch = useDispatch();
  const { contact } = useSelector((state) => state.contact);

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    relation: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  function getInputValue(e) {
    setInput({...input, [e.target.name]: e.target.value });
  }


  function formSubmited(e) {
    e.preventDefault()
    console.log(input);
  }


  return {
    input,
    getInputValue,
    formSubmited,
  }
}

export default useFormValidation
