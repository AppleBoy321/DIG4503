import Head from 'next/head';
import Link from 'next/link';
import TypeSearch from '../components/TypeSearch';
const Type= ()=>{
    return(
        <div>
            <Head>
                <title>TypeSearch</title>
            </Head>
            <Link href="/name">
                <a>Search by name</a>
            </Link>
            <br/>
            <Link href="/id">
                <a>Search by ID</a>
            </Link>
            <br/>
            <TypeSearch/>
            <div id="reportingArea">
            </div>
        </div>
    )
}
export default Type;