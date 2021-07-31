import {useLogout} from "../utils/auth";

function LogoutButton (){
  const logout = useLogout();
  return <p onClick={logout}>Logout</p>
}

export default LogoutButton