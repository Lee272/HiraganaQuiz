import React from 'react';

export default function ImagePlaceHolder() {
//Arrays
const Data = ['ichi', 'ni', 'san', 'yon', 'go', 'rokku']
//Functions
const randomResult = 
    Data[Math.floor(Math.random()*Data.length)]

    return(
        <div>
            <p className="ans ttc">{randomResult}</p>
        </div>
    )
}