import React, {Component} from 'react';

//normal javascript function that qualifies as hoc
//{...props} will send all of the props without any modification  :D simple as that

/*
const withClass1 = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent  {...props}/>
        </div>
    );
}
*/


//similar to above but stateful component

const withClass1 = (WrappedComponent, className) => {
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent  {...this.props}/>
                </div>
            )
        }
    }
}


export default withClass1;
