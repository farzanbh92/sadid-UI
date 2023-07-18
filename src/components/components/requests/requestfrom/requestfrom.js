import React from 'react';
import style from './requestfrom.module.css';
// import Button5 from '../../buttons/button5/button5';

const Requestfrom = (props) => {
  return (

    <div className={style.request}>

      <form>

        <label>شماره درخواست: {props.id}</label>

        <label>
          نام و نام خانوادگی
        </label>
        <input type='text' value={props.name} onChange={props.nameChanged} />

        <label>
          ایمیل
        </label>
        <input type='email' value={props.email} />

        <label>
          متن درخواست
        </label>
        <textarea value={props.message} />
        <br /><br />
        {/* <Button5 name={'ثبت درخواست'} /> */}
      </form>
    </div>

  );
};

export default Requestfrom;