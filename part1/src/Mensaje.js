const Mensaje = (props) =>{

    console.log(props)

    return (
        <>
            <h1>{props.message}</h1>
            <h2>{props.color}</h2>
        </>
    )
}

export default Mensaje;