import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material"
import './Hero.css';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
const Hero = ({ movies }) => {

    const navigate = useNavigate();

    function reviews(movieId) {
        navigate(`/reviews/${movieId}`);
    }

    return (
        <div className="movie-carousel-container">
            <Carousel>
                {
                    movies.map((movie) => {
                        return (
                            <Paper key={movie.imdbId}>
                                <div className="movie-card-container">
                                    <div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>
                                        <div className="movie-details">
                                            <div className="movie-poster">
                                                <img src={movie.poster} alt={movie.title} />
                                            </div>
                                            <div className="movie-title">
                                                <h4>{movie.title}</h4>
                                            </div>
                                            <div className="movie-buttons-container">
                                                <Link to={`Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                <div className="play-button-container">
                                                    <FontAwesomeIcon icon={faCirclePlay} className="play-button-icon" />
                                                </div>
                                                </Link>
                                                <div className="movie-review-button-container">
                                                    <Button variant="outline-info" onClick={() => reviews(movie.imdbId)} className="me-2">Reviews</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        );
                    })
                }
            </Carousel>
        </div>
    );
}
export default Hero;