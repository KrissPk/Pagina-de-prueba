import { Link } from "react-router-dom";
import styles from "./MoviesCard.module.css";
import { getMovieImg } from "../utils/getMovieImg";

export function MoviesCard({ movie }) {
    const imgUrl = getMovieImg(movie.poster_path, 500);
  return (
    <li className={styles.movieCard}>
      <Link to={"/movie/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImg}
          src={imgUrl}
          alt="movie.title"
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
