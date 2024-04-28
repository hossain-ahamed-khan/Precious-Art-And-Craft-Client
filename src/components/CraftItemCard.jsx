import PropTypes from 'prop-types';

const CraftItemCard = ({ craftItem }) => {

    const { itemName, subcategory, status, imageURL } = craftItem;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{itemName}</h2>
                    <p>{subcategory}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
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