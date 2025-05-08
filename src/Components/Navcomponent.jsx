import React from 'react'
import { Link } from 'react-router-dom'

const Navcomponent = () => {
  return (
    <section className="row ">
  
    <div className="col-md-12 "> 
         {/* <!--the nav tag carries all the content of the navbar--> */}
         <nav className="navbar navbar-expand-md  signupandin a:hover text-dark p-2">
             <Link to="/" className="navbar-brand text-light"><b>Shelly Beauty</b></Link>
             
             <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                 <span className="navbar-toggler-icon">
                 </span>
             </button>
                     {/* <!--the below div carries the navbar links--> */}
                 <div className="collapse navbar-collapse" id="navbarcollapse">
                     <div className="navbar-nav ">
                         <Link to={"/signup"} className="nav-link active  text-dark">Sign Up</Link>
                         <Link to={"/signin"} className="nav-link  text-dark">Sign in</Link>
                         <Link to={"/aboutus"} className="nav-link text -dark">About us</Link>
                         <Link to={"/addproduct"} className="nav-link  text-dark">Add Product</Link>
                         
                         

                     </div>
                 </div>
         </nav>
    </div>
 </section>
  )
}

export default Navcomponent