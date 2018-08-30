distribute.js
workers =[
    {name"paul", alive: true, salary:500},
    {name: "rob, alive: false, salary:3000"},
    {name: anton, alive: false, salary :5000},
    {name "steven , alive : true, salary: 2000},
]

function distribute(workers){
    //verdeel het salaris van de overleden werknemers
    //over de leven

    var totaal TeVerdelen = 0
    var totaal AantalLevenden =0

    for (var i=0; i < workers.length; i =i+1){
        var worker = workers[i]
        if (worker.alive) {
            totaal AantalLevenden = totaalAantalLeveden + 1
        }else{
            totaalTeVerdelen = totaalTeVerleden + worker.salary
        }
    }

    var aandeelperppersoon = totaalTeverdelen / totaalAantalLevvenden
    for(vari = 0; i < workers.length; i =i+1){
        var worker = workers [i]
        if (worker.alive)
    }
}