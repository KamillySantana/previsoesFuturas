import PFcss from "./PF.module.css"
function PF(props){
    function nomePegar(pegar){
        props.setNome(pegar.target.value)
    } //setNome armazena o valor da variavel
    return (
        <div>
            <h1 className={PFcss.titulo}>Bola de Cristal - Adivinhe do Futuro</h1>

            <label className={PFcss.p}>
                Insira seu nome: <br/>
                <input className={PFcss.input} value={props.nome} onChange={nomePegar}/>
                {/*toda vez que digitar no input ira chamar a funçao nomePegar que tera um valor, no caso o nome*/}
            </label>
        </div>
    )
}
export default PF