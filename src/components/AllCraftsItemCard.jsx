import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllCraftsItemCard = ({ craft }) => {

    const { _id, itemName, subcategory, status, imageURL, processingTime, rating } = craft;
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={imageURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{itemName}</div>
                        <div className="text-sm opacity-50">{subcategory}</div>
                    </div>
                </div>
            </td>
            <td>
                Processing Time: {processingTime} min
                <br />
                <span className="badge badge-ghost badge-sm">Rating:{rating}</span>
            </td>
            <td>{status}</td>
            <th>
                <Link to={`/craftItems/${_id}`}><button className="btn">View Details</button></Link>
            </th>
        </tr>
    );
};

AllCraftsItemCard.propTypes = {
    craft: PropTypes.object,
}

export default AllCraftsItemCard;