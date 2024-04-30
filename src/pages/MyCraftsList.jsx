import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import MyCraftListCard from "../components/MyCraftListCard";

const MyCraftsList = () => {

    const { user } = useContext(AuthContext);

    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myCrafts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
            })
    }, [user, item])

    return (
        <div className="w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-8">
            {
                item.map(craft => <MyCraftListCard key={craft._id} craft={craft}></MyCraftListCard>)
            }
        </div>
    );
};

export default MyCraftsList;