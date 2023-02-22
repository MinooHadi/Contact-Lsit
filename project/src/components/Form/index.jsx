import useFormValidation from "./customFormValidation";
import "./../../assets/styles/form.css";

function Form() {
  const {
    input,
    setInput,
    errors,
    setErrors,
    getInputValue,
    formSubmited,
    inputBulurHandler,
  } = useFormValidation();

  return (
    <form onSubmit={formSubmited}>
      <input
        type="text"
        placeholder="نام"
        name="firstName"
        onChange={getInputValue}
        onBlur={inputBulurHandler}
      />
      {errors.firstName && <p> {errors.firstName} </p>}
      <input
        type="text"
        placeholder="نام خانوادگی"
        name="lastName"
        onChange={getInputValue}
        onBlur={inputBulurHandler}
      />
      {errors.lastName && <p> {errors.lastName} </p>}
      <input
        type="phone"
        placeholder="شماره تماس"
        name="phoneNumber"
        onChange={getInputValue}
        onBlur={inputBulurHandler}
      />
      {errors.phoneNumber && <p> {errors.phoneNumber} </p>}
      <select name="relation" id="" onChange={getInputValue}>
        <option value="نسبت">نسبت</option>
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
      />
      {errors.email && <p> {errors.email} </p>}
      <input type="submit" value="اضافه کردن" />
    </form>
  );
}

export default Form;
