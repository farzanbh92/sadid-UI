import React from 'react';
import addUser from '../../../assets/images/add.png';
import style from './button3.module.css';

const Button3 = (props) => {
    return (
        <button type='text' className={style.btn3}>{props.name} <img src={addUser} alt='add'/></button>
    );
};

export default Button3;