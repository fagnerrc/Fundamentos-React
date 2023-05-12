import IndiretaFilho from "./IndiretaFilho"
export default _ => {
    function fornecerinformacoes(nome, idade, nerd) {
        console.log(nome, idade, nerd)
    }
    return (
        <div>
            Pai
            <IndiretaFilho quandoClicar={fornecerinformacoes}></IndiretaFilho>
        </div>
    )
}