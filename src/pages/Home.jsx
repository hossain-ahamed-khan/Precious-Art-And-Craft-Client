import { useLoaderData } from "react-router-dom";
import CraftItemCard from "../components/CraftItemCard";


const Home = () => {

    const loadedCrafts = useLoaderData();

    return (
        <div>
            {
                loadedCrafts.slice(0, 20).map(craftItem => <CraftItemCard key={craftItem._id} craftItem={craftItem}></CraftItemCard>)
            }
        </div>
    );
};

export default Home;