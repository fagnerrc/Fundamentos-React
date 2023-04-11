export default _ => {

    return (
        <div className="Card" style={{
            backgroundColor:_.color || "#002",
            borderColor:_.color|| "#002"
        }}>

            <div className="titulo"><h2>{_.titulo}</h2></div>
            <div className="conteudo">
                {_.children}
            </div>
        </div>
    )
}