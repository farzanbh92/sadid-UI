import React from 'react'; 
import DateTime from '../datetime/datetime';
import style from './messages.module.css';

const Messages = () => {
    return (
        <>
        <div className={style.header}>
           <p style={{float:'right'}}>صفحه پیام ها</p>
           <div className={style.datetime}>
             <DateTime/>
           </div>
           </div>
           <div className={style.content}>
        
         </div>
        </>
    );
};

export default Messages;