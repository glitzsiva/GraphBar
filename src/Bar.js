import React from "react";
import data from './data.json'
import Rect from "./Rect";
import constants from "./constants";

const Bars = (props) =>{

const {datum} = props;
const estimate2011 = datum.estimate2011;
const estimate2022 = datum.estimate2022;

return(<div style={{marginBottom:'20px', display:'flex'}}>
        <p style={{width:'150px',textAlign:'right'}} >{datum.state}</p>
        <div>
            <Rect
                height={constants.itemWidth}
                width={estimate2011}
                marginBottom='10px'
                text={datum.estimate2011}
            />
            <Rect
                height={constants.itemWidth}
                width={estimate2022}
                text={datum.estimate2022}
            />
        </div>
</div>
)

}
export default Bars;