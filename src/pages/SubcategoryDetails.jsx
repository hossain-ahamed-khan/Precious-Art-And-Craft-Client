import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


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
        <div>
            {categoryItems.length}

        </div>
    );
};

export default SubcategoryDetails;