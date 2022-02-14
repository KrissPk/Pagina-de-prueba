import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/httpClient";
import styles from "./MoviesDetails.module.css";

export function MoviesDetails() {
  const { movieId } = useParams();
  const { data: movie, isLoading } = useQuery(["movieDetails", movieId], () =>
    get("/movie/" + movieId)
  );

  if (isLoading) {
    return <Spinner />;
  }

  const imgUrl = getMovieImg(movie.poster_path, 500);
  return (
    <div className={styles.detailsContainer}>
      <img
        className={styles.col + " " + styles.movieImg}
        src={imgUrl}
        alt={movie.title}
      />
      <div className={styles.col}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
        <p>
          <strong>Rating :</strong> {movie.vote_average}
        </p>
      </div>
    </div>
  );
}
