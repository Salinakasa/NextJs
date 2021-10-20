import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataprod = await response.json();

  return {
    props: { products: dataprod }
  }

}

const Products = ({ products }) => {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="keywords" content="Products" />
      </Head>
      <h1 className="text-5xl">All the products are displayed here:</h1>
      <div className="grid grid-cols-4 gap-5">
        {products.map(product =>(
          <Link key={product.id} href={'/products/' + product.id}>
            <a>
              <h3 className="text-blue-900 text-2xl pb-3">{product.id}. { product.title }</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
  
  export default Products;