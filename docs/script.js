

function city(){
    var city=document.getElementById("tem").value;   
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" +city + "&units=imperial&appid=d23df87776c612a91a5d28398e4d232c",function(data){
console.log(data);
var icon="https://openweathermap.org/img/w/" + data.weather[0].icon +".png";
var temp=(data.main.temp);
var temp1=Math.floor(5*(temp-32)/9);
//var tempmin=Math.floor(5*(data.main.temp_min-32)/9);
//var tempmax=Math.floor(5*(data.main.temp_max-32)/9);
var humid=(data.main.humidity);
var weather=data.weather[0].main;

$('.tem').html(city);
$('.icon').attr('src',icon);
$('.weather').html(weather);
$('.temp').html("The temperature is "+temp1+"° C");
//$('.mintemp').html("The minimumtemp is "+tempmin+"° C");
//$('.maxtemp').html("The maximumtemp is "+tempmax+"° C");
$('.humid').html("Humidity is "+humid+"%");
$('.city').html(city);
});

}
function dt(){
    var d = new Date();

document.getElementById("date").innerHTML = d;
}
