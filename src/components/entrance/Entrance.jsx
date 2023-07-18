import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './entrance.module.css';
//import Table from '../table/table';


const Entrance = () => {
    return (
        
        <div className={style.entrance}>
            <div className={style.schem}></div>
            <div className={style.inputs}>
                <Outlet />
            </div>
        </div>
    );
};

export default Entrance;