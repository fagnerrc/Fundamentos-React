import React from "react";
import Membro from "./Membro"
export default _=> {
return(
    <div>
        <h1>Membros da Familia</h1>
    <Membro nome="Fagner" sobrenome={_.sobrenome}/>
    <Membro nome="Vagner"  sobrenome={_.sobrenome}/>
    <Membro nome="Wagner"  sobrenome={_.sobrenome}/> 
    </div>
)
}