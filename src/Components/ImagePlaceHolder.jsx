import React from 'react';

export default function ImagePlaceHolder() {
//Arrays
const Data = ['Ichi', 'Ni', 'San', 'Yon', 'Go', 'Rokku']
//Functions
const randomResult = 
    Data[Math.floor(Math.random()*Data.length)]

    return(
        <div>
            <p>{randomResult}</p>
        </div>
    )
}