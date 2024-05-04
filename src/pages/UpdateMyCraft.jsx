
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMyCraft = () => {

    const loadedCraft = useLoaderData();

    const { _id, itemName, subcategory, customization, status, imageURL, processingTime, price, rating, itemDescription } = loadedCraft;

    const handleUpdateCraftItem = event => {
        event.preventDefault();
        const form = event.target;

        const itemName = form.itemName.value;
        const subcategory = form.subcategory.value;
        const customization = form.customization.value;
        const status = form.status.value;
        const imageURL = form.imageURL.value;
        const processingTime = form.processingTime.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const itemDescription = form.itemDescription.value;

        const updatedCraftItem = { itemName, subcategory, customization, status, imageURL, processingTime, price, rating, itemDescription };
        console.log(updatedCraftItem);

        // send data to the server
        fetch(`https://art-and-crafts-server.vercel.app/craftItems/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCraftItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="w-3/5 mx-auto my-8">
            <form onSubmit={handleUpdateCraftItem}>

                <div className="grid grid-cols-2 gap-4">

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Item name:</span>
                        </div>
                        <input type="text" name="itemName" defaultValue={itemName} required placeholder="" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Select Subcategory</span>
                        </div>
                        <select className="select select-bordered" name="subcategory" defaultValue={subcategory} required>
                            <option>Card Making</option>
                            <option>Scrapbooking</option>
                            <option>Paper Quilling & origami</option>
                            <option>Glass Painting</option>
                            <option>Lampworking</option>
                            <option>Glass Dying & Staining</option>
                        </select>
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Is it customizable</span>
                        </div>
                        <select className="select select-bordered" name="customization" defaultValue={customization} required>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Stock Status</span>
                        </div>
                        <select className="select select-bordered" name="status" defaultValue={status} required>
                            <option>In stock</option>
                            <option>Made to Order</option>
                        </select>
                    </label>


                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Image URL:</span>
                        </div>
                        <input type="text" name="imageURL" defaultValue={imageURL} required placeholder="" className="input input-bordered w-full " />
                    </label>


                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Processing Time:</span>
                        </div>
                        <input type="number" name="processingTime" defaultValue={processingTime} required placeholder="" className="input input-bordered w-full " />
                    </label>


                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Price:</span>
                        </div>
                        <input type="number" name="price" defaultValue={price} required placeholder="" className="input input-bordered w-full " />
                    </label>


                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Rating:</span>
                        </div>
                        <input type="number" name="rating" defaultValue={rating} required placeholder="" className="input input-bordered w-full " />
                    </label>

                </div>


                <label className="form-control my-4">
                    <div className="label">
                        <span className="label-text">Item Description:</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24" name="itemDescription" defaultValue={itemDescription} required placeholder=""></textarea>
                </label>

                <input className="my-6 w-full py-2 bg-[#803D3B] rounded-lg cursor-pointer text-slate-200 text-xl font-semi-bold" type="submit" value="Update" />

            </form>
        </div>
    );
};

export default UpdateMyCraft;