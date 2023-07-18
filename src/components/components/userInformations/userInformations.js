import React from 'react';
import style from './userInformations.module.css';
import DateTime from '../datetime/datetime';

const UserInformations = () => {
    return (
        <>
        <div className={style.header}>
          <p style={{float:'right'}}>صفحه اطلاعات کاربری </p>
          <div className={style.datetime}>
            <DateTime/>
          </div>
        </div>
        <div className={style.content}>
        
        </div>
        </>
    );
};

export default UserInformations;