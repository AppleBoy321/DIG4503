import Head from 'next/head';
import Link from 'next/link';
import IdSearch from '../components/IdSearch';
import styles from '../components/Style/styles.module.css';

const ID = () => {
  return (
      <div className={styles.body}>

        <Head>
          <title>Pokemon Database Lab9</title>
        </Head>

        <div>

          <h1 className={styles.head}><img className={styles.img} src="https://www.pinclipart.com/picdir/big/366-3668322_pokmon-pokball-pokeball-png-clipart.png" alt="Pokemon Ball"/>Pokémon Database</h1>
          
          <ul className={styles.nav}>
            <li><a className={styles.li} href="/name">Search by Name</a></li>
            <li><a className={styles.li} href="/type">Search by Type</a></li>
            <li><a className={styles.li} href="/id">Search by ID</a></li>
          </ul>
          
          <div className={styles.search}>
            <p>
              <Link href="/index">
                <a className={styles.a}>Back to the Start</a>
              </Link>
            </p>

            <p>Type in an ID number of a Pokémon to find that Pokémon.</p>
            <IdSearch/>
            <div className={styles.result} id="reportingArea"></div>
          </div>
        </div>
      </div>
    );
  }

export default ID;