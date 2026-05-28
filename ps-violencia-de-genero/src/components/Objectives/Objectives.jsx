import "./Objectives.css";

function Objectives() {

    const accordion = [
        {
            id: 1,
            title: "Explicar o que é phishing e como ele funciona",
            description: "Explicar como criminosos utilizam mensagens falsas para enganar usuários e obter informações confidenciais, como senhas e dados bancários. Também serão apresentados sinais que ajudam a identificar tentativas de phishing.",
            dataBsTarget: "#collapseOne",
            ariaControls: "collapseOne"
        },
        {
            id: 2,
            title: "Demonstrar os principais golpes aplicados na internet",
            description: "Apresentar exemplos de golpes virtuais comuns, como fraudes em redes sociais, mensagens falsas e links maliciosos. A proposta é ensinar os participantes a reconhecerem situações suspeitas e evitarem prejuízos.",
            dataBsTarget: "#collapseTwo",
            ariaControls: "collapseTwo"
        },
        {
            id: 3,
            title: "Alertar sobre os riscos do compartilhamento excessivo de informações pessoais",
            description: "Mostrar como a divulgação exagerada de dados pessoais pode facilitar golpes, invasões e outras ameaças virtuais. O intuito é conscientizar sobre a importância da privacidade no ambiente online.",
            dataBsTarget: "#collapseThree",
            ariaControls: "collapseThree"
        },
        {
            id: 4,
            title: "Ensinar práticas de proteção digital",
            description: "Demonstrar medidas básicas de segurança digital, como criação de senhas fortes, autenticação em dois fatores e atualização de dispositivos. Essas práticas contribuem para a proteção de contas e informações pessoais.",
            dataBsTarget: "#collapseFour",
            ariaControls: "collapseFour"
        },
        {
            id: 5,
            title: "Incentivar o uso seguro das redes sociais e aplicativos",
            description: "Apresentar boas práticas para utilização das redes sociais, destacando cuidados com privacidade, exposição de dados e interações online. Busca-se orientar os usuários a utilizarem essas plataformas de forma mais segura e responsável.",
            dataBsTarget: "#collapseFive",
            ariaControls: "collapseFive"
        },
        {
            id: 6,
            title: "Desenvolver pensamento crítico diante de mensagens suspeitas e fake news",
            description: "Estimular os participantes a analisarem informações antes de compartilhá-las, identificando sinais de manipulação, desinformação e conteúdos falsos. O objetivo é promover uma postura mais crítica e consciente no ambiente digital.",
            dataBsTarget: "#collapseSix",
            ariaControls: "collapseSix"
        }
    ];

    return (
        <section className="objectives-section">

            <div className="container-page">
                <h2 className="objectives-title navigation-span-title">Nossos Objetivos</h2>
                <div className="accordion" id="accordionExample">

                    {accordion.map((item, index) => (

                        <div className="accordion-item" key={item.id}> 

                            <h2 className="accordion-header">

                                <button
                                    className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={item.dataBsTarget}
                                    aria-expanded={index === 0 ? "true" : "false"}
                                    aria-controls={item.ariaControls}
                                >
                                    <i className="bi bi-check-circle"></i> {item.title}
                                </button>

                            </h2>

                            <div
                                id={item.ariaControls}
                                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                data-bs-parent="#accordionExample"
                            >

                                <div className="accordion-body">
                                    {item.description}
                                </div>

                            </div>

                        </div>

                    ))}

                </div>
            </div>
        </section>
    )
}

export default Objectives;