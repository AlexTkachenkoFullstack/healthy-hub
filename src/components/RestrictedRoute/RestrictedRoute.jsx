import { Navigate } from "react-router-dom"


const RestrictedRoute = ({component, redirectTo}) => {
    // перевірити, чи зареєстрований користувач( чи є токен у стейті)
    const auth=false; //замінити за значення зі стейту
    return (
        auth ? <Navigate to={redirectTo} replace/> : component
    )
}

export default RestrictedRoute