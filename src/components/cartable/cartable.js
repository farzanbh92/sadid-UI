import React from 'react';
import style from './cartable.module.css';
import DateTime from '../datetime/datetime';

const Cartable = () => {
    return (
       <>
       <div className={style.header}>
          <p style={{float:'right'}}>صفحه کارتابل</p>
          <div className={style.datetime}>
            <DateTime/>
          </div>
          </div>
          <div className={style.content}>
       
        </div>
       </>
    );
};

export default Cartable;