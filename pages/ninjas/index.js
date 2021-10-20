import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }

}

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninjas</title>
        <meta name="keywords" content="Ninjas" />
      </Head>
      <h1 className="text-5xl">All the ninjas are displayed here:</h1>
      {ninjas.map(ninja =>(
        <Link key={ninja.id} href={'/ninjas/' + ninja.id}>
          <a>
            <h3>{ ninja.name }</h3>
          </a>
        </Link>
      ))}
    </>
    );
  }
  
  export default Ninjas;