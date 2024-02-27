
import { getLocations } from "../database.js"

export const LocationList = () => {
    //invoke function imported from db
    const locations = getLocations()

    //build a string filled w html
    let htmlString = '<article class="locationList">'


    //create html representation of each tip
    for (const location of locations) {
        htmlString += `<section class= "location_card">
                        <div><img  class="fish__image image--card" src="${location.locationPhoto}" style="width: 200px; height: 150px;" /></div>
                       <div>${location.locationName}</div>
                       </section>` 
    }
    htmlString += `</article>`
    console.log(locations)
    return htmlString
}