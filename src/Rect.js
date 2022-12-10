import React from "react";

const Rect = ({ x, y, width, text, height,marginBottom='' }) => (
    <div 
        style={{
            width,
            height,
            background:"#2077B4",
            marginBottom
        }}
    > <small style={{marginLeft:width}}>{text}</small>
    </div>
);

export default Rect;