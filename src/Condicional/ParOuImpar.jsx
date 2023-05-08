export default _ => {
    const isPar = _.numero % 2 === 0
    return (
        <div>
            {
                isPar ? <h1>Par</h1> : <h1>Impar</h1>
            }
        </div>
    )
}