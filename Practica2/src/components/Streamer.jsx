export default function Streamer(props) {
    return(
        <article className="streamerContainer">
            <img src={props.imgStreamerSrc} alt={props.imgStreamerAlt}/>
            <div className="streamerNameDescription">
                <h3>{props.streamerName}</h3>
                <p>{props.currentGame}</p>
            </div>
            {props.isOnline === true && (<button className="btnOnline">🔴</button>)}
            {props.isOnline === true && (<p className="streamerV">{props.streamerViews}</p>)}
            {props.isOnline != true && (<p>Offline</p>)}
        </article>
    )
}