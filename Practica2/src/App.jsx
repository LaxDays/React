import Card from './components/Card';
import Streamer from './components/Streamer';
import {games} from './constants/games';
import {streamers} from './constants/streamers'

export default function App() {
  return(
    <main className="mainGrid">
      <div className="leftSide">
        {
          streamers.map((streamers, index) => {
            return (
              <Streamer 
                key={`streamers-${index}`}
                imgStreamerSrc={streamers.imgStreamerSrc}
                imgStreamerAlt={streamers.imgStreamerAlt}
                streamerName={streamers.streamerName}
                currentGame={streamers.currentGame}
                streamerViews={streamers.streamerViews}
                isOnline={streamers.isOnline}
              />
            )
          })
        }
      </div>
      <div className="rightSide">
        {
          games.map((games, index) => {
            return(
              <Card
                key={`games-${index}`}
                imgSrc={games.imgSrc}
                imgAlt={games.imgAlt}
                title={games.title}
                views={games.views}
              />
            )
          })
        }
      </div>
    </main>
  )
}