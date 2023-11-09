import './App.css';
import {useState} from "react";
import PF from "./components/PF";
import {PFrases} from "./components/PFrases";

function App() {
    const[nome, setNome] = useState('')
    const [previsaoEscolha, setPrevisaoEscolha] = useState('')
    //os sets acima vão servir para ser manipulado depois, com o props

    const previsoes = [
        `${nome}, você encontrará o amor verdadeiro.`,
        `${nome}, o sucesso em sua carreira profissional está a caminho.`,
        `${nome}, prepare-se para viajar para um destino dos seus sonhos.`,
        `${nome}, você alcançará aquela meta importante que tanto deseja.`,
        `${nome}, novas amizades significativas estão a caminho.`,
        `${nome}, sua saúde estará excelente.`,
        `${nome}, prepare-se para aprender uma nova habilidade ou hobby.`,
        `${nome}, seu reconhecimento especial está a caminho por seu trabalho.`,
        `${nome}, a sua estabilidade financeira está próxima.`,
        `${nome}, a oportunidade de realizar um grande sonho está chegando.`,
        `${nome}, uma mentalidade mais positiva e resiliente está se desenvolvendo em você.`,
        `${nome}, prepare-se para conhecer pessoas inspiradoras que influenciarão positivamente sua vida.`,
        `${nome}, você superará um desafio pessoal importante.`,
        `${nome}, você terá a chance de fazer diferença na vida de alguém.`,
        `${nome}, você encontrará equilíbrio entre trabalho e vida pessoal.`,
        `${nome}, você participará de um evento ou experiência transformadora.`,
        `${nome}, você descobrirá uma paixão ou propósito de vida.`,
        `${nome}, você construirá relacionamentos familiares mais saudáveis e felizes.`,
        `${nome}, você superará um medo que o impedia de avançar.`,
        `${nome}, tornar-se-á mais confiante em si mesmo.`,
        `${nome}, você viverá em um lugar que ama e que reflete quem você é.`,
        `${nome}, você terá a oportunidade de ajudar os outros de maneiras significativas.`,
        `${nome}, você alcançará um marco importante em sua vida pessoal ou profissional.`,
        `${nome}, você encontrará soluções criativas para desafios inesperados.`,
        `${nome}, você aprenderá lições valiosas com os erros do passado.`,
        `${nome}, você desenvolverá uma rotina saudável e equilibrada.`,
        `${nome}, você conquistará um objetivo que parecia impossível.`,
        `${nome}, você terá a chance de se reconectar com um ente querido perdido.`,
        `${nome}, você encontrará inspiração em pessoas ou situações inesperadas.`,
        `${nome}, você desfrutará de momentos de paz e tranquilidade.`,
        `${nome}, você alcançará um nível mais profundo de autoconhecimento.`,
        `${nome}, você será reconhecido como especialista em sua área de atuação.`,
        `${nome}, você encontrará novas oportunidades de crescimento pessoal e profissional.`,
        `${nome}, você criará memórias inesquecíveis com pessoas queridas.`,
        `${nome}, você superará uma fase de estagnação e encontrará novos desafios estimulantes.`,
        `${nome}, você terá a chance de perdoar e ser perdoado por alguém importante em sua vida.`,
        `${nome}, você desenvolverá relacionamentos amorosos saudáveis e duradouros.`,
        `${nome}, você encontrará formas criativas de expressar sua individualidade.`,
        `${nome}, você aprenderá a lidar melhor com o estresse e a pressão do dia a dia.`,
        `${nome}, você encontrará um mentor ou guia que o ajudará em sua jornada.`,
        `${nome}, você descobrirá novas paixões e interesses que trarão mais felicidade à sua vida.`,
        `${nome}, tornar-se-á uma fonte de inspiração para os outros ao seu redor.`,
        `${nome}, você encontrará equilíbrio entre dar e receber amor e apoio emocional.`,
        `${nome}, você terá a chance de realizar um ato de bondade que fará a diferença na vida de alguém.`,
        `${nome}, você desenvolverá uma mentalidade empreendedora e buscará novas oportunidades.`,
        `${nome}, você viverá momentos de aventura e emoção que ampliarão seus horizontes.`,
        `${nome}, você encontrará um ambiente de trabalho positivo e motivador.`,
        `${nome}, você aprenderá a valorizar mais as pequenas coisas da vida.`,
        `${nome}, você desenvolverá habilidades de liderança e influência positiva.`,
        `${nome}, você encontrará felicidade e satisfação em sua jornada pessoal.`
    ];

  return (
    <div className="App">
        <PF nome={nome} setNome={setNome}></PF>
        <PFrases nome={nome} setNome={setNome} previsaoEscolha={previsaoEscolha} setPrevisaoEscolha={setPrevisaoEscolha} previsoes={previsoes}></PFrases>
    </div>
  );
}
export default App;
