// import React from "react";
// import { GoogleLogout } from "react-google-login";
// import { useHistory } from "react-router-dom"
// import {useDispatch} from "react-redux";
// import  {logout} from '../../Store/actions/action'

// function Logout({children}) {
//     let clientId = import.meta.env.client_id
//     const history = useHistory();
//     const dispatch = useDispatch();
//   const responseGoogle = () => {
//     dispatch(logout());
//     history.push({
//       pathname:'/'
//   });
//   };
//   return (
//     <>
//       <GoogleLogout
//         clientId={clientId}
//         render={renderProps => (
//             <span onClick={renderProps.onClick} 
//                 disabled={renderProps.disabled}
//                 className=" btnOut m-3"
//                 > {children}</span>
//           )}
    
//         onLogoutSuccess={responseGoogle}
//       ></GoogleLogout>
//     </>
//   );
// }

// export default Logout;