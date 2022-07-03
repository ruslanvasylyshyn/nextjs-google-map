import React from "react";
import { locations } from '../api/api'

function Nav({ markersFilter }) {
    return(
        <nav>
            <ul>
                {locations.locations.map((location)=> {
                    return(
                        <li key={location.key}>
                        <button value={location.key} onClick={(e)=> markersFilter(+e.target.value)}>
                            {location.label}
                        </button>
                        </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav;