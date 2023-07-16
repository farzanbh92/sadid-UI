import React from 'react';
import style from './button5.module.css';

const Button5 = (props) => {
    return (
       <button className={style.btn}>{props.name}</button>
    );
};

export default Button5;