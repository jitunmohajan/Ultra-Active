import React, { useEffect, useState } from 'react';
import './YogaExercise.css';
import Yoga from '../Yoga/Yoga';
import Profile from '../Profile/Profile';
import logo from '../../image/Logo.svg';


const Courses = () => {

    const [yogas,setYogas]=useState([]);
    const [profile,setProfile]=useState([]);
    useEffect(()=>{
        fetch('yogas.json')
        .then(res=>res.json())
        .then(data=>setYogas(data))
    },[]);

    const handleAddToCart=(yoga)=>{
        const newProfile=[...profile,yoga];
        setProfile(newProfile); 
    }

    return (
        <div>
            <div className="d-flex flex-column flex-md-row">
                <div className="container mt-5 yoga-exercise-container">
                    <div className='d-flex'>
                        <img className='img-fluid img-width' src={logo} alt="" />
                        <h3 className="text-left text-primary">Yoga Exercise</h3>
                    </div>
                    <h5 className="m-4">Select Today's Exercise</h5>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    {
                        yogas.map(yoga => <Yoga key={yoga.id} yoga={yoga} handleAddToCart={handleAddToCart}></Yoga>)
                    }
                    </div>
                </div>


                <div className=" bg-white profile-container">
                    <Profile profile={profile}></Profile>
                </div>

            </div>

            <div className="container mb-5 mt-5">
                <div className=" d-flex flex-column align-items-center">
                    <div className="col-lg-8 mb-3">
                        <h2 className="text-center fw-semibold section-title"> Questions and Answer</h2>
                    </div>

                    <div className="col-lg-8">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How does react work?
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code. 
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border border-2 rounded rounded-1">
                                <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Difference between props and state? 
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mt-3 border border-2 rounded rounded-1">
                                <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What are the use of useEffect?
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. Since the render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects. For example, consider updating the document title for a simple counter component to the current value. On the initial render, we set the current clicked value to 0 clicks.
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Courses;