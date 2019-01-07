import React from 'react';

//normal javascript function that qualifies as hoc
//{...props} will send all of the props without any modification  :D simple as that 


const withClass1 = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent  {...props}/>
        </div>
    );
}


export default withClass1;
