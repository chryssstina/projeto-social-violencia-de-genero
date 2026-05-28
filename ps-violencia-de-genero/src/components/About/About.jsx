import "./About.css"
import CardsAbout from "../CardsAbout/CardsAbout";

function About() {

    const cards = [
            {
                id: 1,
                title: "Acolhimento",
                text: "Escuta sensível e espaços seguros para mulheres que vivenciam violência digital.",
                icon: "bi bi-person-heart"
            },
    
            {
                id: 2,
                title: "Proteção",
                text: "Orientações práticas sobre segurança digital, denúncia e rede de apoio.",
                icon: "bi bi-people-fill"
            },
    
            {
                id: 3,
                title: "Conscientização",
                text: "Campanhas educativas que dialogam com a comunidade acadêmica e a sociedade.",
                icon: "bi bi-stars"
            },
    
            {
                id: 4,
                title: "Extensão",
                text: "Diálogo permanente entre universidade, escolas e sociedade.",
                icon: "bi bi-wechat"
            }
        ];
    

    return (
        <>
            <section className="section-about">
                <div className="container container-page about-container">
                    <div className="about-text">
                        <span className="navigation-span-title">Sobre o Projeto</span>
                        <h2>Combate à Violência de Gênero Online</h2>
                        <p>
                            O projeto “Impacto de Phishing como mecanismo amplificador da violência de gênero online.” foi desenvolvido com o objetivo de conscientizar estudantes do ensino médio sobre os perigos existentes no ambiente virtual, principalmente relacionados a golpes de phishing, vazamento de dados pessoais e manipulação digital.
                        </p>
                        <p>
                            A proposta surgiu da necessidade de promover maior conhecimento sobre segurança digital entre jovens mulheres, considerando que esse público frequentemente é alvo de golpes virtuais, assédio online, invasões de contas, falsos perfis e tentativas de obtenção de informações pessoais através de mensagens fraudulentas.
                        </p>

                        <p> O projeto buscou apresentar, de forma clara e educativa, como esses ataques acontecem, quais sinais indicam possíveis golpes e quais atitudes podem ser tomadas para garantir maior segurança durante o uso da internet e das redes sociais.</p>
                    </div>
                    <div className="cards-about-container">
                        {cards.map((card) => (
                            <CardsAbout
                                key={card.id}
                                title={card.title}
                                text={card.text}
                                icon={card.icon}
                            />
                        ))}
                    </div>

                </div>
            </section>

        </>
    )
}

export default About;