import React from 'react';
import Dropdown from '../dropdown/dropdown';
import style from '../../components/counter/counter.module.css';
import DateTime from '../datetime/datetime';

const Counter = () => {
    return (
      <>
        <div className={style.header}>
          <p style={{float:'right'}}>صفحه پیشخوان</p>
          <div className={style.datetime}>
            <DateTime/>
          </div>
        </div>
        <div className={style.content}>
        <Dropdown value1='گزینه 1' value2='گزینه 2' value3='گزینه 3'/>
        </div>
        </>
    );
};

export default Counter;