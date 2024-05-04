import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SubCategoryCard = ({ category }) => {

    const { subcategory_name, subcategory_image } = category;

    return (
        <div>
            <Link to={`/subcategory/${subcategory_name}`}>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={subcategory_image} alt="Shoes" /></figure>
                    <div className="card-body flex justify-center items-center">
                        <h1 className='text-2xl font-semibold'>{subcategory_name}</h1>
                    </div>
                </div>
            </Link>
        </div>
    );
};

SubCategoryCard.propTypes = {
    category: PropTypes.object,
}

export default SubCategoryCard;