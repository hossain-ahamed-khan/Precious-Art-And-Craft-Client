import { useLoaderData } from "react-router-dom";
import CraftItemCard from "../components/CraftItemCard";
import { useEffect, useState } from "react";
import SubCategoryCard from "../components/SubCategoryCard";


const Home = () => {
    const loadedCrafts = useLoaderData();

    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        fetch('https://art-and-crafts-server.vercel.app/subcategories')
            .then(res => res.json())
            .then(data => {
                setSubcategories(data);
            })
    })

    return (
        <>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/jgRqxDg/Scrapbooking-2.jpg" className="w-full" />

                    <div className="absolute text-center w-full h-full flex justify-center items-center text-slate-800 backdrop-blur-sm">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold">Explore Paper Crafts & Glass Art Masterpieces Online</h1>
                            <p className="mb-5 w-3/5 mx-auto">Unleash your creativity with our curated collection of exquisite paper crafts and stunning glass art. Dive into a world of inspiration, tutorials, and supplies to ignite your passion for crafting.</p>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/TBksJXg/card-making-2.jpg" className="w-full" />

                    <div className="absolute text-center w-full h-full flex justify-center items-center text-slate-200 backdrop-blur-sm">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold">Explore Paper Crafts & Glass Art Masterpieces Online</h1>
                            <p className="mb-5 w-3/5 mx-auto">Unleash your creativity with our curated collection of exquisite paper crafts and stunning glass art. Dive into a world of inspiration, tutorials, and supplies to ignite your passion for crafting.</p>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/6464mMg/Glass-Dying-Staining-1.jpg" className="w-full" />

                    <div className="absolute text-center w-full h-full flex justify-center items-center text-slate-800 backdrop-blur-sm">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold">Explore Paper Crafts & Glass Art Masterpieces Online</h1>
                            <p className="mb-5 w-3/5 mx-auto">Unleash your creativity with our curated collection of exquisite paper crafts and stunning glass art. Dive into a world of inspiration, tutorials, and supplies to ignite your passion for crafting.</p>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>

                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/8YcDZ9d/Lampworking-1.jpg" className="w-full" />

                    <div className="absolute text-center w-full h-full flex justify-center items-center text-slate-200 backdrop-blur-sm">
                        <div>
                            <h1 className="mb-5 text-5xl font-bold">Explore Paper Crafts & Glass Art Masterpieces Online</h1>
                            <p className="mb-5 w-3/5 mx-auto">Unleash your creativity with our curated collection of exquisite paper crafts and stunning glass art. Dive into a world of inspiration, tutorials, and supplies to ignite your passion for crafting.</p>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>

                </div>
            </div>


            {/* Craft Items Section  */}

            <section>
                <div className="my-16 w-3/5 mx-auto">
                    <h1 className="text-center text-3xl font-bold my-6">Craft Items Section</h1>
                    <p className="text-center">Browse our extensive collection of high-quality craft supplies and materials for paper crafts and glass art projects. From basics to specialty items, find everything you need to bring your creations to life.</p>
                </div>

                <div className="w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-10">
                    {
                        loadedCrafts.slice(0, 6).map(craftItem => <CraftItemCard key={craftItem._id} craftItem={craftItem}></CraftItemCard>)
                    }
                </div>
            </section>


            {/* Art & Craft Categories Section  */}

            <section>
                <div className="my-16 w-3/5 mx-auto">
                    <h1 className="text-center text-3xl font-bold my-6">Craft Items Section</h1>
                    <p className="text-center">Browse our extensive collection of high-quality craft supplies and materials for paper crafts and glass art projects. From basics to specialty items, find everything you need to bring your creations to life.</p>
                </div>

                <div className="w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-20">
                    {
                        subcategories.map(category => <SubCategoryCard key={category._id} category={category}></SubCategoryCard>)
                    }

                </div>
            </section>
        </>
    );
};

export default Home;