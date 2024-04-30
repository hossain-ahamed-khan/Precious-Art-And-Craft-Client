import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const CraftItemDetails = () => {

    const { id } = useParams();
    const [craft, setCraft] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/craftItems/${id}`)
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
                    <h1 className="text-5xl font-bold">{craft.itemName}</h1>
                    <p className="">{craft.itemDescription}</p>
                    <p className="">{craft.subcategory}</p>
                    <p className="">{craft.customization}</p>
                    <p className="">{craft.status}</p>
                    <p className="">{craft.processingTime}</p>
                    <p className="">{craft.price}</p>
                    <p className="">{craft.rating}</p>

                </div>
            </div>
        </div>
    );
};

export default CraftItemDetails;