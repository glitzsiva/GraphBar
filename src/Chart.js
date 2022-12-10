import React from "react";

import data from './data.json'
import ChartLayout from './ChartLayout'
import Bars from "./Bar";

const Chart =() =>{

  return(
    <ChartLayout>
    { data.map((datum, index) => {
        return (
            <Bars
                key={datum.state}
                index={index}
                datum={datum}
            />
            )
        })
    }
    </ChartLayout>
  )
}

export default Chart;