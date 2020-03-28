import Head from 'next/head';
import Link from 'next/link';
import NameSearch from '../components/NameSearch';
const Name= ()=>{
    return(
        <div>
            <Head>
                <title>NameSearch</title>
            </Head>
            <Link href="/id">
                <a>Search by ID</a>
            </Link>
            <br/>
            <Link href="/type">
                <a>Search by type</a>
            </Link>
            <br/>
            <NameSearch/>
            <div id="reportingArea">
            </div>
        </div>
    )
}
export default Name;