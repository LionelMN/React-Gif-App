import React, { useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = (
    {category}
) => {

    const [categoryState, setCategoryState] = useState(category)

    const {data : images, loading} = useFetchGifs( categoryState );

    const handleButton = () => {
        setCategoryState('');
    }

    const body =
    <div className='categoryContainer'>
        <h2>{categoryState}</h2>
        { loading && <p className='animate__animated animate__flash'>Loading...</p>}
        <button onClick={handleButton}>X</button>
        <div className='cardGrid'>
                {
                    images.map( image => (
                        <GifGridItem
                            key={image.id}
                            { ...image }
                        />
                    ))
                }
        </div>
    </div>


    return categoryState && body
}
