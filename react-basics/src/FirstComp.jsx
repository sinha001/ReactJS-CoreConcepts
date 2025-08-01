function FirstComp(){

    {/* alert(sum());  this is function */}

    return(
        <div style={{ backgroundColor: "gray" }}>
            <h1 >First Component</h1>
            <Fruit/> {/* here, we calling component.. we cannot call function as same as component.. */}
            <Colors/>
        </div>
    )
}

function Fruit(){
    return(
        <h1>Apple</h1>
    )
}

function Colors(){
    return(
        <h1 style={{backgroundColor:"red"}}>Red Color</h1>
    )
}

{/* Understand the difference between component and javascript.. */}
function sum(){
    return 10+10;
}

export default FirstComp