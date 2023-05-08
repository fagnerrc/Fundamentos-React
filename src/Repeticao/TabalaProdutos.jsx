import produtos from "../data/produtos"
export default _ => {
    const tabela = produtos.map((produtos) => {
        return (

            <tr key={produtos.id}>
                <td>{produtos.id}</td> <td>{produtos.nome}</td> <td>{produtos.preco}</td>
            </tr>


        )
    })
    return (
        <table>
            <tr>
                <th>Numero: </th> <th>Nome: </th> <th>Preço: </th>
            </tr>
            <tbody>
                {tabela}
            </tbody>
        </table>
    )
}