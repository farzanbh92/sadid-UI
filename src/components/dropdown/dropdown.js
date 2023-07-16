import React from 'react';
import style from './dropdown.module.css';

const Dropdown = (props) => {
    return (
        <div>
<select className={style.dropdown}> 

<option value="value1">{props.value1}</option>

<option value="value2">{props.value2}</option>

<option value="value3">{props.value3}</option>

</select>
        </div>
    );
};

export default Dropdown;