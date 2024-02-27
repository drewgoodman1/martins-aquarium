
import { getTips } from "../database.js"

export const TipList = () => {
    //invoke function imported from db
    const tips = getTips()

    //build a string filled w html
    let htmlString = '<article class="tipList">'


    //create html representation of each tip
    for (const tip of tips) {
        htmlString += `<section class="tip_Card">
                       <div>${tip.tipText}</div><br>`
        
    }
    htmlString += `</article>`
    console.log(tips)
    return htmlString
}