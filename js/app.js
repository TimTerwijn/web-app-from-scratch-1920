import {Renderer} from "./modules/Renderer.js";
import {MyLocalStorage} from "./modules/MyLocalStorage.js";
import {Api} from "./modules/Api.js";

class App { 
    monsters;//type of MonsterMap class //todo: kan dit weg?
    
    constructor(){
        //vars
        this.renderer = new Renderer(this);
        this.myLocalStorage = new MyLocalStorage();
        this.api = new Api(this);
        
        //init
        this.init();
    }

    //after page load
    init(){        
        //show loading screen
        this.renderer.renderLoadingScreen();

        //check if there is data in the local storage    
        if(this.myLocalStorage.hasMonsters()){
            //load data from local storage
            this.monsters = this.myLocalStorage.get();
            
            //show app to the user
            this.renderer.renderApp();
        }else{
            //get data from api
            this.api.get();

            //todo: use promise
        }
    }

    //search button has been clicked
    onSearchMonster(monsterName){
        if(!this.hasMonsters){
            this.monsters = this.myLocalStorage.get();
        }

        monsterName = this.capitalizeString(monsterName);
        const monster = this.monsters.get(monsterName);
        
        this.renderer.renderResult(monster)
    }

    //set monsters you use to search monsters
    setMonsters(monsters){//monsterMap object
        this.monsters = monsters;
    }

    //check if monsters is not empty 
    hasMonsters(){
        return this.monsters !== undefined;
    }

    //inspired by https://joshtronic.com/2016/02/14/how-to-capitalize-the-first-letter-in-a-string-in-javascript/
    //capatalize first letter of a string
    capitalizeString(string){
        return string.charAt(0).toUpperCase() + string.substring(1);
    }
}

new App();