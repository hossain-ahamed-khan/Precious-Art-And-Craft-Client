import { useLoaderData } from "react-router-dom";
import CraftItemCard from "../components/CraftItemCard";


const Home = () => {

    const loadedCrafts = useLoaderData();

    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/jgRqxDg/Scrapbooking-2.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Paper Crafts & Glass Art Gallery</h1>
                        <p className="mb-5">Dive into the captivating realm of paper crafts and glass artistry. Discover stunning creations, expert tutorials, and unleash your creativity with our curated resources and community.</p>
                    </div>
                </div>
            </div>

            <div className="my-16 w-3/5 mx-auto">
                <h1 className="text-center text-3xl font-bold my-6">Craft Items Section</h1>
                <p className="text-center">Browse our extensive collection of high-quality craft supplies and materials for paper crafts and glass art projects. From basics to specialty items, find everything you need to bring your creations to life.</p>
            </div>

            <div className="w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-8">
                {
                    loadedCrafts.slice(0, 6).map(craftItem => <CraftItemCard key={craftItem._id} craftItem={craftItem}></CraftItemCard>)
                }
            </div>
        </>
    );
};

export default Home;