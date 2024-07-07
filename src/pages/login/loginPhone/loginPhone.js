import React, { useState } from 'react'
import Input from '../../../components/inputs/inputs'
import Button from '../../../components/buttons/buttons'
import { Phone,Password } from '../../../components/icons/icons'
import "react-phone-number-input/style.css";
import classNames from "classnames/bind";
import styles from "./loginPhone.module.scss";
const cx = classNames.bind(styles);
export default function LoginPhone({formik,errorPhone,phone, setPhone,PhoneInput}) {

  const [focusError,setFocusError]= useState(true)
  return (
    <>
 <div className={cx("form")}>
            <div className={cx("phone")}>
              <Phone className={cx("phoneIcon")} />
              <div className={cx(focusError?'errorPassword':'focusError')}>
                 <p className={cx('error')}>{errorPhone}</p>
             </div>
              <PhoneInput
                type='text'
                className={cx("phoneInput")}
                placeholder="Số điện thoại"
                defaultCountry="VN"
                onFocus={()=>setFocusError(false)}
                onBlur={()=>setFocusError(true)}
                value={phone}
                onChange={setPhone}
              />
            </div>
            <div className={cx("password")}>
              <Password className={cx("passwordIcon")} />
              {formik.errors.password && formik.touched.password && (
                 <div className={cx('errorPassword')}>
                 <p className={cx('error')}>{formik.errors.password}</p>
             </div>
              )}
              <Input
                name="password"
                className={cx("passwordInput")}
                type="password"
                value={formik.values.password}
                placeholder="Mật khẩu"
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <Button
            className={cx("buttonSubmit")}
            label="Đăng nhập với mật khẩu"
            type="submit"
          />
           <Button
            className={cx("loginPhone")}
            label="Đăng nhập bằng thiết bị di động"
            type="button"
          />
          <p className={cx('forgot')}>Quên mật khẩu?</p>
    </>
  )
}
