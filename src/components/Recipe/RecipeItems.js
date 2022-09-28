import React from 'react';
import "./RecipeItems.css"

const RecipeItems = ({Relist}) => {
    const {revenue, listTit, won} = Relist
    // const payitems = Relist.map((item) => (item.revenue === "수입" ? "+"(item.won) : "-"(item.won)))
// console.log(Relist)
    return (
        <li className={revenue === "수입" ? "plus" : "minus"}>
            <p>
                {
                    revenue === "수입" ? "+ " : "- "
                }
                {won}
            </p>
            <span>{listTit}</span>
        </li>
    );
};

export default RecipeItems;