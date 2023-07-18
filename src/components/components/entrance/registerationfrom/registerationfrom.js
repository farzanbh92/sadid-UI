import React, { useState } from 'react';
import style from './registerationfrom.module.css';

const Registerationfrom = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobilenumber:'',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <table className={style.table}>
              <tr>
                <td className={style.td1}>
                    <input
                    className={style.input1}
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}/>
                  </td>
                <td className={style.td2}>
                  نام
                </td>
              </tr>
              <tr>
                <td className={style.td1}>
                    <input
                    className={style.input1}
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}/></td>
                <td className={style.td2}>
                  نام خانوادگی
                </td>
                </tr>
                <tr>
                <td className={style.td1}>
                    <input
                    className={style.input1}
                    type="number"
                    name="mobilenumber"
                    value={formData.mobilenumber}
                    onChange={handleChange}/></td>
                <td className={style.td2}>
                 موبایل
                </td>
              </tr>
              <tr>
                <td className={style.td1}>
                    <input
                    className={style.input1}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}/></td>
                <td className={style.td2}>
                  ایمیل
                </td>
              </tr>
              <tr>
                <td className={style.td1}>
                 <input type='radio' name='a' value='آقا'/>آقا
                 <input type='radio' name='a' value='خانم'/>خانم
                </td>
                <td className={style.td2}>
                  جنسیت
                </td>
              </tr>
              <tr>
                <td className={style.td1}> 
                    <input
                    className={style.input1}
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}/>
                  </td>
                <td className={style.td2}>
                 رمز عبور
                </td>
              </tr>
              <tr>
              
              </tr>
              
            </table>
        
          <button type="submit" className={style.btn}>ثبت نام</button>
        </form>
      );
    }
    
export default Registerationfrom;