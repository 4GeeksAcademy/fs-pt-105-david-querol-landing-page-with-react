import React from "react";

export const Card = (props) => {
    return(
        <div className="col-md-6 col-lg-6 col-xl-3 text-center">
            <div className="card my-3"style={{ width: "18rem" }}>
                <img src={props.imageUrl} className="card-img-top" alt="card image" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>    
                </div>
                <div className="card-footer">
                    <a href={props.buttonLink} className="btn btn-primary">{props.buttonLabel}</a>
                </div>
            </div>
        </div>

    )

}