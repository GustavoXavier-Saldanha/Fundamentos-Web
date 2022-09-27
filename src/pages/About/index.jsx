import "./styles.css";

const About = () => {
  return (
    <div className="container">
      <a href="#content" className="contentLink">
        Ir para o conteúdo principal
      </a>
      <div className="content">
        <div className="titleContent">
          <h1 className="pageTitle">Painel Coronavírus - Sobre</h1>
        </div>
      </div>

      <main className="bodyTarget">
        <div className="bodyTargetContainer">
          <div className="bodyTargetContent">
            <div className="sectionContainer">
              <h3>Introdução:</h3>
              <p>
                Estes paineis de foram desenvolvidos para ser usado como veículo
                de comunicação e informação sobre a situação epidemiológica da
                COVID-19 no Mundo e mais especificamente do Brasil. Contando
                também com informações de tratamento e indicações.
              </p>
            </div>
            <div className="sectionContainer">
              <h3>O que é:</h3>
              <p>
                A Covid-19 é uma infecção respiratória aguda causada pelo
                coronavírus SARS-CoV-2, potencialmente grave, de elevada
                transmissibilidade e de distribuição global.{" "}
              </p>{" "}
              <p>
                O SARS-CoV-2 é um betacoronavírus descoberto em amostras de
                lavado broncoalveolar obtidas de pacientes com pneumonia de
                causa desconhecida na cidade de Wuhan, província de Hubei,
                China, em dezembro de 2019. Pertence ao subgênero Sarbecovírus
                da família Coronaviridae e é o sétimo coronavírus conhecido a
                infectar seres humanos.{" "}
              </p>{" "}
              <p>
                {" "}
                Os coronavírus são uma grande família de vírus comuns em muitas
                espécies diferentes de animais, incluindo o homem, camelos,
                gado, gatos e morcegos. Raramente os coronavírus de animais
                podem infectar pessoas e depois se espalhar entre seres humanos
                como já ocorreu com o MERS-CoV e o SARS-CoV-2. Até o momento,
                não foi definido o reservatório silvestre do SARS-CoV-2.
              </p>
            </div>
            <div className="sectionContainer">
              <h3>Histórico:</h3>
              <p>
                A pandemia de COVID-19 no Brasil teve início em 26 de fevereiro
                de 2020, após a confirmação de que um homem de 61 anos de São
                Paulo que retornou da Itália testou positivo para o SARS-CoV-2,
                causador da COVID-19. Desde então, em 23 de setembro de 2022,
                confirmaram-se 34 616 655 casos, segundo o Ministério da Saúde,
                causando 685 677 mortes. O número de pessoas recuperadas da
                doença, é de 33 788 724.
              </p>
            </div>
            <div className="sectionContainer">
              <h3>Fonte:</h3>
              <p>
                A aplicação foi desenvolvida utilizando como fonte as APIs{" "}
                <a href="https://disease.sh/docs/#/">disease.sh.</a>
              </p>
              <p>
                A API destina-se a desenvolvedores, máquinas, programas e outros
                sites para que possam buscar rapidamente informações atualizadas
                sobre a epidemia de COVID-19. Ele pode ser usado para criar
                ferramentas e sistemas que são usados ​​para análise de dados
                até sites que atuam como painéis e gráficos públicos.
              </p>
              <p>
                Além disso, as informações contidas na aplicação, sobre
                tratamento,o que é entre outras, foram retiradas de diferentes
                lugares, as fontes são: o site{" "}
                <a href="https://covid.saude.gov.br/">CORONAVÍRUS BRASIL</a>,{" "}
                <a href="https://www.gov.br/saude/pt-br/coronavirus/o-que-e-o-coronavirus">
                  Ministério da Saúde
                </a>{" "}
                e em
                <a href="https://www.who.int/health-topics/coronavirus#tab=tab_3">
                  World Health Organization
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
