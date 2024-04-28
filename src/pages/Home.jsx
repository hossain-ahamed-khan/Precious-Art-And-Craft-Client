import { useLoaderData } from "react-router-dom";


const Home = () => {

    const loadedCrafts = useLoaderData();

    return (
        <div>
            <h1 className="text-4xl text-red-800">Home page</h1>
            <p>length: {loadedCrafts.length}</p>
        </div>
    );
};

export default Home;