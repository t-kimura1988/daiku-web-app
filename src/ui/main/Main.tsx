import React from 'react';
import {useMediaQueryContext} from "../../context/MediaContext";

export const Main = () =>  {
    const {isPc} = useMediaQueryContext()
    return(

        <div className="Main">
            {isPc ? "a" : "b"}
        </div>
    )
}