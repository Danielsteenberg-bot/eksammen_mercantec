import kpiArray from "./kpiArray.js";
var data = kpiArray;
function loadTemplate(){
    var inputTemplate = data.map(value => `
    <div>
        <div class="content">
            <h2 class="content-txt">Date: ${value.date}</h2>
            <h2 class="content-txt">Orders: ${value.orders}</h2>
            <h2 class="content-txt">Precision: ${value.precision}</h2>
            <h2 class="content-txt">Accidents: ${value.accidents}</h2>
        </div> 
    </div>
    `
    );
    var inputContent = document.querySelector('.root_script');
    inputContent.insertAdjacentHTML('beforebegin', inputTemplate);
};
loadTemplate();
function removeTemplate() {
    var list = document.getElementById("rootremove");
    while (list.childNodes.length > 2) {
      list.removeChild(list.firstChild);
    }
};
var input = [];
for (let x = 0; x < 6; x++){
    input[x] = document.getElementById(`input${x}`);
    input[x].addEventListener("click", () => {
        if (x == 0 || x == 1){
            if (x == 0){
                data = data.sort((p1, p2) => (p1.orders - p2.orders));
                document.getElementById("headline-txt").innerHTML = "Orders Ascending";
                let ordersArray = data.map(({orders}) => orders);
                var median = 0;
                var medianIndex = 0;
                medianIndex = ordersArray.length / 2;
                if(ordersArray.length % 2 == 0){
                    median = `${((ordersArray[medianIndex]) + (ordersArray[medianIndex + 1])) / 2}`;
                }
                else {
                    median = `${ordersArray[medianIndex + 0.5]}`;
                }  
                document.getElementById("median-txt").innerHTML = `Median: ${median}`;      
            }
            if (x == 1){
                data = data.sort((p1, p2) => (p1.orders < p2.orders) ? 1 : (p1.orders > p2.orders) ? - 1 : 0);
                document.getElementById("headline-txt").innerHTML = "Orders Decending";
            }
            removeTemplate();
            loadTemplate();
            let ordersArray = data.map(({orders}) => orders);
            var sum = 0;
            var average = 0;
            for (var number of ordersArray) {
            sum += number;
            }
            average = sum / ordersArray.length;
            document.getElementById("average-txt").innerHTML = `Average: ${average}`;  
            document.getElementById("median-txt").innerHTML = `Median: ${median}`;      
        }
        if (x == 2 || x == 3){
            if (x == 2){
                data = data.sort((p1, p2) => (p1.precision > p2.precision) ? 1 : (p1.precision < p2.precision) ? - 1 : 0);
                document.getElementById("headline-txt").innerHTML = "Precision Ascending";
                let precisionArray = data.map(({precision}) => precision);
                var median = 0;
                var medianIndex = 0;
                medianIndex = precisionArray.length / 2;
                if(precisionArray.length % 2 == 0){
                    median = `${((precisionArray[medianIndex]) + (precisionArray[medianIndex + 1])) / 2}`;
                }
                else {
                    median = `${precisionArray[medianIndex + 0.5]}`;
                }   
                document.getElementById("median-txt").innerHTML = `Median: ${median}`;
            }
            if (x == 3){
                data = data.sort((p1, p2) => (p1.precision < p2.precision) ? 1 : (p1.precision > p2.precision) ? - 1 : 0);
                document.getElementById("headline-txt").innerHTML = "Precision Decending";
            }
            removeTemplate();
            loadTemplate();
            let precisionArray = data.map(({precision}) => precision)
            var sum = 0;
            var average = 0;
            for (var number of precisionArray) {
            sum += number;
            }
            average = sum / precisionArray.length;
            document.getElementById("average-txt").innerHTML = `Average: ${average}`;   
            document.getElementById("median-txt").innerHTML = `Median: ${median}`;               
        }
        if (x == 4 || x == 5){
            if (x == 4){
                data = data.sort((p1, p2) => (p1.accidents > p2.accidents) ? 1 : (p1.accidents < p2.accidents) ? - 1 : 0);
                document.getElementById("headline-txt").innerHTML = "Accidents Ascending";
                let accidentsArray = data.map(({accidents}) => accidents);
                var median = 0;
                var medianIndex = 0;
                medianIndex = accidentsArray.length / 2;
                if(accidentsArray.length % 2 == 0){
                    median = `${((accidentsArray[medianIndex]) + (accidentsArray[medianIndex + 1])) / 2}`;
                }
                else {
                    median = `${accidentsArray[medianIndex + 0.5]}`;
                }    
                document.getElementById("median-txt").innerHTML = `Median: ${median}`;   
            }
            if (x == 5){
                data = data.sort((p1, p2) => (p1.accidents < p2.accidents) ? 1 : (p1.accidents > p2.accidents) ? - 1 : 0);
                document.getElementById("headline-txt").innerHTML = "Accidents Decending";
            }
            removeTemplate();
            loadTemplate();
            let accidentsArray = data.map(({accidents}) => accidents)
            var sum = 0;
            var average = 0;
            for (var number of accidentsArray) {
            sum += number;
            }
            average = sum / accidentsArray.length;
            document.getElementById("average-txt").innerHTML = `Average: ${average}`; 
            document.getElementById("median-txt").innerHTML = `Median: ${median}`;              
        }
    });
}
