import React from "react";

export const Welcome = (props) => {
    return (
        <div class="m-3 p-3 bg-light rounded-3">
            <div class="container-fluid py-5 text-start">
                <h1 class="display-5 fw-bold">{props.title}</h1>
                <p class="fs-5">{props.text}</p>
                <a class="btn btn-primary btn-lg fw-bold" href={props.buttonLink} role="button">{props.buttonLabel}</a>
            </div>
        </div>
    )
};
