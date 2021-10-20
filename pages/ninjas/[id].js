export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { ninja: data }
    }
}

const NinjaDet = ({ ninja }) => {
    return (
        <>
            <h4 className="text-2xl text-blue-700">{ ninja.name }</h4>
            <p>{ ninja.email }</p>
            <p>{ ninja.address.city }</p>
        </>
    );
}
 
export default NinjaDet;