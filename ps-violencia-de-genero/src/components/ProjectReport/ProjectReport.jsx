import "./ProjectReport.css" 
import CardReport from "../CardReport/CardReport";

function ProjectReport() {


    return (
        <>
        <section className="project-report">
                <div className="container container-page">
                    <h2 className="project-report-title navigation-span-title">Relatório do Projeto</h2>
                    <CardReport 
                        title="Combate à Violência de Gênero Online"
                        text="Acesse o relatório completo do projeto com dados, justificativa, metodologia, parcerias institucionais e outras informações."
                        icon="bi bi-file-earmark-text"
                    />
                </div>
            </section>
        </>
    )
}

export default ProjectReport;