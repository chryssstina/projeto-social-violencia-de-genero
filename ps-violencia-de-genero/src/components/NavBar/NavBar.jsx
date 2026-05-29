import "./NavBar.css"

function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg">

            <div className="container">

                <a
                    className="navbar-brand"
                    href="#"
                >
                    <i className="bi bi-suit-heart-fill"></i>
                    <span>Projeto Social</span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <div className="navbar-nav mx-auto">

                        <a className="nav-link" href="#">
                            Sobre
                        </a>

                        <a className="nav-link" href="#">
                            Objetivos
                        </a>

                        <a className="nav-link" href="#">
                            Galeria
                        </a>

                        <a className="nav-link" href="#">
                            Equipe
                        </a>

                    </div>

                    <button
                        className="btn-download"
                        type="button"
                    >
                        Baixar Relatório
                    </button>

                </div>

            </div>

        </nav>
    )
}

export default NavBar