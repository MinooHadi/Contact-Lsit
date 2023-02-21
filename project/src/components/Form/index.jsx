import "./../../assets/styles/form.css"

function Form() {
    return(
        <form>
            <input type="text" placeholder="نام" />
            <input type="text" placeholder="نام خانوادگی" />
            <input type="phone" placeholder="شماره تماس" />
            <select name="nesbat" id="">
                <option value="نسبت">نسبت</option>
                <option value="اعضای خانواده">اعضای خانواده</option>
                <option value="دوست">دوست</option>
                <option value="همکار">همکار</option>
            </select>
            <input type="email" placeholder="ایمیل" />
            <input type="submit" value="اضافه کردن" />
        </form>
    )
}

export default Form