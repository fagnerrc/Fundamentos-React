import _if from "./if"
export default _ => {
    const usuario =_.usuario || {}
    return (
        <div>
            <_if test ={usuario && usuario.nome}>
            Seja Bem Vindo <strong>{usuario.nome}</strong>!
            </_if>
            <_if test ={!usuario || !usuario.nome}>
            <strong>Infome seu nome!</strong>!
            </_if>
        </div>
    )
}