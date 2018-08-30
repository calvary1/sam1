enterprise
workers =[
    {name"paul", alive: true, salary:500},
    {name: "rob, alive: false, salary:3000"},
    {name: anton, alive: false, salary :5000},
    {name "steven , alive : true, salary: 2000},
]

function sendCards (workers){
    console.log ("send a card to every dead workers family")

    for (var index =0; index<workers.length; index++ ){
        var element =workers [i];

        for (var i=0; i<workers.length; i++){
            var worker = workers [i];
            console.log ("sending card to the beloved family of",worker.name)
        }                                                                                                                                                        )
    }
}

//totale loonkost per maan                                                                                                                                                                                                                                                             
)






workers = [
    { name: "paul", alive: true, salary: 5000 },
    { name: "rob", alive: false, salary: 3000 },
    { name: "anton", alive: false, salary: 5000 },
    { name: "steven", alive: true, salary: 2000 },
    { name: "tom", alive: true, salary: 10000 },
   ]
   
   // send a card to every dead workers family
   function sendCards(workers) {
    for (var i = 0; i < workers.length; i++) {
      var worker = workers[i];
      if (worker.alive == false) {
        console.log("sending card to the beloved family of", worker.name)
      }
    }
   }
   
   // totale loonkost per maand
   function loonkost(workers) {
    var total = 0
    for (var i = 0; i < workers.length; i++) {
      var worker = workers[i];
      if (worker.alive) {
        total = total + worker.salary
      }
    }
    return total
   }
   
   function gemiddelde(workers) {
    return 4000
   }
   
   sendCards(workers)
   console.log(loonkost(workers))
   
   //gemiddelde loon van alle overleden werknemers
   function gemiddelde (workers){
       var total =0
       var aantaldoden =0
       for (var i=0; i<workers.length; i++){

       }
   }
   

   workers = [
    { name: "paul", alive: true, salary: 5000 },
    { name: "rob", alive: false, salary: 3000 },
    { name: "anton", alive: false, salary: 5000 },
    { name: "steven", alive: true, salary: 2000 },
    { name: "tom", alive: true, salary: 10000 },
   ]
   
   // send a card to every dead workers family
   function sendCards(workers) {
    for (var i = 0; i < workers.length; i++) {
      var worker = workers[i];
      if (worker.alive == false) {
        console.log("sending card to the beloved family of", worker.name)
      }
    }
   }
   
   // totale loonkost per maand
   function loonkost(workers) {
    var total = 0
    for (var i = 0; i < workers.length; i++) {
      var worker = workers[i];
      if (worker.alive) {
        total = total + worker.salary
      }
    }
    return total
   }
   
   function gemiddelde(workers) {
    return 4000
   }
   
   sendCards(workers)
   console.log(loonkost(workers))
   
   
   Olmo2:35 PM
   function isSorted(input) {
    return true
   }
   
   console.log(isSorted([0, 0, 5, 6]))
   console.log(isSorted([5, 2, 5, 6]))
   
   