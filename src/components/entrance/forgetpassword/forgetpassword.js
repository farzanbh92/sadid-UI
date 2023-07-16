import React from 'react';
import Table from '../table/table';
import { Link } from 'react-router-dom';
import Button1 from '../../buttons/button1/button1';

const ForgetPass = () => {
    return (
        <>
       <Table field1={'شماره تماس'} field2={'کد تایید'} inputType1={'number'} inputType2={'number'}/>
       <Link  style={{textDecoration:'none',color:'lightblue'}}>  درخواست مجدد کد بازیابی</Link>
       <div style={{marginTop:'80px'}}><Link to='پیشخوان'><Button1 name={'ثبت درخواست'}/></Link></div>
       </>
    );
};

export default ForgetPass;