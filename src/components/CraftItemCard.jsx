import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CraftItemCard = ({ craftItem }) => {

    const { _id, itemName, subcategory, status, imageURL } = craftItem;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img className='w-96 h-64' src={imageURL} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{itemName}</h2>
                    <p>{subcategory}</p>
                    <div className="card-actions justify-between">
                        <p>{status}</p>
                        <Link to={`craftItems/${_id}`}><button className="btn bg-[#803D3B] text-slate-200">View Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

CraftItemCard.propTypes = {
    craftItem: PropTypes.object,
}

export default CraftItemCard;