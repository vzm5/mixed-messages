/*Mixed Messages
script.js 
This is a random car generating app. It can be used by someone who wants to get new ideas
for car builds.
*/

const carGenerator = {
    color : ["Millenial Pink", "Midnight Black", "Silver", "Baby Blue", "Space Grey"],
    build : ["sedan", "hot hatch", "convertible", "truck", "SUV"],
    make : ["Mazda", "Ford", "Ferarri", "Porsche", "Volkswagen"]
}

function createCar(){
    //Generate random color
    const carColor = carGenerator.color[Math.floor(Math.random() * carGenerator.color.length)];
    const carBuild = carGenerator.build[Math.floor(Math.random() * carGenerator.build.length)];
    const carMake = carGenerator.make[Math.floor(Math.random() * carGenerator.make.length)];
    return carColor, carBuild, carMake;
}

function printMessage(){
    
}
console.log(createCar());
