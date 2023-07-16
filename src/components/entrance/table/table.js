import React from 'react';
import style from './table.module.css';

const Table = (props) => {
    return (
        <div className={style.table}>
       <table>
        <tr>
            <td style={{width:'300px',border:'solid 10px transparent'}}>
                <input type={props.inputType1}/>
                </td>
            <td style={{color:'lightgray',border:'solid 10px transparent',width:'100px'}}>{props.field1} </td>
        </tr>
        <tr>
            <td style={{width:'300px',border:'solid 10px transparent'}}>
                <input type={props.inputType2}/>
                </td>
            <td style={{color:'lightgray',border:'solid 10px transparent',width:'100px'}}>{props.field2} </td>
        </tr>
       </table>
       </div>
    );
};

export default Table;