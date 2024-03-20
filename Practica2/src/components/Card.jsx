export default function Card(props) {
    return(
        <article className="cardContainer">
            <img src={props.imgSrc} alt={props.imgAlt}/>
            <div className="descriptionContainer">
                <h3>{props.title}</h3>
                <button className="btnTitle">°</button>
                <p>{props.views}</p>
            </div>
        </article>
    )
}