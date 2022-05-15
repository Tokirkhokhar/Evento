import React from 'react'
import {Link , useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const AddnewEvent = () => {
    const [Eventdata, setEventData] = useState({
		eventName: "",
		eventDisc: "",
	    startingTime: "",
		endingTime: "",
	});

    const handleChange = ({ currentTarget: input }) => {
        console.log(input.name)
		setEventData({  ...Eventdata,[input.name]: input.value });
	};
    const handleSubmit = async (e) => {
        console.log("submiting");
		e.preventDefault();
		try {
            
           const url ="http://localhost:8080/api/event/addevent";
           const {data : res} = await axios.post(url,Eventdata);
           console.log(res.message); 
          
        }
        catch (error){
            console.log(error)
        }
    }

  return (
      <>
           <section className="vh-100 gradient-custom">
                <div className="container  h-100">
                    <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                        <div className="card-body p-4 p-md-5">
                            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Register your Event</h3>
                            <form onSubmit={handleSubmit}>

                            <div className="row">
                                <div className="col-md-12 mb-4">
                                <div className="form-outline">
                                    <input type="text" id="firstName" className="form-control form-control-lg" 
                                    onChange={handleChange}
                                    value={Eventdata.eventName}
                                    name="eventName"
                                    />
                                    <label className="form-label" htmlFor="firstName">Event Name</label>
                                </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 mb-4 d-flex align-items-center">
                                <div className="form-outline datepicker w-100">
                                    <input type="text" className="form-control form-control-lg" id="birthdayDate" 
                                    onChange={handleChange}
                                    value={Eventdata.eventDisc}
                                    name="eventDisc" />
                                    <label htmlFor="birthdayDate" className="form-label">Event Discription</label>
                                </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 mb-4 pb-2">
                                        <div class='col-sm-12'>
                                            <input type='datetime-local' class="form-control" id='s_time' 
                                            onChange={handleChange}
                                            value={Eventdata.startingTime}
                                            name="startingTime"
                                            />
                                            <label htmlFor="s_time" className="form-label">Starting Time</label>
                                        </div>
                                </div>
                                <div className="col-md-12 mb-4 pb-2">
                                        <div class='col-sm-12'>
                                            <input type='datetime-local' class="form-control" id='e_time'
                                            onChange={handleChange}
                                            value={Eventdata.endingTime}
                                            name="endingTime" />
                                            <label htmlFor="e_time" className="form-label">Ending Time</label>
                                        </div>
                                </div>
                            </div>

                            <div className="mt-2 ">
                                
                                    <input className="btn btn-primary btn-lg" type="submit" value="Register" />
                                
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
           </section>
      </>
  )
}

export default AddnewEvent