import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/Style/styles.module.css';

const HomePage = () => {
  return (
      <div className={styles.body}>

        <Head>
          <title>Pokemon Database Lab9</title>
        </Head>

        <div>
          
          <h1 className={styles.head}><img className={styles.img} src="https://www.pinclipart.com/picdir/big/366-3668322_pokmon-pokball-pokeball-png-clipart.png" alt="Pokemon Ball"/>Pokémon Database</h1>
          
          <div className={styles.search}>
            <p className={styles.subHead}>Choose one to search or Pokémon</p>
          </div>

          <ul className={styles.nav}>
            <li><a className={styles.li} href="/name">Search by Name</a></li>
            <li><a className={styles.li} href="/type">Search by Type</a></li>
            <li><a className={styles.li} href="/id">Search by ID</a></li>
          </ul>

        </div>
      </div>
    );
  }

export default HomePage;