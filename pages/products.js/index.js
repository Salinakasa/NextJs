import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: { data }
  }

}

const Products = ({ data }) => {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="keywords" content="Products" />
      </Head>
      <h1 className="text-5xl">All the products are displayed here:</h1>
      <div className="grid grid-cols-4 gap-5">
        {data.map(data =>(
          <div className="mt-9" key={data.id}>
            <Link href={'/products/' + data.id}>
              <a>
                <h3 className="text-blue-900 text-2xl pb-3">{data.id}. { data.title }</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
  
  export default Products;