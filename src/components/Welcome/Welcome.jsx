import styles from './welcome.css';
import simon from '../../assets/simon.png';

export default function Welcome() {
  return (
    <main className={styles.splash}>
      <div className={styles.welcome}>Welcome to Bop Simon!</div>
      {/* 
      If viewport = small then 'tap anywhere'
      If viewport = not small then 'click anywhere' 
      */}
      <img src={simon} alt="Bop-Simon" height="50%" className={styles.simon} />
      <div className={styles.subheader}>Click anywhere to begin.</div>
    </main>
  );
}
