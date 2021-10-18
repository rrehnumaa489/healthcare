import React from 'react';
import { useParams } from 'react-router';

const More = () => {
    const {moreId} = useParams()
    
    return (
        <div>
            <h3 className="m-5">Name: {moreId}</h3>
        </div>
    );
};

export default More;