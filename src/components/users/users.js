import React from 'react';
import Button3 from '../buttons/button3/button3';
import Button4 from '../buttons/button4/button4';
import style from './users.module.css';
import DateTime from '../datetime/datetime';

const Users = () => {
    return (
        <>
       <div className={style.header}>
          <p style={{float:'right'}}>صفحه کاربران</p>
          <div className={style.datetime}>
            <DateTime/>
          </div>
          </div>
          <div className={style.content}>
           <Button4 name={'حذف کاربر'}/>
           <Button3 name={'ایجاد کاربر'}/>
        </div>
       </>

    );
};

export default Users;