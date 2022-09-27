import "./styles.css";

const Infos = () => {
  return (
    <div className="container">
      <a href="#content" className="contentLink">
        Ir para o conteúdo principal
      </a>
      <div className="content">
        <div className="titleContent">
          <h1 className="pageTitle">Painel Coronavírus - Informações</h1>
        </div>
      </div>

      <div className="bodyTarget">
        <div className="bodyTargetContainer">
          <div className="bodyTargetContent">
            <div className="sectionContainer">
              <h3>Introdução:</h3>
              <p>
                A COVID-19 afeta diferentes pessoas de diferentes maneiras. A
                maioria das pessoas infectadas apresentará sintomas leves a
                moderados da doença e não precisarão ser hospitalizadas.
              </p>
            </div>
            <div className="sectionContainer">
              <h3>Sintomas:</h3>
              <h4>• Sintomas mais comuns:</h4>
              <ul>
                <li>• Febre;</li>
                <li>• Tosse;</li>
                <li>• Cansaço;</li>
                <li>• Perda de paladar ou olfato.</li>
              </ul>

              <h4>• Sintomas menos comuns:</h4>
              <ul>
                <li>• Dores de garganta;</li>
                <li>• Dor de cabeça;</li>
                <li>• Dores e desconfortos;</li>
                <li>• Diarreia;</li>
                <li>
                  • Irritações na pele ou descoloração dos dedos dos pés ou das
                  mãos;
                </li>
                <li>• Olhos vermelhos ou irritados.</li>
              </ul>

              <h4>• Sintomas graves:</h4>
              <ul>
                <li>• Dificuldade para respirar ou falta de ar</li>
                <li>• Perda da fala, mobilidade ou confusão</li>
                <li>• Dores no peito</li>
              </ul>
            </div>
            <div className="sectionContainer">
              <h3>O que fazer ao sentir algum sintoma:</h3>
              <p>
                Procure atendimento médico imediatamente se apresentar sintomas
                graves. Sempre ligue antes de ir ao médico ou posto de saúde,
                clínicas ou hospitais.
              </p>
              <p>
                Pessoas saudáveis que apresentarem os sintomas leves devem
                acompanhar a situação em casa.
              </p>
              <p>
                Em média, os sintomas aparecem cinco ou seis dias após a infeção
                pelo vírus. No entanto, eles também podem levar até 14 dias para
                se manifestarem.
              </p>
            </div>
            <div className="sectionContainer">
              <h3>Como ela se espalha:</h3>
              <p>
                O vírus pode se espalhar pela boca ou pelo nariz de uma pessoa
                infectada, em pequenas partículas líquidas expelidas quando elas
                tossem, espirram, falam, cantam ou respiram. O tamanho dessas
                partículas vai de gotas respiratórias maiores até aerosois
                menores.
              </p>
              <p>
                A infecção pode ocorrer caso você inale o vírus quando estiver
                perto de alguém que tenha COVID-19 ou se você tocar em uma
                superfície contaminada e, em seguida, passar as mãos nos olhos,
                no nariz ou na boca. O vírus se espalha com mais facilidade em
                locais fechados e em multidões.
              </p>
            </div>
            <div className="sectionContainer">
              <h3>Vacinas:</h3>
              <p>
                Atualmente existem quatro formas para uma vacina contra Covid-19
                ser disponibilizada no país: registro, uso emergencial,
                importação excepcional ou pelo consórcio Covax Facility.
              </p>
              <p>
                Os estudos clínicos de vacinas são conduzidos pelos laboratórios
                farmacêuticos e instituições de pesquisa. Como agência
                reguladora, o papel da Anvisa é definir a regulamentação do
                setor e avaliar os processos e dados recebidos, do ponto de
                vista de sua comprovação de qualidade, eficácia e segurança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
