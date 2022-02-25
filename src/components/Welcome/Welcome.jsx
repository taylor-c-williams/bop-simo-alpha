import styles from './welcome.css';

export default function Welcome() {
  return (
    <main className={styles.splash}>
      <div className={styles.welcome}>Welcome to Bop Simon!</div>
      {/* 
      If viewport = small then 'tap anywhere'
      If viewport = not small then 'click anywhere' 
      */}
      <div className={styles.subheader}>Click anywhere to begin.</div>
    </main>
  );
}
