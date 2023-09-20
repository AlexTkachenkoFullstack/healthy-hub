import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import { getAuthStatus } from "redux/auth/selectors";

const RestrictedRoute = ({component, redirectTo}) => {
    // перевірити, чи зареєстрований користувач( чи є токен у стейті)
    const auth=useSelector(getAuthStatus); //замінити за значення зі стейту
    return (<>
        {auth ? <Navigate to={redirectTo} replace/> : component}
    </>    
    )
}

export default RestrictedRoute