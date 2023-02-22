import useFormValidation from "./customFormValidation";
import "./../../assets/styles/form.css";

function Form() {
  const { input, getInputValue, formSubmited } = useFormValidation();

  return (
    <form onSubmit={formSubmited}>
      <input type="text" placeholder="نام" name="firstName" onChange={getInputValue}/>
      <input type="text" placeholder="نام خانوادگی" name="lastName" onChange={getInputValue}/>
      <input type="phone" placeholder="شماره تماس" name="phoneNumber" onChange={getInputValue}/>
      <select name="relation" id="" onChange={getInputValue}>
        <option value="نسبت">نسبت</option>
        <option value="اعضای خانواده">اعضای خانواده</option>
        <option value="دوست">دوست</option>
        <option value="همکار">همکار</option>
      </select>
      <input type="email" placeholder="ایمیل" name="email" onChange={getInputValue}/>
      <input type="submit" value="اضافه کردن" />
    </form>
  );
}

export default Form;
