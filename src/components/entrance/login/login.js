import React from 'react';
import Table from '../table/table';
import { Link } from 'react-router-dom';
import Button1 from '../../buttons/button1/button1';
import Button5 from '../../buttons/button5/button5';

const Login = () => {
    return (
        <>
        <Table field1={'نام کاربری'} field2={'رمز عبور'} inputType1='text' inputType2={'password'}/>
        <Link to='password' style={{textDecoration:'none',color:'lightblue'}}>  درخواست بازیابی رمزعبور</Link>
        <div style={{marginTop:'80px'}}><Link to='layout'><Button1 name={'ورود'}/></Link></div>
        <div style={{marginTop:'20px'}}><Link to='register'><Button5 name={'ثبت نام'}/></Link></div>
        </>
    );
};

export default Login;