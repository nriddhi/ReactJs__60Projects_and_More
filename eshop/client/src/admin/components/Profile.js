import React from 'react'
import { Link } from 'react-router-dom';
import { useGetUserDataQuery } from '../../store/ApiSlice';


export default function Profile() {
    const {data, isLoading} = useGetUserDataQuery();

    console.log(data);

    if(isLoading) return 'Loading..';
  return (
 <>
  <div className="main_content" id="main-content">
                <div className="page">
                    <div className="container-fluid">
                        <div className="header text-center pb-2">
                         <h3>User Profile</h3>
                        </div>
                        <div className="clearfix p-3">
                        <form className="edit-profile my-2 my-lg-0">
                        <Link to='/admin-dashboard/user-profile-edit'><button type="button" class="btn btn-primary">Edit Profile</button></Link>
                    </form>
                        <div className="body">
                                <h4 className="text-muted">Name</h4>
                                <p>{data?.user?.name? data?.user?.name :'No data'}</p>
                            
                                <h4 className="text-muted">Username</h4>
                                <p>{data?.user?.username ? data?.user?.username :'No data'}</p>
                                
                                <h4 className="text-muted">Email address: </h4>
                                <p>{data?.user?.email ? data?.user?.email :'No data'}</p>                            
                          
                                <h4 className="text-muted">Address</h4>
                                <p>{data?.user?.address? data?.user?.address :'No data' }</p>

                                <h4 className="text-muted">Mobile</h4>
                                <p>{data?.user?.mobile? data?.user?.mobile :'No data' }</p>

                                <h4 className="text-muted">Verified</h4>
                                <p>{data?.user?.verified? 'True' :'False' }</p>
                              
                              
                            </div>
                                </div>
                                </div>
                                </div>
                                </div>

 </>
  )
}
