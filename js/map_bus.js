  // create map and set initial view
  var mymap = L.map('mapid').setView([43.238949, 76.889709], 13);

  // add tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors'
  }).addTo(mymap);

  // add marker to map
  var firstMarker = L.marker([43.26702, 76.818423]).addTo(mymap);
  var secondMarker = L.marker([43.211537, 76.851538]).addTo(mymap);

  
  var stops = [
    {lat: 43.26702, lng: 76.818423},//1 alatau city
    {lat: 43.262184, lng: 76.819966},//2 almaty arena
    {lat:43.256058, lng:76.822199},//2-1 ryskulova
    {lat: 43.251783, lng: 76.82406},//3 akbulak 
    {lat:43.241564,lng:76.828291},// tashkentski
    {lat: 43.23842, lng: 76.829843},//4 tolebi
    {lat:43.233237,lng:76.832131},// margulana
    {lat:43.228149,lng:76.834264},// aksai 5
    {lat: 43.223979, lng: 76.83612},//5 ulugbek
    {lat:43.219048,lng:76.838257},// jetisu mkr
    {lat:43.213728, lng: 76.840819},// mamyr 4
    {lat: 43.209425, lng: 76.842608},//7 shaliapin momysh
    {lat: 43.211537, lng: 76.851538},//8 mamyr 2
    
];
// create a polyline that follows the stops along the route
var route = L.polyline([firstMarker.getLatLng()]);

stops.forEach(function(stop) {
    route.addLatLng([stop.lat, stop.lng]);
});
stops.forEach(function(stop) {
    L.circleMarker([stop.lat, stop.lng],{ radius: 6, color: 'blue', fillColor: '#3388ff', fillOpacity: 1 }).addTo(mymap);
});

route.addLatLng(secondMarker.getLatLng());
route.addTo(mymap);

//  add bus

// add bus icon to map
var busIcon = L.icon({
    // iconUrl: 'https://cdn.pixabay.com/photo/2012/04/26/19/43/bus-42986_960_720.png',
    iconUrl:'img/bus.png',
    iconSize: [30, 30],
    iconAnchor: [19, 19]
});

// var busMarker = L.marker(firstMarker.getLatLng(), {
//     icon: busIcon
// }).addTo(mymap);




var routeCoords = [
    {lat: 43.26702, lng: 76.818423},//*1
    {lat: 43.266937, lng: 76.818493},
    {lat: 43.266237, lng: 76.818523},
    {lat: 43.264253, lng: 76.818829},
    {lat: 43.263253, lng: 76.819229},
    {lat: 43.262184, lng: 76.819966},//*2
    {lat:43.260238, lng:76.820473},
    {lat:43.258525, lng:76.821198},
    {lat:43.257426, lng:76.821602},
    {lat:43.256058, lng:76.822199},//
    {lat:43.254619, lng:76.822711},
    {lat:43.253688, lng:76.823179},
    {lat: 43.252783, lng: 76.82406},
    {lat: 43.251783, lng: 76.82406},//*3
    {lat:43.249462, lng:76.824936},
    {lat:43.247382,lng:76.826079},
    {lat:43.245212,lng:76.827123},
    {lat:43.243616,lng:76.827621},
    {lat:43.241564,lng:76.828291},//tash
    {lat:43.240217,lng:76.829051},
    {lat:43.239433,lng:76.829268},
    {lat:43.23842, lng: 76.829843},//*4 tole bi
    {lat:43.237888,lng:76.83005},
    {lat:43.23655,lng:76.830568},
    {lat:43.23481,lng:76.831449},
    {lat:43.233237,lng:76.832131},//margul
    {lat:43.231021,lng:76.833154},
    {lat:43.23002,lng:76.833523},
    {lat:43.229081,lng:76.833952},
    {lat:43.228149,lng:76.834264},//aks5
    {lat:43.227155,lng:76.834861},
    {lat:43.225374,lng:76.8356},
    {lat: 43.223979, lng: 76.83612},//*5 ulugbek
    {lat:43.222985,lng:76.836611},
    {lat:43.221628,lng:76.837088},
    {lat:43.220489,lng:76.837628},
    {lat:43.219048,lng:76.838257},//jetisu mkr
    {lat:43.217818,lng:76.83874},
    {lat:43.216865,lng:76.839223},
    {lat:43.215995,lng:76.839621},
    {lat:43.214377,lng:76.84032},
    {lat:43.213728, lng: 76.840819},//mamyr4
    {lat:43.213279,lng:76.840917},
    {lat:43.212855,lng:76.841024},
    {lat:43.211633,lng:76.841482},
    {lat:43.210971, lng:76.84188},
    {lat:43.210369, lng: 76.842035},
    {lat: 43.209425, lng: 76.842608},//*7
    {lat:43.209669, lng:76.843525},
    {lat:43.210049, lng:76.845261},
    {lat:43.210434, lng:76.846651},
    {lat:43.210841, lng:76.848431},
    {lat:43.211214, lng:76.850023},
    {lat:43.211537, lng: 76.851538}//*8

];
var index = 0, signal=0;
var marker = L.marker(routeCoords[index], { icon: busIcon }).addTo(mymap);

const btn_st=document.getElementById('start_btn')
const busDots = document.querySelectorAll('.bus-dot');
let currentBusStopIndex = 0;  

function moveBus() {
marker.setLatLng(routeCoords[index]);
index++;

if(index==7 || index==11 || index==16 || index==21 || index==24 || index==28 || index==32 || index==35 || index==39 || index==45 || index==51 || index==54){
    busDots[currentBusStopIndex].classList.remove('active');
    currentBusStopIndex++;
    busDots[currentBusStopIndex].classList.add('active');
    busDots[currentBusStopIndex].classList.add('active2');
  } 
  if(index==54){
    clearInterval(setI);
  }
  console.log("index:", index)
}
var setI = setInterval(moveBus, 1500);

// if(index==7){
//     busDots[currentBusStopIndex].classList.remove('active');
//     currentBusStopIndex++;
//     busDots[currentBusStopIndex].classList.add('active');
//     busDots[currentBusStopIndex].classList.add('active2');
//   } else if(index==11){
//     // signal++; 
//     // alert("ryskulova")
//     busDots[currentBusStopIndex].classList.remove('active');
//     currentBusStopIndex++;
//     busDots[currentBusStopIndex].classList.add('active');
//     busDots[currentBusStopIndex].classList.add('active2');
//     // console.log("signal2:"+ signal)
//   }
//   else if(index==16){
//     // signal++; 
//     alert("akbulak")
//     busDots[currentBusStopIndex].classList.remove('active');
//     currentBusStopIndex++;
//     busDots[currentBusStopIndex].classList.add('active');
//     busDots[currentBusStopIndex].classList.add('active2');
//     // console.log("signal2:"+ signal)
//   }  else if(index==21){
//     // signal++; 
//     alert("tashkentski")
//     busDots[currentBusStopIndex].classList.remove('active');
//     currentBusStopIndex++;
//     busDots[currentBusStopIndex].classList.add('active');
//     busDots[currentBusStopIndex].classList.add('active2');
//     // console.log("signal2:"+ signal)
//   }
//   else if(index==24){
//     // signal++; 
//     alert("tolebi")
//     busDots[currentBusStopIndex].classList.remove('active');
//     currentBusStopIndex++;
//     busDots[currentBusStopIndex].classList.add('active');
//     busDots[currentBusStopIndex].classList.add('active2');
//     // console.log("signal2:"+ signal)
//   }
//   else if(index==28){
//     // signal++; 
//     alert("margulana")
//     busDots[currentBusStopIndex].classList.remove('active');
//     currentBusStopIndex++;
//     busDots[currentBusStopIndex].classList.add('active');
//     busDots[currentBusStopIndex].classList.add('active2');
//     // console.log("signal2:"+ signal)
//   }  else if(index==32){
//     // signal++; 
//     alert("aksai 5")
//     busDots[currentBusStopIndex].classList.remove('active');
//     currentBusStopIndex++;
//     busDots[currentBusStopIndex].classList.add('active');
//     busDots[currentBusStopIndex].classList.add('active2');
//     // console.log("signal2:"+ signal)
//   }else if(index==35){
//     // signal++; 
//     alert("ulugbek")
//     busDots[currentBusStopIndex].classList.remove('active');
//     currentBusStopIndex++;
//     busDots[currentBusStopIndex].classList.add('active');
//     busDots[currentBusStopIndex].classList.add('active2');
//     // console.log("signal2:"+ signal)
//   }
//   else if(index==39){
//     // signal++; 
//     alert("jetisu")
//     busDots[currentBusStopIndex].classList.remove('active');
//     currentBusStopIndex++;
//     busDots[currentBusStopIndex].classList.add('active');
//     busDots[currentBusStopIndex].classList.add('active2');
//     // console.log("signal2:"+ signal)
//   } else if(index==45){
//     // signal++; 
//     alert("mamyr 4")
//     busDots[currentBusStopIndex].classList.remove('active');
//     currentBusStopIndex++;
//     busDots[currentBusStopIndex].classList.add('active');
//     busDots[currentBusStopIndex].classList.add('active2');
//     // console.log("signal2:"+ signal)
//   }
  
//   else if(index==51){
//     // signal++; 
//     alert("shaliapin")
//     busDots[currentBusStopIndex].classList.remove('active');
//     currentBusStopIndex++;
//     busDots[currentBusStopIndex].classList.add('active');
//     busDots[currentBusStopIndex].classList.add('active2');
//     // console.log("signal2:"+ signal)
//   }else if(index==54){
//     // signal++; 
//     alert("mamyr 2")
//     busDots[currentBusStopIndex].classList.remove('active');
//     currentBusStopIndex++;
//     busDots[currentBusStopIndex].classList.add('active');
//     busDots[currentBusStopIndex].classList.add('active2');
//     // console.log("signal2:"+ signal)
//   }


// if (index == routeCoords.length) {
//     // index = 0;
//     // const sleep = ms => new Promise(r => setTimeout(r, 5000));
//     // function sleep(ms) {
//     //     return new Promise(resolve => setTimeout(resolve, ms));
//     // }
//     // sleep(5000); 
//     // await new Promise(r => setTimeout(r, 2000));
//     Function.prototype.sleep = function(delay, ...args) {
//         setTimeout(() => this(...args), delay)
//     }
    
//     console.log.sleep(5000, 'Hello, World!!')
//     index=0
// }
