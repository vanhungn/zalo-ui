import React from "react";
import classNames from 'classnames/bind'
import styles from './message.module.scss'
const cx=classNames.bind(styles)

const Message=()=>{
    return(
        <div className={cx('as')}>message</div>
    )
}
export default Message