import React from "react";
import { Color } from "./Color";

export function Colors({colors}){
    return (
        <ul> {colors.map((color) => (
            <Color key={color.id} color={color} />
        ))
            }
        </ul>
    )
}