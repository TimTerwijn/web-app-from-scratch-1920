import {Renderer} from "./modules/Renderer.js";
import {MyLocalStorage} from "./modules/MyLocalStorage.js";
import {Api} from "./modules/Api.js";

class App { 
    monsters;//MonsterMap class //todo: kan dit weg?
    
    constructor(){
        //vars
        this.renderer = new Renderer(this);
        this.myLocalStorage = new MyLocalStorage();
        this.api = new Api(this);
        
        //init
        this.init();
    }

    init(){        
        //show loading screen
        this.renderer.renderLoadingScreen();

        //check if there is data in the local storage    
        if(this.myLocalStorage.hasMonsters()){
            //load data from local storage
            this.monsters = this.myLocalStorage.get();
        }else{
            //get data from api
            this.api.get();
        }
    }

    searchMonster(monsterName){
        if(!this.hasMonsters){
            this.monsters = this.myLocalStorage.get();
        }


        monsterName = this.capitalizeString(monsterName);
        const monster = this.monsters.get(monsterName)
        
        console.log(monster)
    }

    setMonsters(monsters){//monsterMap object
        this.monsters = monsters;
    }

    hasMonsters(){
        this.monsters.length !== null;
    }

    //inspired by https://joshtronic.com/2016/02/14/how-to-capitalize-the-first-letter-in-a-string-in-javascript/
    capitalizeString(string){
        return string.charAt(0).toUpperCase() + string.substring(1);
    }
}

new App();