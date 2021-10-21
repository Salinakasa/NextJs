export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map(prod => {
        return {
            params: { id: prod.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const data = await res.json();

    return {
        props: { prod: data }
    }
}

const Productdet = ({ prod }) => {
    return (
        <>
            <h1 className="text-2xl text-blue-700">{prod.id}. { prod.title }</h1>
            <p>{ prod.body }</p>
        </>
    );
}
 
export default Productdet;