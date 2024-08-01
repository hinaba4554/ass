import * as types from "./actiontype";
import axios from "axios";
// get user action
const getusers=(users)=>({
    type:types.GET_USERS,
    payload:users,
});
// user deleted action
const userdeleted = ()=>({
    type:types.DELETE_USER 
});
// add user in form create action
const addusers = ()=>({
    type:types.ADD_USER 
});
// updated user
const userupdated = ()=>({
    type:types.UPDATE_USER, 
});
// edit user
const getuser = (user)=>({
    type:types.GET_SINGLE_USER,
    payload:user, 
});
// get user form
export const loadusers = ()=>{
    return function (dispatch) 
        {
            axios.get(`${process.env.REACT_APP_API}`).then((resp)=>{
                console.log("resp",resp);
                dispatch(getusers(resp.data));
            }).catch((error)=>console.log(error));
        };
};
// to create delete function
export const Deleteuser = (id)=>{
    return function (dispatch) 
        {
            axios
            .delete(`${process.env.REACT_APP_API}/${id}`)
            .then((resp)=>{
                console.log("resp",resp);
                dispatch((userdeleted()));
                dispatch(loadusers());
            }).catch((error)=>console.log(error));
        };
};
// to create add function so that data add the form
export const Addeuser = (user)=>{
    return function (dispatch) 
        {
            axios
            .post(`${process.env.REACT_APP_API}`,user)
            .then((resp)=>{
                console.log("resp",resp);
                dispatch((addusers()));
                
            }).catch((error)=>console.log(error));
        };
};
// edit the data so that use the single get function
export const getsingleuser = (id)=>{
    return function (dispatch) 
        {
            axios
            .get(`${process.env.REACT_APP_API}/${id}`)
            .then((resp)=>{
                console.log("resp",resp);
                dispatch((getuser(resp.data)));
                
            }).catch((error)=>console.log(error));
        };
};
// update function
export const updateuser = (user,id)=>{
    return function (dispatch) 
        {
            axios
            .put(`${process.env.REACT_APP_API}/${id}`,user)
            .then((resp)=>{
                console.log("resp",resp);
                dispatch((userupdated()));
                
            }).catch((error)=>console.log(error));
        };
};