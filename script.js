//Same keys and values ES2015
function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

//Computed Property Names ES2015
let favoriteNumber = 42;

const instructors = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//Object Methods ES2015
const instructor = {
    firstname: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " say bye!";
    }
}

//createAnimal function
function createAnimal (species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}