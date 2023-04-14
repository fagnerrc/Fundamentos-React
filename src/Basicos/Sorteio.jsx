
export default _ => {
    const result = Math.floor(Math.random() * (_.nun1 - _.nun2 + 1)) + _.nun2;
    return (
        <div>
            <h2> Valor Minimo: {_.nun1}</h2>
            <h3>Valor Maximo: {_.nun2}</h3>
            <h4> Resultado Aleatório: {result}</h4>
        </div>
    )
}