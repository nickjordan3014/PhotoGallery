import React from "react";
import './AlbumItem.css';

function importAll(r) { //function to import all images into the component to use later
    let images = {} // creates empty object to hold all image links
    r.keys().map((item) => {images[item.replace('./', '')] = r(item); }); // adds the ./ to import links into react
    return images;
}

export default class AlbumItem extends React.Component {

    render() {

        const images = importAll(require.context('./assets', false, /\.(jpe?g)$/)); // imports jpgs into component
        
        return (
            <div>
                {this.props.photos.albumPhotos.map((element) => { // maps the elements to the current album
                    let newKey = this.props.photos.albumName + "-" + element.photoId // creates key/id to apply to the span element
                    return (
                        <span key={newKey}>
                            <img 
                                src={images[element.src]} 
                                alt={newKey} 
                                id={newKey}
                                className="photo" 
                            />
                        </span>
                    )
                })} 
            </div>
        )
    }
}