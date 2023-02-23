import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { contactSliceActions } from "../../redux/store";

function useFormValidation() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    id: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    relation: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [disable, setDisable] = useState(true);

  function getInputValue(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    let isValid = false;

    switch (inputName) {
      case "firstName":
        isValid = validateFirstName(inputValue);
        break;
      case "lastName":
        isValid = validateLastName(inputValue);
        break;
      case "phoneNumber":
        isValid = validatePhoneNumber(inputValue);
        break;
      case "email":
        isValid = validateEmail(inputValue);
        break;
      case "relation":
        isValid = true;
        break;
    }
    if (isValid) {
      setInput({ ...input, [inputName]: inputValue });
      setErrors((errors) => ({
        ...errors,
        [inputName]: "",
      }));
    } else {
      setInput({ ...input, [inputName]: "" });
    }
  }


  function validateFirstName(inputValue) {
    if (inputValue === undefined || inputValue.trim() === "") {
      setErrors((errors) => ({
        ...errors,
        firstName: "پر کردن این فیلد الزامی می باشد",
      }));
      return false;
    }
    if (inputValue.length < 2) {
      setErrors((errors) => ({
        ...errors,
        firstName: "نام باید حداقل 2 حرف داشته باشد",
      }));
      return false;
    }
    if (
      !inputValue.match(
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

  function validateLastName(inputValue) {
    if (inputValue === undefined || inputValue.trim() === "") {
      setErrors((errors) => ({
        ...errors,
        lastName: "پر کردن این فیلد الزامی می باشد",
      }));
      return false;
    }
    if (inputValue.length < 2) {
      setErrors((errors) => ({
        ...errors,
        lastName: "نام خانوادگی باید حداقل 2 حرف داشته باشد",
      }));
      return false;
    }
    if (
      !inputValue.match(
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

  function validateEmail(inputValue) {
    if (inputValue === undefined || inputValue.trim() === "") {
      setErrors((errors) => ({
        ...errors,
        email: "پر کردن این فیلد الزامی می باشد",
      }));
      return false;
    }
    if (!inputValue.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}")) {
      setErrors((errors) => ({
        ...errors,
        email: "ایمیل باید با فرمت صحیح وارد شود",
      }));
      return false;
    }
    return true;
  }

  function validatePhoneNumber(inputValue) {
    if (inputValue === undefined || inputValue.trim() === "") {
      setErrors((errors) => ({
        ...errors,
        phoneNumber: "پر کردن این فیلد الزامی می باشد",
      }));
      return false;
    }
    if (inputValue.length !== 11) {
      setErrors((errors) => ({
        ...errors,
        phoneNumber: "شماره تماس باید 11 عدد داشته باشد",
      }));
      return false;
    }
    if (!inputValue.startsWith("09")) {
      setErrors((errors) => ({
        ...errors,
        phoneNumber: "شماره تماس باید با 09 شروع شود",
      }));
      return false;
    }
    return true;
  }


  function formSubmited(e) {
    e.preventDefault();
    dispatch(contactSliceActions.addContact(input));
    e.target.reset();
    setInput({
      id: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      relation: "",
      email: "",
    });
    setDisable(true)
  }

  function formSubmitEdit(e) {
    e.preventDefault();
    dispatch(contactSliceActions.editingMode(input));
    e.target.reset();
    setInput({
      id: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      relation: "",
      email: "",
    });
    dispatch(contactSliceActions.editedId(undefined));
    setDisable(true)
  }

  useEffect(() => {
    if (input.firstName && input.lastName && input.email && input.phoneNumber) {
      setDisable(false);
    } else {
      setDisable(true)
    }
  }, [input]);

  return {
    input,
    setInput,
    errors,
    disable,
    setErrors,
    getInputValue,
    formSubmited,
    formSubmitEdit,
  };
}

export default useFormValidation;
