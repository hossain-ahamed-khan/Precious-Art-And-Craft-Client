import { useLoaderData } from "react-router-dom";
import AllCraftsItemCard from "../components/AllCraftsItemCard";


const AllCraftsItems = () => {

    const loadedCrafts = useLoaderData();

    return (
        <div className="my-24">
            <div className="overflow-x-auto w-10/12 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loadedCrafts.map(craft => <AllCraftsItemCard key={craft._id} craft={craft}></AllCraftsItemCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCraftsItems;