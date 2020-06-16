import React from 'react';
import { shuffle } from 'lodash';

export default function ImagePlaceHolder() {
// Arrays
const Data = ['ichi', 'ni', 'san', 'yon', 'go', 'rokku'];
// Objects
const dataObject = [
    {
        name: 'ho',
        image: '../Images/ho.png'
    },
    {
        name: 'mo',
        image: '../Images/mo.png'
    },
    {
        name: 'n',
        image: '../Images/n.png'
    },
    {
        name: 'no',
        image: '../Images/no.png'
    },
    {
        name: 'ro',
        image: '../Images/ro.png'
    },
    {
        name: 'to',
        image: '../Images/to.png'
    },
    {
        name: 'yo',
        image: '../Images/yo.png'
    }
]
// Functions
const randomResult = 
    Data[Math.floor(Math.random()*Data.length)]

    return(
        <div>
            <p className="ans ttc">{randomResult}</p>
            <p></p>
        </div>
    )
}

// const randomResultB = dataObject.shuffle(Math.random()*dataObject.name)