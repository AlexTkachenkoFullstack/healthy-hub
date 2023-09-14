const AgeAndGender=({goNext, goBack})=>{
    return(<>
         <h1>AgeAndGender</h1>
        <button onClick={goNext}>Next</button>
        <button onClick={goBack}>Back</button>
    </>)
}

export default AgeAndGender