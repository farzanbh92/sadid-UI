import React , {useState} from 'react';
import style from './requests.module.css';
import DateTime from '../datetime/datetime';
import Requestfroms from './requestfroms/requestfroms';

const Requests = () => {

const [reqForm,setReqForm]=useState([
  {id:'',name:'',email:'',message:''}
]);

const nameChangeHandler=(event,id)=>{
const reqIndex=reqForm.findIndex(req=>{
  return req.id===id
})
  const reqs={...reqForm[reqIndex]};
  reqs.name=event.target.value;
  const requ=[...reqForm];
  requ[reqIndex]=reqs;
}

    return (
        <>
        <div className={style.header}>
          <p style={{float:'right'}}>صفحه درخواست ها</p>
          <div className={style.datetime}>
            <DateTime/>
          </div>
        </div>
        
        <div className={style.content}>
    <Requestfroms 
    requestList={reqForm}
    nameChanged={nameChangeHandler}
    />
    </div>

      </>
    );
};

export default Requests;