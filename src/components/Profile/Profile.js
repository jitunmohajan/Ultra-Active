import React, { useEffect, useState } from 'react';
import { addToDb, getDb } from '../../utilities/fakedb';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Profile = ({ profile }) => {
    
    const notify = () => toast("Wow Activity Completed!", {position:"top-right",theme:"dark"});

    const [time, setTime] = useState(0);
    
    const breakTime=(time)=>{
        addToDb(time);
        setTime(time);
    }

    useEffect(() => {
        
        const storedCart = getDb();
        setTime(storedCart.time);
        if (storedCart.time === undefined) {
            setTime(0);
        }
    },[])



    let exerciseTime=0;
    for(let exercise of profile){
        exerciseTime=exerciseTime+exercise.time;
    }
    return (
        <div className=''>
            <div className="d-flex container mt-5">
                <img className="img-fluid w-25 rounded-1" src="https://avatars.githubusercontent.com/u/38392683?s=400&u=e1c76a63113178383eb9cdabc7375b4a6c2251cf&v=4" alt=""></img>
                <div className="ps-3 mt-2">
                    <h5>Jitun Mohajan</h5>
                    <p>Chattogram</p>
                </div>
            </div>

            <div>
                <div className="container text-center d-flex justify-content-center ">
                    <div className="row mt-5 gray-color container rounded rounded-1 p-2">
                        <div className="col">
                            <h5>75kg</h5>
                            <p>Weight</p>
                        </div>
                        <div className="col">
                            <h5>5.11</h5>
                            <p>Height</p>
                        </div>
                        <div className="col">
                            <h5>25</h5>
                            <p>Age</p>
                        </div>
                    </div>
                </div>
            </div>


            <h5 className="ms-3 mt-4">Add A Break</h5>
            <div className='d-flex justify-content-around container'>
                <button onClick={()=>breakTime(10)} type="button" className="btn btn-primary">10s</button>
                <button onClick={()=>breakTime(20)} type="button" className="btn btn-primary">20s</button>
                <button onClick={()=>breakTime(30)} type="button" className="btn btn-primary">30s</button>
                <button onClick={()=>breakTime(40)} type="button" className="btn btn-primary">40s</button>
                <button onClick={()=>breakTime(50)} type="button" className="btn btn-primary">50s</button>
            </div>



            <div className='container'>
                <h4 className="ms-3 mt-4">Course Details</h4>
                <div className="ms-3 me-3 mt-3">
                    <div className="d-flex justify-content-around gray-color rounded-2">
                        <h5>Exercise Time</h5>
                        <h5>{exerciseTime} Seconds</h5>
                    </div>

                    <div className="d-flex justify-content-around gray-color rounded-2 mt-3">
                        <h5>Break Time</h5>
                        <h5>{time} Seconds</h5>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <button type="button" onClick={notify} className="btn btn-primary w-100" id="liveToastBtn">Activity Completed</button>
                <ToastContainer/>
            </div>
            
        </div>
    );
};

export default Profile;