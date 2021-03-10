import React from 'react'
import '../iprogram.css'

const PhotoList = (props) => {

    return (
        <div className="col-6 col-md-4 py-3 photo_list">
            <div>
                <img src={props.photos.thumbnailUrl} className="imageBox" />
                <p className="title mt-1 p-2 text-center">{props.photos.title}</p>
                <p className="PhotoId p-2 text-center">{props.photos.id}</p>
                <p className="PhotoUrl p-2 text-center">{props.photos.url}</p>
                <button className={`btn ${props.buttonArray ? "btn-danger" : "btn-primary"} compareBtn mb-3`} onClick={() => {
                    props.buttonArray ? props.handleRemoveCompare(props.photos.id, props.photos) :
                        props.handleAddCompare(props.photos.id, props.photos)

                }
                }>
                    {props.buttonArray ? 'REMOVE' : 'ADD'}
                </button>
            </div>
        </div>

    );

}

export default PhotoList;