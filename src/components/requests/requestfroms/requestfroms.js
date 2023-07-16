import React from 'react';
import Requestfrom from '../requestfrom/requestfrom';

const Requestfroms = (props) => {
    return (
           props.requestList.map((req,index)=>
            <Requestfrom
            key={index}
            id={req.id}
            name={req.name}
            email={req.email}
            message={req.message}
            nameChanged={(event)=>props.nameChanged(event,req.id)}
            />
           )
        
    );
};

export default Requestfroms;