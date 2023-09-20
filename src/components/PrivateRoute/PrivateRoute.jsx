import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import { getAuthStatus } from "redux/auth/selectors";

const PrivateRoute = ({ redirectTo='/', component }) => {
    // треба перевірити чи авторизований користувач(чи є токен у глобальному стейті) 
const isAuth=useSelector(getAuthStatus)
    // змінити умову для авторизованого чи неавторизованого користувача(!auth)
    const shouldRedirect = !isAuth; //замінити на значення зі стейту
    return (<>
    {shouldRedirect ? <Navigate to={redirectTo} />  : component}
    </>    
    )
}

export default PrivateRoute