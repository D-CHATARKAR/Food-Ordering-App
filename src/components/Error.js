import eimg from "../assets/Error.jpg"
import {useRouteError} from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    return (
        <>
        <div className="error-img">
            <img src={eimg} alt="Opps something went wrong !!" srcset="" />
            <h1>{err.status +" : "+ err.statusText}</h1>
        </div>
       
        </>
    );
};
export default Error;