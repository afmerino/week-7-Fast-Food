console.log("Can I take Your order")
window.onload = function(){


    var input = document.querySelector("input");
    var button = document.querySelector("button");

    button.addEventListener ("click", function(addorder){

        var menu = {
            'fries': 10,
            'shakes': 8,
            "juice": 20,
            "tots": 40,
            "burger": 5
        };
        
        var yourOrder = input.value;   
        yourOrder  = yourOrder.split(",");   
        for(var i = 0; i < yourOrder.length; i++){ 
            var newOrder = yourOrder[i].split(":")
            //console.log(newOrder[1].trim());
            newOrder[1]= newOrder[1].trim(); 
            
            var count = Number(newOrder[1]);
            for (var property in menu) {
                //console.log(newOrder[1], newOrder[0], property, menu[property]);
                if(newOrder[1] == property) {
                    if (newOrder[0] <= menu[property]) {
                        console.log("order recevived",newOrder, property)
                        menu[property] = menu[property] - newOrder[0];
                        console.log("We have" + " " + menu[property] + " " + "of these items left");
               
                    } else {
                        console.log("We are out");
                    } 
                } else { 
                    console.log("we do not sell product or product doesnt match what product its being tested for");
                }
            };
        };
    });

};
function loadDoc() {
    var newRequest = new XMLHttpRequest();
    newRequest.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       
      }
    };
    newRequest.open("GET", url = "https://swapi.co/documentation#root", true);
    newRequest.send();
  }
  loadDoc();