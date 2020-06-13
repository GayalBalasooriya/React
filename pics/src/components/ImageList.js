import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {

    // const numbers = [1, 2, 3];
    // numbers.map((num) => {
    //     return num * 10; // 10,20,30
    // })
    
    // const images = props.images.map((image) =>  {
    // const images = props.images.map(({ description, id , urls }) =>  {
    const images = props.images.map((image) =>  {
        //return <img alt={description} key={id} src={urls.regular} />
        return <ImageCard key={image.id} image={image} />;
    });

    return (
        <div className="image-list"> {images} </div>
    )
}

export default ImageList;
