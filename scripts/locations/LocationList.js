
import { getLocations } from "../database.js"
// Import the function that returns a copy of the fish array
import { getFish } from "../database.js"

export const LocationList = () => {
    //invoke function imported from db
    const locations = getLocations()

    //build a string filled w html
    let htmlString = '<article class="locationList">'
    
    for (const location of locations) {
        //loop through array of fish harvested at each location and add to string
        let locationString = ""
        for (const fish of location.fishHarvested) {          
            //console.log(fish)
            locationString += fish + " "          
        }
        //generate html for locations
        htmlString += `<section class= "location_card">
                        <div><img  class="fish__image image--card" src="${location.locationPhoto}" style="width: 200px; height: 150px;" /></div>
                       <div>${location.locationName}</div>
                       <div>${locationString}</div>
                       </section>` 
    }
    htmlString += `</article>`
    //console.log(locations)
    return htmlString
}
