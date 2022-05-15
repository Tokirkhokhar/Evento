import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'



const ListedEvents = () => {
    const [eventsList, setEventsList] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/api/event/getevent")
        .then(res=>res.json())
        .then((data)=>{
            setEventsList({...data});
        })
      
    },[]);

   
  return (
      <>
        <Navbar/>
        <div className='w-100 h-100 container ' >
                    <div className='w-100 mb-3 d-flex justify-content-between  text-center mt-5'>
                        <h2 style={{color:"black"}} className="text-center ">Listed Evnets</h2>
                        <Link to="/addevent"><button className='btn' style={{borderRadius:"50%",backgroundColor:"#3bb19b",color:"#fff"}}>+</button></Link>
                    </div>
                     <hr/>

                     <div className='eventList d-flex '>
                            {
                                Object.keys(eventsList).map(event=>{
                                      return(
                                <div className="card mr-4" style={{width: "18rem",marginRight:"20px"}}>
                                    
                                        <div className="card-body">
                                            <h5 className="card-title">{eventsList[event].eventName}</h5>
                                            <p className="card-text">{eventsList[event].eventDisc}</p>
                                            <p>start at {eventsList[event].startingTime}</p>
                                            <p>end at {eventsList[event].endingTime}</p>
                                            
                                        </div>
                                </div>         
                                      )
                                })
                            }
       
                    </div>
        </div>
      </>

  )
}
export default ListedEvents