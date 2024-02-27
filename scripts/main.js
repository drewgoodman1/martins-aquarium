

// Import the functions from the correct module
import { FishList/* ,mostHolyFish,soldierFish, nonHolyFish */} from "./fish/FishList.js"
import { TipList } from "./tips/TipList.js"
import { LocationList } from "./locations/LocationList.js"


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".layoutContainer")
//const parentHTMLElement2 = document.querySelector(".layoutContainer")
const parentHTMLElement3 = document.querySelector(".allTips")


//parentHTMLElement.innerHTML = FishList()
//parentHTMLElement2.innerHTML = LocationList()


parentHTMLElement.innerHTML = (FishList() + LocationList())
parentHTMLElement3.innerHTML = TipList()




