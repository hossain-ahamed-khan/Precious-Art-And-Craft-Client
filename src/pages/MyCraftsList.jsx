import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import MyCraftListCard from "../components/MyCraftListCard";
import Swal from "sweetalert2";

const MyCraftsList = () => {

    const { user } = useContext(AuthContext);

    const [item, setItem] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/myCrafts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
            })
    }, [user, control])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteCraft/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setControl(!control);
                    Swal.fire({
                        title: 'Success!',
                        text: 'Deleted Successfully',
                        icon: 'denger',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="w-10/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-8">
            {
                item.map(craft => <MyCraftListCard key={craft._id} craft={craft} handleDelete={handleDelete}></MyCraftListCard>)
            }
        </div>
    );
};

export default MyCraftsList;