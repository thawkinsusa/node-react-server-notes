const dogs = [
    // make testing data
    {
        id: 1,
        image: 'image',
        rating: 1
    }
]
// setup id variable
let id = 2;

// module exports so you can pull methods out
module.exports = {
    // handle git req contains object, res is the response object send things back to the client
    favoriteDogs(req, res) {
        res.statues(200).send(dogs)
    },
    // updating rating
    updateRating(req, res) {
        // make sure it passes back an id so you can pass back a specific dog AKA you need to pull off the id
        let {id} = req.params;
        // new string to update so you can get updated info aka /text= w.e
        let {newRating} = req.query;
        let index = dogs.findIndex( dog => dog.id === +id)
        // acces dog at index and set it to a new rating. the + is to make sure that it is a number newRating looks like api/?newRating = #
        dogs[index].rating = +newRating
        res.status(200).send(dogs)
 
    },
    addDog(req, res) {
        // need to access an image pulling it off your body passes back json
        let {image} = req.body;
        // new dog object
        let newDog = {
            image,
            id,
            // defualt rating
            rating: 1
        }
        // makes id a unique value
        id++
        dogs.push(newDog) 
        res.status(200).send(dogs);
    },
    deleteDog(req, res) {
        // need to pull off an id
        let {id} = req.params
        // search array to find specified dog loops through array to find the given index (id) index and where they found it
        // must add + to turn it into a number
        let index = dogs.findIndex(dogs => dogs.id === +id)
        // make sure that it finds the item aka index is not -1 && take out if true
        index !== -1 && dogs.splice(index,1)
        res.status(200).send(dogs)
    }
}