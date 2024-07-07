import React from 'react'
import classNames from 'classnames/bind';
import styles from './loginQR.module.scss'
const cx=classNames.bind(styles)
export default function LoginQR() {   
  return (
    <div className={cx('loginQR')}>
       <div id='reader'></div>
    </div>
  )
}
