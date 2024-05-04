import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubcategoryDetailsCard from "../components/SubcategoryDetailsCard";


const SubcategoryDetails = () => {
    const { subcategory_name } = useParams();

    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(() => {
        fetch(`https://art-and-crafts-server.vercel.app/craftItems/subcategory/${subcategory_name}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategoryItems(data);
            })
    }, [])

    return (
        <div className="w-10/12 mx-auto my-10 rounded-xl">
            {
                categoryItems?.map(categoryItem => <SubcategoryDetailsCard key={categoryItem._id} categoryItem={categoryItem}></SubcategoryDetailsCard>)
            }

        </div>
    );
};

export default SubcategoryDetails;