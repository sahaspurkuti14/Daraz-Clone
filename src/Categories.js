import './scss/Categories.scss';
import React from 'react';
import {category , subCategory} from './categoriesData';
import Dropdown from 'react-multilevel-dropdown';


function Categories() {
    let selectedId ;

    let onSelectCategory = (id) => {
            selectedId = id;
    }


    return (
            <div className="categories">
                {category.map(category => (
                    <Dropdown.Item className="dropdown-items" key={category.id} onClick={onSelectCategory(category.id)}>{category.name} 
                        <Dropdown.Submenu position='right' className="submenu">
                            {subCategory.map(subCategory => (
                             <li className="dropdown-subitems" key={subCategory.id}>                                    
                                    {subCategory.category.id === selectedId ? subCategory.name : false}
                             </li>
                                
                            ))}
    
                        </Dropdown.Submenu>
                    </Dropdown.Item>
                ))}
            </div>  
    )
}

export default Categories;













