import React from 'react'

const Navbar = () => {
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  return (
    <div>
        <nav className="navbar navbar-dark p-2 " style={{backgroundColor:"#3bb19b"}}>
            <a className="navbar-brand" href="#">
                Evento
            </a>
            <button className="btn " id='nav_btn' style={{color:"#fff"}}  onClick={handleLogout}>
					Logout
				</button>
        </nav>
    </div>
    
  )
}

export default Navbar