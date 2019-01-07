//higher order component. they wrap other components  :d
//they add certain functionality
//removes redundant html element eg <div>

//actually we do not even need this as react 16.2 provides auxiliary component like this <> </> : d

const aux = (props) => {
    return (props.children);
}


export default aux;
