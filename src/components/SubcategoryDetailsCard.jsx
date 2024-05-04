import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SubcategoryDetailsCard = ({ categoryItem }) => {

    const { _id, itemName, imageURL, subcategory, itemDescription, price, rating, processingTime } = categoryItem;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl my-10">
                <figure><img className='rounded-xl' src={imageURL} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{itemName}</h2>
                    <p>{itemDescription}</p>
                    <p><span className="font-bold">Subcategory:</span> {subcategory}</p>
                    <p><span className="font-bold">Processing Time:</span> {processingTime}min</p>
                    <p><span className="font-bold">Price:</span> {price}BDT</p>
                    <p><span className="font-bold">Rating:</span> {rating}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/craftItems/${_id}`}><button className="btn bg-[#803D3B] text-slate-200">View Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

SubcategoryDetailsCard.propTypes = {
    categoryItem: PropTypes.object,
}

export default SubcategoryDetailsCard;