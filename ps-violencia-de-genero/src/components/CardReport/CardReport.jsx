import "./CardReport.css"

function CardReport({ title, text, icon }) {

    return (
        <div className="card-report">

            <div className="report-content">

                <span className="report-badge">
                    <i className="bi bi-file-earmark-text"></i>
                    RELATÓRIO DO PROJETO
                </span>

                <h2 className="report-title">{title}</h2>

                <p className="report-text">{text}</p>

            </div>

            <a href="#" className="report-button">
                <i className={icon}></i>
                Baixar Relatório em PDF
            </a>

        </div>
    )
}

export default CardReport;