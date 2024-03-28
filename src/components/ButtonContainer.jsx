import Buttons from "./Buttons"

function ButtonContainer({onButtonClick}){
    const num = ["C",1,2,"+",3,4,"-",5,6,"*",7,8,"/","=",9,0,"."]
    return(
        <>
        {num.map((buttonName)=>(
           /* <Buttons number={item} onClick={() => {onButtonClick(buttonName)
            console.log("button clicked")}}/>*/
            <button onClick={() => onButtonClick(buttonName)} >{buttonName}</button>
        ))}
        </>
    )
}

export default ButtonContainer