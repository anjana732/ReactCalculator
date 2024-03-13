import Buttons from "./Buttons"

function ButtonContainer({numbers}){
    return(
        <>
        {numbers.map((item)=>(
            <Buttons number={item}/>
        ))}
        </>
    )
}

export default ButtonContainer