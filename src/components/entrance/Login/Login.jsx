import React, { useState } from 'react';
import Table from '../table/table';
import { Link } from 'react-router-dom';
import style from '../table/table.module.css'
import { loginMobile, verifyCode } from '../../../services/loginService';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../../features/login/loginSlice';
const Login = () => {
    const dispatch = useDispatch();

    const [state, setState] = useState(1);
    const [mobile, setMobile] = useState("");
    const [code, setCode] = useState("");

    const mobileHandler = async e => {
        e.preventDefault();
        const { data } = await loginMobile({ mobile: mobile });
        if (data) {
            setState(2)
        }
    }
    const codeHandler = async e => {
        e.preventDefault();
        const { data } = await verifyCode({ mobile: mobile, code: code });
        if (data) {
            localStorage.setItem("token", data);
            dispatch(setLogin(true));
        }
    }
    if (state === 1)
        return (
            <>

                <form className={style.table} onSubmit={mobileHandler}>
                    <table>
                        <tr>
                            <td style={{ width: '300px', border: 'solid 10px transparent' }}>
                                <input value={mobile} onChange={e => setMobile(e.target.value)} type={"text"} />
                            </td>
                            <td style={{ color: 'lightgray', border: 'solid 10px transparent', width: '100px' }}>شماره همراه </td>
                        </tr>

                        <tr>
                            <td colSpan={"2"}>

                                <Link to='password' style={{ textDecoration: 'none', color: 'lightblue' }}>  درخواست بازیابی رمزعبور</Link>
                                <div style={{ marginTop: '80px' }}><button type='submit' name={'ورود'} >وورد</button></div>
                                <div style={{ marginTop: '20px' }}><Link to='register'><button  >ثبت نام</button></Link></div>
                            </td>

                        </tr>
                    </table>
                </form>
            </>
        );
    else return (
        <>

            <form className={style.table} onSubmit={codeHandler}>
                <table>
                    <tr>
                        <td style={{ width: '300px', border: 'solid 10px transparent' }}>
                            <input type={"text"} value={code} onChange={e => setCode(e.target.value)} />
                        </td>
                        <td style={{ color: 'lightgray', border: 'solid 10px transparent', width: '100px' }}>کد اعتبار سنجی </td>
                    </tr>

                    <tr>
                        <td colSpan={"2"}>

                            <Link to='password' style={{ textDecoration: 'none', color: 'lightblue' }}>  درخواست بازیابی رمزعبور</Link>
                            <div style={{ marginTop: '80px' }}><button type='submit'>وورد</button></div>
                            <div style={{ marginTop: '20px' }}><Link to='register'><button  >ثبت نام</button></Link></div>
                        </td>

                    </tr>
                </table>
            </form>
        </>
    )
};

export default Login;