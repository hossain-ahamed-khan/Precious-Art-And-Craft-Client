import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MyCraftListCard = ({ craft }) => {

    const { _id, itemName, customization, status, imageURL, price, rating } = craft;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img className='w-96 h-64' src={imageURL} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{itemName}</h2>
                    <p>{customization}</p>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <div className="card-actions justify-between">
                        <p>{status}</p>
                        <Link to={`/updateCraft/${_id}`}><button className="btn bg-[#803D3B] text-slate-200">Edit</button></Link>
                        <Link to={`/crafts/${_id}`}><button className="btn bg-[#803D3B] text-slate-200">Delete</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyCraftListCard.propTypes = {
    craft: PropTypes.object,
}

export default MyCraftListCard;