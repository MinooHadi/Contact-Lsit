import useFormValidation from "./customFormValidation";
import "./../../assets/styles/form.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Form() {
  const { contact, editingId } = useSelector((state) => state.contact);

  const {
    input,
    setInput,
    errors,
    getInputValue,
    formSubmited,
    formSubmitEdit,
    inputBulurHandler,
  } = useFormValidation();

  useEffect(() => {
    if (editingId) {
      const editContactInfo = contact.find((item) => item.id === editingId);
      setInput(editContactInfo);
    }
  }, [editingId]);

  return (
    <form onSubmit={editingId ? formSubmitEdit : formSubmited}>
      <input
        type="text"
        placeholder="نام"
        name="firstName"
        onChange={getInputValue}
        onBlur={inputBulurHandler}
        defaultValue={editingId ? input.firstName : ""}
      />
      {errors.firstName && <p> {errors.firstName} </p>}
      <input
        type="text"
        placeholder="نام خانوادگی"
        name="lastName"
        onChange={getInputValue}
        onBlur={inputBulurHandler}
        defaultValue={editingId ? input.lastName : ""}
      />
      {errors.lastName && <p> {errors.lastName} </p>}
      <input
        type="phone"
        placeholder="شماره تماس"
        name="phoneNumber"
        onChange={getInputValue}
        onBlur={inputBulurHandler}
        defaultValue={editingId ? input.phoneNumber : ""}
      />
      {errors.phoneNumber && <p> {errors.phoneNumber} </p>}
      <select name="relation" id="" onChange={getInputValue}>
        <option defaultValue={editingId ? input.relation : "نسبت"}>
          {editingId ? input.relation : "نسبت"}
        </option>
        <option value="اعضای خانواده">اعضای خانواده</option>
        <option value="دوست">دوست</option>
        <option value="همکار">همکار</option>
      </select>
      <input
        type="text"
        placeholder="ایمیل"
        name="email"
        onChange={getInputValue}
        onBlur={inputBulurHandler}
        defaultValue={editingId ? input.email : ""}
      />
      {errors.email && <p> {errors.email} </p>}
      {editingId ? (
        <input type="submit" value="ذخیره کردن" />
      ) : (
        <input type="submit" value="اضافه کردن" />
      )}
    </form>
  );
}

export default Form;
