import React from 'react';

export const PhotoFrame = () => {
   return(
    <>
    <div className='photoframe'>
        <img src={props.url}/>
    </div>
    </>
   )
}