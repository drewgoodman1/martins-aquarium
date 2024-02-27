// Import the function that returns a copy of the fish array
import { getFish } from "../database.js"

const fishes = getFish()
let greatFishes = []

export const FishList = () => {
    // Invoke the function that you imported from the database module
    //const fishes = getFish()
 
    mostHolyFish(fishes)
    soldierFish(fishes)
    nonHolyFish(fishes)
    //console.log(greatFishes)
    

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of greatFishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish_card">
            <div><img  class="fish__image image--card" src="${fish.image}" style="width: 200px; height: 150px;" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.harvestLocation}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

const mostHolyFish = (allFish) => {
    //use for loop to remove fish from allFish if holy 
    for(let i=0; i < allFish.length; i++){
        if(allFish[i].length %3 === 0){
            greatFishes.push(allFish[i])
            console.log(allFish[i].name + i)
            //this reduces the length of the array
            //decrementing i makes sure the element at the end is not missed when loop iterates
            allFish.splice(i,1)
            i--
            console.log(`${allFish[i+1].name} removed`)
            }
     
        }
}


const soldierFish = (allFish) => {
    //if fish length is multiple of 5 push to greatFish array
    for (const fish of allFish) {       
            if(fish.length %5 === 0){
            greatFishes.push(fish)
            }
    }
    //console.log(soldierFish)
    //return soldierFish    
}

const nonHolyFish = (allFish) => {
    // Any fish not a multiple of 3 or 5
    for (const fish of fishes) {       
        if(fish.length %5 !== 0 && fish.length %3 !==0){
            greatFishes.push(fish)
            }
    }
}





