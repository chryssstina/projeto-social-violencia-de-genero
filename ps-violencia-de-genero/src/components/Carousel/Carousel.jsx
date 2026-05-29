import "./Carousel.css";
import mulheres1 from "../../assets/mulheres1.jpg";
import mulheres2 from "../../assets/mulheres2.jpg";
import mulheres3 from "../../assets/mulheres3.jpg";


function Carousel() {

    const slides = [
        {
            id: 1,
            titulo: "Combate à violência de gênero online",
            descricao: "Um projeto de extensão universitária dedicado a acolher, conscientizar e proteger mulheres no ambiente digital.",
            imagem: mulheres1
        },

        {
            id: 2,
            titulo: "Educação para a igualdade de gênero",
            descricao: "Um projeto de extensão universitária dedicado a acolher, conscientizar e proteger mulheres no ambiente digital.",
            imagem: mulheres2
        },

        {
            id: 3,
            titulo: "Projeto social para mulheres",
            descricao: "Um projeto de extensão universitária dedicado a acolher, conscientizar e proteger mulheres no ambiente digital.",
            imagem: mulheres3
        }
    ];

    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide pt-3" data-bs-ride="carousel"
            >
                <div className="container-page">


                    {/* Indicadores */}
                    <div className="carousel-indicators">

                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={index}
                                className={index === 0 ? "active" : ""}
                                aria-current={index === 0 ? "true" : undefined}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}

                    </div>

                    {/* Slides */}
                    <div className="carousel-inner">

                        {slides.map((slide, index) => (

                            <div
                                key={slide.id}
                                className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval="4000"
                            >

                                <img
                                    src={slide.imagem}
                                    className="d-block w-100 rounded-5 "
                                    alt={slide.titulo}
                                />

                                <div className="carousel-caption">
                                    <h5>{slide.titulo}</h5>
                                    <p>{slide.descricao}</p>
                                </div>

                            </div>

                        ))}

                    </div>

                    {/* Botão anterior */}
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>

                        <span className="visually-hidden">
                            Previous
                        </span>
                    </button>

                    {/* Botão próximo */}
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>

                        <span className="visually-hidden">
                            Next
                        </span>
                    </button>

                </div>
            </div>
        </>
    );
}

export default Carousel;