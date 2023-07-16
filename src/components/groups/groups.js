import React from 'react';
import style from './groups.module.css';
import DateTime from '../datetime/datetime';
import Button3 from '../buttons/button3/button3';
import Button4 from '../buttons/button4/button4';

const Groups = () => {
    return (
        <>
         <div className={style.header}>
          <p style={{float:'right'}}>صفحه کارگروه ها</p>
          <div className={style.datetime}>
            <DateTime/>
          </div>
          </div>
          <div className={style.content}>
          <Button3 name={'ایجاد کارگروه'}/>
          <Button4 name={'حذف کارگروه'}/>
        </div>
        </>
    );
};

export default Groups;