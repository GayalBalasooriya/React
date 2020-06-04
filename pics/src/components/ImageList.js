import React from 'react'

const ImageList = (props) => {

    // const numbers = [1, 2, 3];
    // numbers.map((num) => {
    //     return num * 10; // 10,20,30
    // })
    
    // const images = props.images.map((image) =>  {
    const images = props.images.map(({ description, id , urls }) =>  {
        return <img alt={description} key={id} src={urls.regular} />
    })
    return (
        <div>
            {images}
        </div>
    )
}

export default ImageList;
