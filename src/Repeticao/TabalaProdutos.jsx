import produtos from "../data/produtos"
export default _ => {
    const tabela = produtos.map((produtos) => {
        return (
        
                <tr key={produtos.id}>
                    <div className={produtos.id}> Numero: {produtos.id} Nome: {produtos.nome} Preço: {produtos.preco}</div>
                </tr>
            

        )
    })
    return (
        <div>
            <tr>
                <td>{tabela}</td>
            </tr>
        </div>
    )
}