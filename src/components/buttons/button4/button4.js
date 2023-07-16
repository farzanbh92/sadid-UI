import React from 'react';
import style from './button4.module.css';
import deleteUser from '../../../assets/images/delete.png';


const Button4 = (props) => {
    return (
        <button type='text' className={style.btn4}>{props.name} <img src={deleteUser} alt='deleteUser'/></button>
    );
};

export default Button4;