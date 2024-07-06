import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { user_insert } from '../UserSlice';
import { Link } from 'react-router-dom';

function Add_user() {
    const[formvalue,setformvalue]=useState({
        id:"",
        fname:"",
        lname:"",
        email:"",
        
      });
       const changehandle=(e)=>{
          setformvalue({...formvalue,id:new Date().getTime().toString(),stauts:"unblock",[e.target.name]:e.target.value});
          console.log(formvalue);
        }
        const validation=()=>{
          var result=true;
          if(formvalue.fname==""){
            toast.error('Name field is required')
            result=false;
            return false;
          }
          if(formvalue.lname==""){
            toast.error('Name field is required')
            result=false;
            return false;
          }
          if(formvalue.email==""){
            toast.error('Name field is required')
            result=false;
            return false;
          }
          return result;
        }
  
        const dispatch = useDispatch();
        const submihandle = async(e)=>{
          e.preventDefault();
          if(validation()){
             dispatch(user_insert(formvalue));
              toast.success('user add success');
             setformvalue({...formvalue,fname:"",lname:"",email:""});
          }
        }
  return (
    <>
    <div className="container">
  <h2>Add user</h2>
  <Link to="/" className='btn btn-primary float-end mb-5'>Home</Link>  
  <form className="form-horizontal" action="" method='post' onSubmit={submihandle}>
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="fname">User Fisrt Name:</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" value={formvalue.fname} onChange={changehandle}  placeholder="Enter firstname" name="fname" />
      </div>
    </div>
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="lname">User Last Name:</label>
      <div className="col-sm-10">          
        <input type="text"  className="form-control"  placeholder="Enter last name" name="lname" value={formvalue.lname} onChange={changehandle}/>
      </div>
    </div>
    <div className="form-group">
      <label className="control-label col-sm-2" htmlFor="email">Email:</label>
      <div className="col-sm-10">          
        <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={changehandle} value={formvalue.email}/>
      </div>
    </div>
    <div className="form-group">        
      <div className="col-sm-offset-2 col-sm-10">
        <button type="submit" className="btn btn-default">Submit</button>
      </div>
    </div>
  </form>
</div>
</>
  );
}
export default Add_user


