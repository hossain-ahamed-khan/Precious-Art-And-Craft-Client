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

            <section className="my-24">
                <div className="my-16 w-3/5 mx-auto">
                    <h1 className="text-center text-3xl font-bold my-6">Craft Items</h1>
                    <p className="text-center">Browse our extensive collection of high-quality craft supplies and materials for paper crafts and glass art projects. From basics to specialty items, find everything you need to bring your creations to life.</p>
                </div>

                <div className="w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-10">
                    {
                        loadedCrafts.slice(0, 6).map(craftItem => <CraftItemCard key={craftItem._id} craftItem={craftItem}></CraftItemCard>)
                    }
                </div>
            </section>

            {/* contact us section  */}

            <section>
                <div className="hero min-h-[580px] w-10/12 mx-auto bg-base-200 rounded-3xl my-20">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Contact Us</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" placeholder="message"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#803D3B] text-slate-200">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Art & Craft Categories Section  */}

            <section className="my-32">
                <div className="my-16 w-3/5 mx-auto">
                    <h1 className="text-center text-3xl font-bold my-6">Art & Craft Categories</h1>
                    <p className="text-center">Explore a myriad of artistic realms within our Art & Craft Categories. From traditional to contemporary, immerse yourself in diverse mediums, techniques, and styles, inspiring creativity and igniting passion in every visitor.</p>
                </div>

                <div className="w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-20">
                    {
                        subcategories.map(category => <SubCategoryCard key={category._id} category={category}></SubCategoryCard>)
                    }

                </div>
            </section>

            {/* Feedback & Reviews section  */}

            <section className="my-24">
                <h1 className="text-center text-3xl font-bold my-8">Featured Arts and Crafts Gallery</h1>
                <p className="w-3/5 mx-auto my-8 text-center">Step into our Featured Arts and Crafts Gallery, where creativity flourishes and inspiration awaits. Explore captivating works from talented artisans, each piece a masterpiece of imagination and skill.</p>
                <div className="carousel carousel-center rounded-box">
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/vH7zRts/Glass-Painting-4.jpg" alt="Pizza" className="w-72 h-96" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/bbxtfvs/Paper-Quilling-origami-3.jpg" alt="Pizza" className="w-72 h-96" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/WGwkXRP/card-making-4.jpg" alt="Pizza" className="w-72 h-96" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/4WttQ1s/Glass-Painting-1.jpg" alt="Pizza" className="w-72 h-96" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/YcMHVVp/card-making-1.jpg" alt="Pizza" className="w-72 h-96" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/mNndfGv/Glass-Painting-3.jpg" alt="Pizza" className="w-72 h-96" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/y6mBTPg/card-making-3.jpg" alt="Pizza" className="w-72 h-96" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/vB2Lh8r/Glass-Painting-2.jpg" alt="Pizza" className="w-72 h-96" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/MGbBxcr/Paper-Quilling-origami-2.jpg" alt="Pizza" className="w-72 h-96" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/mNndfGv/Glass-Painting-3.jpg" alt="Pizza" className="w-72 h-96" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/8svPRfn/Paper-Quilling-origami-1.jpg" alt="Pizza" className="w-72 h-96" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/jgRqxDg/Scrapbooking-2.jpg" alt="Pizza" className="w-72 h-96" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;