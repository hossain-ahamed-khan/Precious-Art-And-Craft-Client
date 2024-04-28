import Swal from 'sweetalert2';

const AddCraftItem = () => {

    const handleAddCraftItem = event => {
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
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;

        const newCraftItem = { itemName, subcategory, customization, status, imageURL, processingTime, price, rating, itemDescription, userName, userEmail };
        console.log(newCraftItem);

        // send data to the server 

        fetch("http://localhost:5000/craftItems", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraftItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully added items',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div className="w-3/5 mx-auto my-8">
            <form onSubmit={handleAddCraftItem}>

                <div className="grid grid-cols-2 gap-4">

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Item name:</span>
                        </div>
                        <input type="text" name="itemName" required placeholder="" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Select Subcategory</span>
                        </div>
                        <select className="select select-bordered" name="subcategory" required>
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
                        <select className="select select-bordered" name="customization" required>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Stock Status</span>
                        </div>
                        <select className="select select-bordered" name="status" required>
                            <option>In stock</option>
                            <option>Made to Order</option>
                        </select>
                    </label>


                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Image URL:</span>
                        </div>
                        <input type="text" name="imageURL" required placeholder="" className="input input-bordered w-full " />
                    </label>


                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Processing Time:</span>
                        </div>
                        <input type="number" name="processingTime" required placeholder="" className="input input-bordered w-full " />
                    </label>


                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Price:</span>
                        </div>
                        <input type="number" name="price" required placeholder="" className="input input-bordered w-full " />
                    </label>


                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Rating:</span>
                        </div>
                        <input type="number" name="rating" required placeholder="" className="input input-bordered w-full " />
                    </label>

                </div>


                <label className="form-control my-4">
                    <div className="label">
                        <span className="label-text">Item Description:</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24" name="itemDescription" required placeholder=""></textarea>
                </label>


                <div className="grid grid-cols-2 gap-4">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">User Name:</span>
                        </div>
                        <input type="text" name="userName" required placeholder="" className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">User Email:</span>
                        </div>
                        <input type="email" name="userEmail" required placeholder="" className="input input-bordered w-full " />
                    </label>
                </div>

                <input className="my-6 w-full py-2 bg-[#fe5000d5] rounded-lg cursor-pointer text-slate-200 text-xl font-semi-bold" type="submit" value="Add" />

            </form>
        </div>
    );
};

export default AddCraftItem;