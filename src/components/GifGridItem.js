import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {

    return (
        <div key={id} className='card  animate__animated animate__fadeIn animate__delay-1s'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
