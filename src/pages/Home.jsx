import { useLoaderData } from "react-router-dom";
import CraftItemCard from "../components/CraftItemCard";


const Home = () => {

    const loadedCrafts = useLoaderData();

    return (
        <div className="w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-8">
            {
                loadedCrafts.slice(0, 6).map(craftItem => <CraftItemCard key={craftItem._id} craftItem={craftItem}></CraftItemCard>)
            }
        </div>
    );
};

export default Home;