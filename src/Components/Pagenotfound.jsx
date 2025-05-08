import { Link } from "react-router-dom"
import"../App"

const Pagenotfound=()=>{
    return(
        <div className="text-center mt-5">
            <b><h1 className="number">404</h1></b>
            <h3>Oops!Page not found.</h3>
            <p>The page you are looking for might have been removed or is temporarily unavailable</p>
        <Link to={"/addproducts"} className="btn bg-primary text-light" >Go home</Link>
    
        </div>

    )
} 
export default Pagenotfound
