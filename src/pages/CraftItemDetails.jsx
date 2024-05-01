import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const CraftItemDetails = () => {

    const { id } = useParams();
    const [craft, setCraft] = useState({});

    useEffect(() => {
        fetch(`https://art-and-crafts-server.vercel.app/${id}`)
            .then(res => res.json())
            .then(data => {
                setCraft(data)
            })
    }, [id])

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={craft.imageURL} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold my-2">{craft.itemName}</h1>
                    <p className="my-2">{craft.itemDescription}</p>
                    <p><span className="font-bold">Subcategory:</span> {craft.subcategory}</p>
                    <p><span className="font-bold">Is it Customizable:</span> {craft.customization}</p>
                    <p><span className="font-bold">Status:</span> {craft.status}</p>
                    <p><span className="font-bold">Processing Time:</span> {craft.processingTime}min</p>
                    <p><span className="font-bold">Price:</span> {craft.price}BDT</p>
                    <p><span className="font-bold">Rating:</span> {craft.rating}</p>

                </div>
            </div>
        </div>
    );
};

export default CraftItemDetails;