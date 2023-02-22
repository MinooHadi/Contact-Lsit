import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { contactSliceActions } from "../../redux/store";

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
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function validateFirstName() {
    if (input.firstName === undefined || input.firstName.trim() === "") {
      setErrors((errors) => ({
        ...errors,
        firstName: "پر کردن این فیلد الزامی می باشد",
      }));
      return false;
    }
    if (input.firstName.length < 2) {
      setErrors((errors) => ({
        ...errors,
        firstName: "نام باید حداقل 2 حرف داشته باشد",
      }));
      return false;
    }
    if (
      !input.firstName.match(
        "[\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]"
      )
    ) {
      setErrors((errors) => ({
        ...errors,
        firstName: "نام باید شامل حروف الف تا ی باشد",
      }));
      return false;
    }
    return true;
  }

  function validateLastName() {
    if (input.lastName === undefined || input.lastName.trim() === "") {
      setErrors((errors) => ({
        ...errors,
        lastName: "پر کردن این فیلد الزامی می باشد",
      }));
      return false;
    }
    if (input.lastName.length < 2) {
      setErrors((errors) => ({
        ...errors,
        lastName: "نام خانوادگی باید حداقل 2 حرف داشته باشد",
      }));
      return false;
    }
    if (
      !input.lastName.match(
        "[\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]"
      )
    ) {
      setErrors((errors) => ({
        ...errors,
        lastName: "نام خانوادگی باید شامل حروف الف تا ی باشد",
      }));
      return false;
    }
    return true;
  }

  function validateEmail() {
    if (input.email === undefined || input.email.trim() === "") {
      setErrors((errors) => ({
        ...errors,
        email: "پر کردن این فیلد الزامی می باشد",
      }));
      return false;
    }
    if (!input.email.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}")) {
      setErrors((errors) => ({
        ...errors,
        email: "ایمیل باید با فرمت صحیح وارد شود",
      }));
      return false;
    }
    return true;
  }

  function validatePhoneNumber() {
    if (input.phoneNumber === undefined || input.phoneNumber.trim() === "") {
      setErrors((errors) => ({
        ...errors,
        phoneNumber: "پر کردن این فیلد الزامی می باشد",
      }));
      return false;
    }
    if (input.phoneNumber.length !== 11) {
      setErrors((errors) => ({
        ...errors,
        phoneNumber: "شماره تماس باید 11 عدد داشته باشد",
      }));
      return false;
    }
    if (!input.phoneNumber.startsWith("09")) {
      setErrors((errors) => ({
        ...errors,
        phoneNumber: "شماره تماس باید با 09 شروع شود",
      }));
      return false;
    }
    return true;
  }

  function validateAll() {
    setErrors({});
    const validFirstName = validateFirstName();
    const validLasttName = validateLastName();
    const validEmail = validateEmail();
    const validPhoneNumber = validatePhoneNumber();
    return validFirstName && validLasttName && validEmail && validPhoneNumber;
  }

  function inputBulurHandler(e) {
    switch (e.target.name) {
      case "firstName":
        setErrors({ ...errors, firstName: "" });
        validateFirstName();
        return;
      case "lastName":
        setErrors({ ...errors, lastName: "" });
        validateLastName();
        return;
      case "email":
        setErrors({ ...errors, email: "" });
        validateEmail();
        return;
      case "phoneNumber":
        setErrors({ ...errors, phoneNumber: "" });
        validatePhoneNumber();
        return;
    }
  }

  function formSubmited(e) {
    e.preventDefault();
    if (validateAll()) {
      dispatch(contactSliceActions.addContact(input));
      e.target.reset();
      setInput({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      });
    }
  }

  useEffect(() => {
    console.log(contact);
  }, [contact]);

  return {
    input,
    setInput,
    errors,
    setErrors,
    getInputValue,
    formSubmited,
    inputBulurHandler
  };
}

export default useFormValidation;
