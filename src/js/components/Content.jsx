import React from "react";
import { Welcome } from "./Welcome";
import { CardSection } from "./CardSection";

export const Content = () => {
    return (
            <div className="container-fluid">

                <Welcome title="A Warm Welcome!" 
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit 
                vero aliquid similique quaerat nam nobis illo aspernatur 
                vitae fugiat numquam repellat." 
                buttonLink="#" 
                buttonLabel="Call to action!" />
                
                <CardSection />

            </div>


    )
} 