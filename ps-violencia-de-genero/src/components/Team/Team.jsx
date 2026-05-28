import './Team.css';
import CardsAbout from '../CardsAbout/CardsAbout';

function Team() {

    const teamMembers = [
        {
            id:1,
            name: "Claudio Damasceno",
            role: "Professor Orientador do Projeto"
        },
        {
            id:2,
            name: "Ana Carolina Araújo Lima",
            role: "Discente de Ciência da Computação"
        },
        {
            id:3,
            name: "Francisco Vinicius de Freitas",
            role: "Discente de Ciência da Computação"
        },
        {
            id:4,
            name: "José Carlos Pereira",
            role: "Discente de Ciência da Computação"
        },
        {
            id:5,
            name: "Maria Chrystina Lima",
            role: "Discente de Ciência da Computação"
        },
        {
            id:6,
            name: "Vinicius de Moraes",
            role: "Discente de Ciência da Computação"
        }
    ];


    return (
        <div className="team">
            <div className="container container-page">
                <h2 className="section-title navigation-span-title">Conheça a Equipe</h2>
                <div className="team-members">
                    {teamMembers.map(member => (
                        <CardsAbout 
                            key={member.id}
                            title={member.name}
                            text={member.role}
                            icon="bi bi-person"
                        />
                    ))}


                </div>
            </div>

        </div>
    );
}

export default Team;