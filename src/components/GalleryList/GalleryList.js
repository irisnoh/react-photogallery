import React, { Component } from 'react';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem.js';


class GalleryList extends Component {

    render() {
        return (
            <>

                <div className="allPhotos">

                    {/* get each individual photo from the list and pass it to GalleryItem Component as a prop */}
                    {this.props.photoList.map(photo =>
                        <GalleryItem photo={photo} key={photo.id} onGet={this.props.onGet} onLikeClick={this.props.onLikeClick}/>)}

                </div>

            </>
        );
    }
}

export default GalleryList;
