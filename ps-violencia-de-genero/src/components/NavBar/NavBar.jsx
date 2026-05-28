import "./NavBar.css" 

function NavBar() {


    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container container-page">
                    <a className="navbar-brand" href="#"> <i className="bi bi-suit-heart-fill"></i> Projeto Social</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <a className="nav-link navigation-span-title" href="#">Sobre</a>
                            <a className="nav-link navigation-span-title" href="#">Objetivos</a>
                            <a className="nav-link navigation-span-title" href="#">Galeria</a>
                            <a className="nav-link navigation-span-title" href="#">Equipe</a>
                        </div>
                        <button className="btn btn-sm btn-outline" type="button">Baixar Relatório</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;