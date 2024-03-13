export default function KoderCard(props) {
    return(
        <article className="koder_card">
            <span className="emoticon">{props.icon}</span>
            <div className="text_koder_card" >
                <h6>{props.title}</h6>
                <p>{props.text}</p>
            </div>
        </article>
    )
}