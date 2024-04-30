import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MyCraftListCard = ({ craft, handleDelete }) => {

    const { _id, itemName, customization, status, imageURL, price, rating } = craft;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img className='w-96 h-64' src={imageURL} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{itemName}</h2>
                    <p><span className='font-bold'>Customizable:</span> {customization}</p>
                    <p><span className='font-bold'>Price:</span> {price}</p>
                    <p><span className='font-bold'>Rating:</span> {rating}</p>
                    <div className="card-actions justify-between">
                        <p>{status}</p>
                        <Link to={`/updateCraft/${_id}`}><button className="btn bg-[#803D3B] text-slate-200">Edit</button></Link>
                        <Link onClick={() => handleDelete(_id)}><button className="btn bg-[#803D3B] text-slate-200">Delete</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyCraftListCard.propTypes = {
    craft: PropTypes.object,
    handleDelete: PropTypes.object,
}

export default MyCraftListCard;