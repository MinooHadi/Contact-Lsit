import useFormValidation from "./customFormValidation";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Form() {
  const { contact, editingId } = useSelector((state) => state.contact);

  const {
    input,
    setInput,
    errors,
    disable,
    getInputValue,
    formSubmited,
    formSubmitEdit,
  } = useFormValidation();

  useEffect(() => {
    if (editingId) {
      const editContactInfo = contact.find((item) => item.id === editingId);
      setInput(editContactInfo);
    }
  }, [editingId]);

  return (
    <form onSubmit={editingId ? formSubmitEdit : formSubmited} className={`flex flex-col w-1/2 gap-4 m-auto`}>
      <input className={`p-1 outline-none`}
        type="text"
        placeholder="نام"
        name="firstName"
        onChange={getInputValue}
        defaultValue={editingId ? input.firstName : ""}
      />
      {errors.firstName && <p> {errors.firstName} </p>}
      <input className={`p-1 outline-none`}
        type="text"
        placeholder="نام خانوادگی"
        name="lastName"
        onChange={getInputValue}
        defaultValue={editingId ? input.lastName : ""}
      />
      {errors.lastName && <p> {errors.lastName} </p>}
      <input className={`p-1 outline-none`}
        type="phone"
        placeholder="شماره تماس"
        name="phoneNumber"
        onChange={getInputValue}
        defaultValue={editingId ? input.phoneNumber : ""}
      />
      {errors.phoneNumber && <p> {errors.phoneNumber} </p>}
      <select name="relation" id="" onChange={getInputValue} className={`p-1 outline-none`}>
        <option defaultValue={editingId ? input.relation : "نسبت"}>
          {editingId ? input.relation : "نسبت"}
        </option>
        <option value="اعضای خانواده">اعضای خانواده</option>
        <option value="دوست">دوست</option>
        <option value="همکار">همکار</option>
      </select>
      <input className={`p-1 outline-none`}
        type="text"
        placeholder="ایمیل"
        name="email"
        onChange={getInputValue}
        defaultValue={editingId ? input.email : ""}
      />
      {errors.email && <p> {errors.email} </p>}
      <input className={disable ? `bg-gray-400 border-none text-white p-3` : `bg-slate-900 border-none text-white p-3`}
        type="submit"
        value={editingId ? "ذخیره کردن" : "اضافه کردن"}
        disabled={disable}
      />
    </form>
  );
}

export default Form;
