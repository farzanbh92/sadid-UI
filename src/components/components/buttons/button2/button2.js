import React from 'react';
import style from './button2.module.css';

const Button2 = (props) => {
    return (
       <button className={style.btn}>{props.name}</button>
    );
};

export default Button2;