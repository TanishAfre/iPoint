import React, { useContext } from 'react';
import "./FoodDisplay.css" ;
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
    const filteredItems = food_list.filter(item => category === "All" || category === item.category);

    return (
        <>
        <div className='food-display' id="food-display">
            <h2>Visit store for more details</h2>
            <div className="food-display-list">
            {filteredItems.map((item, index) => (
                    <FoodItem key={index} id={item._id} name={item.name} price1={item.price1} price2={item.price2 || null} description={item.description} image={item.image}/>
                ))}
            </div>
        </div>
        </>
    );
}

export default FoodDisplay;