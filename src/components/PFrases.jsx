import React from "react";
import PFrasesCss from "./PFrases.module.css"

export function PFrases(props){

    function RandowPrevisoes(){
        var armazenar = props.previsoes[Math.floor(Math.random() * props.previsoes.length)]
        // o math floor ira obter as frases dentro da constante;
        // o random ira sortear as frases;
        // no previsoes.length serve para atualizar as frases, se não tiver a frase continuara a mesma.
        props.setPrevisaoEscolha(armazenar)
    }

    function verificar(){
        if (props.nome === ''){
            props.setPrevisaoEscolha("Preciso do seu nome")
        } else {
            RandowPrevisoes()
        } // aqui serve pra quando no input não tiver nada ele ira apareer a frase acima
    }

    return (
        <div className={PFrasesCss.div}>
            <button className={PFrasesCss.botao} onClick={verificar}><img className={PFrasesCss.img} src="/img/bolaCristal.png"/></button>
            {/*botao pra chamar a função acima*/}
            <p className={PFrasesCss.p}>A bola de cristal diz: </p>
            <p className={PFrasesCss.p}>{props.previsaoEscolha}</p>
        </div>
    )
}

