//const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

//const Location = mongoose.model('Location', {name: String,details:String,picture:String });
var a=document.createElement("a")
a.href="locationPage.html"
var ul=document.getElementById("sites_list")
function createList(locationsArr){
    for (let i=0;i<locationsArr.length;i++){
        let li=document.createElement("li")
        li.onclick="goToLocationPage(locationArr[i].name)"
        li.appendChild(a)
        ul.appendChild(li)
    }
}
function saveLocationName(name){
    localStorage.setItem('1',name)
}