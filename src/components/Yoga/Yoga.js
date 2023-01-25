import React from 'react';

const Yoga = ({yoga,handleAddToCart}) => {
    return (
        
        <div className="col">
                  <div className="card h-100">
                    <img src={yoga.img} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                      <h5 className="card-title">{yoga.name}</h5>
                      <p className="card-text">Duration: {yoga.time}s</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={()=>handleAddToCart(yoga)} className="btn btn-primary">Add to list</button>
                    </div>
                  </div>
        </div>
    );
};

export default Yoga;