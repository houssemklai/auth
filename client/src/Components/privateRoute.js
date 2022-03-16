import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function PrivateRoute({children}) {

    const token= localStorage.getItem('token')
    const auth= useSelector(state=>state.authReducer.auth)
    console.log(token)
    console.log(children)
    return <div>


{token && auth ? children : <Navigate  to= '/login' />}
</div>;
}

export default PrivateRoute;

