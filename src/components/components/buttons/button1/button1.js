import React from 'react';
import style from './button1.module.css';

const Button1 = (props) => {
    return (
        <button className={style.btn1}>{props.name}</button>
    );
};

export default Button1;