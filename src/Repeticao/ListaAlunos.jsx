import aluno from "../data/aluno"
export default _ => {
    const alunosLista =aluno.map((aluno)=>{
        return(

            <li key={aluno.id}>
                {aluno.id} ){aluno.nome}{aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <ul>
                <li>{alunosLista}</li>
            </ul>
        </div>
    )
}