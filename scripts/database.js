/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Bart",
            species: "Beta",
            diet: "Blood Worms",
            length: 7,
            harvestLocation: "Waikiki",
            image: "https://media.istockphoto.com/id/1368239780/photo/clown-fish.jpg?s=612x612&w=is&k=20&c=IB1AFchWXE9-uGdVH7kQhw8S_92d_HC1BT3fFbT1KGo="
        },

        {
            name: "Marlin",
            species: "Swordtail",
            diet: "Algae",
            length: 9,
            harvestLocation: "Australia",
            image: "https://media.istockphoto.com/id/178489200/photo/discus-tropical-decorative-fish.jpg?s=612x612&w=is&k=20&c=r9BEFEn6d0cLPWlmrx8HOTalMTCIdeXU8VnFQAb47vM="
        },

        {
            name: "Nemo",
            species: "Tetra",
            diet: "Krill",
            length: 6,
            harvestLocation: "Tokyo",
            image:"https://images.unsplash.com/photo-1516408388733-2f8364f2e00b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJvcGljYWwlMjBmaXNofGVufDB8fDB8fHww"
        },
        {
            name: "Dory",
            species: "Blue Tang",
            diet: "Plankton",
            length: 15,
            harvestLocation: "Australia",
            image: "https://media.istockphoto.com/id/961458456/photo/underwater-coral-reef-in-red-sea.jpg?s=612x612&w=0&k=20&c=awXYE1_lNT0yITLKBw_vzEnPUWVpsm0ey-5Be7ffNoc="
        },

        {
            name: "Goldie",
            species: "Goldfish",
            diet: "Fish Flakes",
            length: 5,
            harvestLocation: "Tokyo",
            image: "https://media.istockphoto.com/id/888892232/photo/tropical-fish-on-coral-reef.jpg?s=612x612&w=0&k=20&c=YkaI33Ua6tJNdKJ7jq8WJTEvSb5p0WIykd8mu1mbFvQ="
        },

        {
            name: "Sushi",
            species: "Koi",
            diet: "Insects",
            length: 8,
            harvestLocation: "Tokyo",
            image: "https://media.istockphoto.com/id/636806450/photo/king-angel-fish.jpg?s=612x612&w=0&k=20&c=v39kjEmRVibR7vqnDwy82BCOT6pVAKsuLLsxF755nNU="
        }        
        
    ],

    tips: [
        {
            tipID: 1,
            tipText: "Y'know this time it wasn't my fault. The Doc set all of his clocks twenty-five minutes slow."
        },
        {
            tipID: 2,
            tipText: "Let's get him."
        },
        {
            tipID: 3,
            tipText: "Please note that Einstein's clock is in complete synchronization with my control watch."
        }

    ],

    locations: [
        {
            locationID: 1,
            locationName: "Tokyo",
            locationPhoto: "https://media.istockphoto.com/id/1345059895/photo/alley-of-memories.jpg?s=612x612&w=0&k=20&c=5BTlBgn6FothoJrDLLWBjRAlVA8vRlhhGOj2TnC4oCA="
        },
        {
            locationID: 2,
            locationName: "Australia",
            locationPhoto: "https://media.istockphoto.com/id/1368846553/photo/d-syd-kir-circ-quay-ferry.jpg?s=612x612&w=is&k=20&c=8ZQJel5-jEkyQkk58w-qHM1AG-MZJRM1g4XvPOCLDJo="
        },
        {
            locationID: 3,
            locationName: "Waikiki",
            locationPhoto: "https://media.istockphoto.com/id/1371880849/photo/hawaii-beach-honolulu-city-travel-landscape-of-waikiki-beach-and-diamond-head-mountain-peak.jpg?s=612x612&w=0&k=20&c=z-IZVBnGdVzjIYdgnuiVPIoWCNAKLuDrXbnxuirYXPY="
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}
export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}