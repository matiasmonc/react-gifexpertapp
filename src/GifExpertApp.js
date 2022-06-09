import React, {useState} from 'react';
import { AddCategory } from './compounts/AddCategory';
import { GifGrid } from './compounts/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     //setCategories([...categories, 'HunterXHunter']);
    //     setCategories( cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <>
        
                <h2>GifExpertApp</h2>
                <AddCategory setCategories = { setCategories } />
                <hr />

                <ol>
                    {
                        categories.map( category => (
                            < GifGrid 
                                key={ category }
                                category={ category } 
                            />
                        ))
                    }
                </ol>
        </>);

}

export default GifExpertApp;