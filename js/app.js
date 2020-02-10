import {Renderer} from "./modules/Renderer.js";
import {MyLocalStorage} from "./modules/MyLocalStorage.js";
import {Api} from "./modules/Api.js";

class App { 
    monsters;//todo: kan dit weg?
    
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
            monsters = this.myLocalStorage.get();
        }else{
            //get data from api
            this.api.get();
        }
        
    }

    searchMonster(monsterName){
        alert(monsterName)
    }

    setMonsters(monsters){//monsterMap object
        this.monsters = monsters;
    }

    hasMonsters(){
        this.monsters.length !== null;
    }
}

new App();