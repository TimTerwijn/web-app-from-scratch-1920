"use strict"

var app = {
    loadData : function (){
        //define variables
        var monsters;

        //check if there is data in the local storage    
        if(app.localStorageHasData()){
            //load data from local storage
            monsters = app.getDataFromLocalStorage();
        }else{
            //get data from api
            var data = app.getDataFromApi();
        }

        return monsters
    },

    localStorageHasData : function(){
        return false; //todo
    },

    getDataFromLocalStorage : function(){
        return "data" //todo
    },

    getDataFromApi : function(){
        var apiUrl = "https://www.osrsbox.com/osrsbox-db/monsters-complete.json";
        
        app.getJSON(apiUrl, function(err, data) {
            if (err !== null) {
                alert('Something went wrong: ' + err);
            } else {
                app.useData(data[1].name);
            }
        });
    },    

    getJSON : function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
          var status = xhr.status;
          if (status === 200) {
            callback(null, xhr.response);
          } else {
            callback(status, xhr.response);
          }
        };
        xhr.send();
    },

    useData : function(data){
        //filter data
        var monsters = app.filterData(data);

        //show monsters
        app.showMonsters(monsters);

        //save monsters to local storage
        app.saveMonstersToLocalStorage(monsters);
    },

    showMonsters : function(monsters){
        console.log(monsters)
        document.getElementById("screen").innerHTML = monsters;
    },

    saveMonstersToLocalStorage : function(monsters){
        //todo
    },

    filterData : function (data){
        //make array of monsters, each monster must have his name as a primary key to find it in the array.
        //also the monster class uses only the nesecairy data to increase speed.

        var monsters = data; //todo
        return monsters;
    },
}