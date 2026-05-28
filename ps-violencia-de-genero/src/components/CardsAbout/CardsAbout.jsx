import "./CardsAbout.css";

function CardsAbout({ title, text, icon }) {

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <i className={icon}></i>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </>
    )
}

export default CardsAbout;