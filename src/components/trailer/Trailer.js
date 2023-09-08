import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import './Trailer.css';

const Trailer = () => {
    let prams = useParams();
    let key = prams.ytTrailerId;

    return(
        <div className="react-player-container">
            {
                key && <ReactPlayer url={`https://www.youtube.com/watch?v=${key}`} controls={true} playing={true} width= '100%' height= '100%' />
            }
        </div>
    )

}

export default Trailer;