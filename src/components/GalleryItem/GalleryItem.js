import React, { Component } from 'react';
import axios from 'axios';
import './GalleryItem.css';
import Grid from '@material-ui/core/Grid';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';


class GalleryItem extends Component {
// local state for conditional rendering
    state = {
        showPhoto: true,
    }

    // function onPhotoClick to setState to False for Conditional Rendering

    onPhotoClick = () => {
        this.setState({
            showPhoto: !this.state.showPhoto
        })
        console.log('clicked on a photo');
    }
// function to increase likes of each photo
    onLikeClick = () => {
        axios({
            method: 'PUT',
            url: '/gallery/like/' + this.props.photo.id,
        }).then(
            () => {
                //call onGet function to reload the page
                this.props.onGet();
                console.log(this.props.photo.id)
            }
        ).catch(
            error => {
                console.log('error with axios put route', error);
            }
        )
    }


    render() {
        return (
            <>

                <div>

                    <Grid container >
                        <Grid item xs={12}>
                            {/* //tenary operator to show photo when true to show desciption when false */}
                            {this.state.showPhoto ?
                                <img
                                    className="eachPhoto"
                                    onClick={this.onPhotoClick}
                                    key={this.props.photo.id}
                                    src={this.props.photo.path}
                                    alt={this.props.photo.description}
                                />
                                :
                                //show description in case of falsy */}
                                <div height="200px" width="200px" className="eachPhoto" onClick={this.onPhotoClick}>
                                    {/* attach onClick event listener and call handleClick function */}
                                    <p onClick={this.onPhotoClick}>{this.props.photo.description}</p>
                                </div>
                            }
                            <br />
                            <FavoriteSharpIcon onClick={this.onLikeClick} id={this.props.photo.id}>Love it!</FavoriteSharpIcon>

                            <div>
                                {/* //ternary operator to display "No people love this :(" to display likes */}
                                {this.props.photo.likes === 0 ?
                                    <p>No people love this :(</p>
                                    :
                                    <p>{this.props.photo.likes} love this!</p>}

                            </div>
                        </Grid>

                    </Grid>

                </div>
            </>
        );
    }
}


export default GalleryItem;
