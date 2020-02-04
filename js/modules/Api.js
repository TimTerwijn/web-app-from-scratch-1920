export class Api {

    constructor(app){
        this.app = app
        this.myLocalStorage = app.myLocalStorage;
    }

    getDataFromApi(){
        var apiUrl = "https://www.osrsbox.com/osrsbox-db/monsters-complete.json";
        var api = this;
        
        this.getJSON(apiUrl, function(err, data) {
            if (err !== null) {
                alert('Something went wrong: ' + err);
            } else {
                api.useData(data[1].name);
            }
        });
    }  
    
    useData(data){
        //filter data
        var monsters = this.filterData(data);

        //show monsters
        this.app.showMonsters(monsters);

        //save monsters to local storage
        this.myLocalStorage.saveMonsters(monsters);
    }

    filterData(data){
        //make array of monsters, each monster must have his name as a primary key to find it in the array.
        //also the monster class uses only the nesecairy data to increase speed.

        var monsters = data; //todo
        return monsters;
    }

    getJSON(url, callback) {
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
    }
}