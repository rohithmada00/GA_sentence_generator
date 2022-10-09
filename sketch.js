let target;
let popmax;
let mutationRate;
let population;
let bestPhrase;
let allPhrases;
let stats;


function setup()
{
    bestPhrase=createP("Best phrase:");
    bestPhrase.class("best");
    allPhrases=createP("All phrases:");
    allPhrases.class("all");
    stats=createP("Stats");
    stats.class('stats');

    target="Implementing Genetic Algorithm";
    popmax=200;
    mutationRate=0.01;
    population=new Population(target,mutationRate,popmax);
}

function draw(){
    population.naturalSelection();
    population.generate();
    population.calcFitness();
    population.evaluate();

    if (population.isFinished()){
        noLoop();
    }
    displayInfo();
}
function displayInfo() {
    // Display current status of population
    let answer = population.getBest();
  
    bestPhrase.html("Target sentence:<br>" + answer);
  
    let statstext =
      "total generations:     " + population.getGenerations() + "<br>";
    statstext +=
      "average fitness:       " + nf(population.getAverageFitness()) + "<br>";
    statstext += "total population:      " + popmax + "<br>";
    statstext += "mutation rate:         " + floor(mutationRate * 100) + "%";
  
    stats.html(statstext);
  
    allPhrases.html("All sentences:<br>" + population.allPhrases());
  }