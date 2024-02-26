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
            harvestLocation: "Beijing",
            image: "https://media.istockphoto.com/id/1368239780/photo/clown-fish.jpg?s=612x612&w=is&k=20&c=IB1AFchWXE9-uGdVH7kQhw8S_92d_HC1BT3fFbT1KGo="
        },

        {
            name: "Marlin",
            species: "Swordtail",
            diet: "Algae",
            length: 9,
            harvestLocation: "New York",
            image: "https://media.istockphoto.com/id/157589352/photo/emperor-angelfish-on-white-background-facing-left.jpg?s=612x612&w=is&k=20&c=FI_YYzF7ltFF5NN1eVamgy1pZUeyXrZujNLaiDLbaCs="
        },

        {
            name: "Nemo",
            species: "Tetra",
            diet: "Krill",
            length: 6,
            harvestLocation: "Tokyo",
            image:"https://images.unsplash.com/photo-1538719501547-bc023056a8b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJvcGljYWwlMjBmaXNofGVufDB8fDB8fHww"
        }        
        
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}