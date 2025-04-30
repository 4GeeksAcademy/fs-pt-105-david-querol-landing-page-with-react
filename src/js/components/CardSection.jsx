import React from "react";
import { Card } from "./Card";

export const CardSection = () => {
    return (
    <div className="row justify-content-center m-5">
        
        <Card 
            imageUrl="src/img/500x325.png" 
            title="Card Title" 
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit 
                vero aliquid similique quaerat nam nobis illo aspernatur 
                vitae fugiat numquam repellat." 
            buttonLink="#" 
            buttonLabel="Find Out More!"/>

        <Card 
            imageUrl="src/img/500x325.png" 
            title="Card Title" 
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit 
                vero aliquid similique quaerat nam nobis illo aspernatur 
                vitae fugiat numquam repellat." 
            buttonLink="#" 
            buttonLabel="Find Out More!"/>
        
        <Card 
            imageUrl="src/img/500x325.png" 
            title="Card Title" 
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit 
                vero aliquid similique quaerat nam nobis illo aspernatur 
                vitae fugiat numquam repellat." 
            buttonLink="#" 
            buttonLabel="Find Out More!"/>
            
        <Card 
            imageUrl="src/img/500x325.png" 
            title="Card Title" 
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit 
                vero aliquid similique quaerat nam nobis illo aspernatur 
                vitae fugiat numquam repellat." 
            buttonLink="#" 
            buttonLabel="Find Out More!"/>
    
    
    </div>
    
    )
}