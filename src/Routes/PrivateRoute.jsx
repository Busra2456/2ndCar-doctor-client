import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {
      const { loading,user} = useContext(AuthContext);
      if(loading){
            return <progress className="progress w-56"></progress>
      }
      if(user?.email){
            return children;
      }
      return <Navigate to="/Login" replace></Navigate>
     
};

export default PrivateRoute;