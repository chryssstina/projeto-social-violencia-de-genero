import './Gallery.css';
import mulheres1 from "../../assets/mulheres1.jpg";

function Gallery() {
    const images = [
        {
            id: 1,
            src: mulheres1,
            alt: "Imagem 1"
        },
        {
            id: 2,
            src: mulheres1,
            alt: "Imagem 2"
        },
        {
            id: 3,
            src: mulheres1,
            alt: "Imagem 3"
        },
        {
            id: 4,
            src: mulheres1,
            alt: "Imagem 4"
        },
        {
            id: 5,
            src: mulheres1,
            alt: "Imagem 5"
        },
        {
            id: 6,
            src: mulheres1,
            alt: "Imagem 6"
        }
    ];

    return (
     
            <div className="container container-page">
                <h2 className="gallery-title navigation-span-title">Galeria de Fotos</h2>
                <div className="gallery-grid">
                    {images.map((image) => (
                        <div className="gallery-item" key={image.id}>
                            <img

                                src={image.src}
                                alt={image.alt}
                                className="gallery-image"
                            />
                        </div>
                    ))}
                </div>

            </div>
       
    )
}

export default Gallery;