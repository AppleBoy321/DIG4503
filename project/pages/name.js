
import Head from 'next/head';
import Link from 'next/link';
import NameSearch from '../components/NameSearch';
import styles from '../components/Style/styles.module.css';
const Name = () => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Pokémon Pokédex</title>
      </Head>
      <div>
      <h1 className={styles.head}><img className={styles.img} src="https://www.pinclipart.com/picdir/big/366-3668322_pokmon-pokball-pokeball-png-clipart.png" alt="Pokemon Ball"/>Pokémon Pokédex</h1>
      <ul className={styles.nav}>
            <li><a className={styles.li} href="/list">Pokémon List</a></li>
            <li><a className={styles.li} href="/name">Search by Name</a></li>
            <li><a className={styles.li} href="/id">Search by ID</a></li>
            <li><a className={styles.li} href="/type">Search by Type</a></li>
            <li><a className={styles.li} href="/random">A Random Pokémon</a></li>
          </ul>
        <div className={styles.search}>
          <p>
            <Link href="/index">
              <a className={styles.a}>Back to Home</a>
            </Link>
          </p>
          <p>Insert a Name to Search for a Pokemon!</p>
          <NameSearch/>
          <div className={styles.result} id="reportingArea"></div>
        </div>
      </div>
    </div>
  );
}
export default Name;