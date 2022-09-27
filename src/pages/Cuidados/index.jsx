import "./styles.css";

const Cuidados = () => {
  return (
    <div className="container">
      <a href="#content" className="contentLink">
        Ir para o conteúdo principal
      </a>
      <div className="content">
        <div className="titleContent">
          <h1 className="pageTitle">Painel Coronavírus - Cuidados</h1>
        </div>
      </div>

      <div className="bodyTarget">
        <div className="bodyTargetContainer">
          <div className="bodyTargetContent">
            <div className="sectionContainer">
              <h3>
                Para evitar a propagação da COVID-19, siga estas orientações.:
              </h3>

              <ul>
                <li>
                  • Mantenha uma distância segura de outras pessoas (pelo menos
                  1 metro), mesmo que elas não pareçam estar doentes;
                </li>
                <li>
                  • Use máscara em público, especialmente em locais fechados ou
                  quando não for possível manter o distanciamento físico;
                </li>
                <li>
                  • Prefira locais abertos e bem ventilados em vez de ambientes
                  fechados Abra uma janela se estiver em um local fechado;
                </li>
                <li>
                  • Limpe as mãos com frequência. Use sabão e água ou álcool em
                  gel
                </li>
                <li>
                  • Tome a vacina quando chegar a sua vez. Siga as orientações
                  locais para isso
                </li>
                <li>
                  • Cubra o nariz e a boca com o braço dobrado ou um lenço ao
                  tossir ou espirrar
                </li>
                <li>• Fique em casa se você sentir indisposição.</li>
              </ul>
            </div>
            <div className="sectionContainer">
              <h3>O que fazer ao sentir algum sintoma:</h3>
              <p>
                Procure atendimento médico se tiver febre, tosse e dificuldade
                para respirar. Ligue com antecedência para o órgão prestador de
                cuidados de saúde e peça direcionamento à unidade mais adequada.
                Isso protege você e evita a propagação de vírus e outras
                infecções.
              </p>
            </div>
            <div className="sectionContainer">
              <h3>Máscaras:</h3>
              <p>
                Máscaras bem ajustadas ao rosto podem prevenir a propagação do
                vírus para outras pessoas. Isoladamente, elas não oferecem
                proteção contra a COVID-19, por isso o uso deve ser combinado
                com o distanciamento físico e a limpeza das mãos. Siga as
                orientações da autoridade local de saúde.
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
                É de suma importância que todos os cidadãos tomas todas as doses
                da vacina para um proteção completa e maior segurança contra o
                vírus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuidados;
