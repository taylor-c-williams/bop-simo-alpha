import styles from './game.css';
import { Link } from 'react-router-dom';

export default function Game() {
  return (
    <div className={styles.gameMain}>
      {/* <h1>Bop Simon!</h1> */}
      <Link to="/leaderboard">
        <img
          src="https://previews.123rf.com/images/sunspire/sunspire1601/sunspire160100009/50043083-vector-modern-seamless-colorful-geometry-hexagon-pattern-color-abstract-geometric-background-pillow-.jpg"
          height="500px"
          alt="hexagons"
        />
      </Link>
    </div>
  );
}
