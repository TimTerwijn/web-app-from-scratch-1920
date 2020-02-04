import {MyLocalStorage} from "./modules/MyLocalStorage.js";
import {Api} from "./modules/Api.js";

class App { 
    
    myLocalStorage = new MyLocalStorage();
    api = new Api(this);

    loadData(){
        //define variable
        var monsters;

        //check if there is data in the local storage    
        if(this.myLocalStorage.hasData()){
            //load data from local storage
            monsters = this.myLocalStorage.getMonsters();
        }else{
            //get data from api
            monsters = this.api.getDataFromApi();
        }

        return monsters
    } 

    showMonsters(monsters){
        document.getElementById("screen").innerHTML = monsters.get("Typhor").getName();
    }
}

new App().loadData();