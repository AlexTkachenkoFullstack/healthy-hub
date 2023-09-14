import { NavLink } from "react-router-dom"

const YourActivity=({goBack})=>{
    return(<>
         <h1>YourActivity</h1>
        <NavLink to='/diary'>
            <button >Next</button>
        </NavLink>
        
        <button onClick={goBack}>Back</button>
    </>)
}

export default YourActivity