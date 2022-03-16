import React, { useEffect } from 'react';
import {  useSelector,useDispatch, } from 'react-redux';
import { getcurrent } from '../redux/action/authActions';
function Profile() {
    const dispatch= useDispatch()
    const user = useSelector(state=> state.authReducer.user)
    useEffect(()=>{dispatch(getcurrent())} ,[user])
    return <div>
    <h1>  {user && user.email} </h1>
      </div>;
}


export default Profile;