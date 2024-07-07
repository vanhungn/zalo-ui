import React, { useState } from "react";
import Button from "../../components/buttons/buttons";
import classNames from "classnames/bind";
import styles from "./login.module.scss";
import { useFormik } from "formik";
import LoginQR from "./loginQR/loginQR";
import LoginPhone from "./loginPhone/loginPhone";
import PhoneInput,{isValidPhoneNumber} from "react-phone-number-input";
import * as yup from "yup";
const cx = classNames.bind(styles);

const Login = () => {
  const [phone, setPhone] = useState();
  const [errorPhone, setErrorPhone] = useState("");
  const [typeLogin, setTypeLogin] = useState(true);
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: yup.object({
      password: yup.string().required("Please provide a valid password"),
    }),
    onSubmit: (value) => {
      if (phone === undefined) {
        setErrorPhone("Please enter your phone number");
      }
      if (isValidPhoneNumber(phone)===false) {
        setErrorPhone("Please enter the full phone number");
      }
      else{
        setErrorPhone("");
      }
      console.log(isValidPhoneNumber(phone));
    },
  });
  console.log(phone)
  return (
    <div className={cx("registerBackground")}>
      <form onSubmit={formik.handleSubmit} className={cx("registerForm")}>
        <div className={cx("logo")}></div>
        <p className={cx("title")}>
          Đăng nhập tài khoản Zalo <br />
          để kết nối với ứng dụng Zalo Web
        </p>
        <div className={cx("backgroundForm")}>
          <div className={cx("selectLogin")}>
            <Button
              onClick={() => setTypeLogin(false)}
              type="button"
              label="VỚI MÃ QR"
              className={cx(typeLogin ? "buttonSelect" : "buttonSelected")}
              style={{
                borderRight: typeLogin ? "1px solid #fff" : "1px solid #000000",
              }}
            />
            <Button
              onClick={() => setTypeLogin(true)}
              type="button"
              label="VỚI SỐ ĐIỆN THOẠI"
              className={cx(typeLogin ? "buttonSelected" : "buttonSelect")}
              style={{
                borderLeft: typeLogin ? "1px solid #000000" : "1px solid #fff",
              }}
            />
          </div>
          <div
            className={cx("scroll")}
            style={{ marginLeft: typeLogin ? "190px" : "30px" }}
          ></div>
          {typeLogin ? (
            <LoginPhone
              formik={formik}
              errorPhone={errorPhone}
              phone={phone}
              setPhone={setPhone}
              PhoneInput={PhoneInput}
            />
          ) : (
            <LoginQR />
          )}
        </div>
      </form>
    </div>
  );
};
export default Login;
