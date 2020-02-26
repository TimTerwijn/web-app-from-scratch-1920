import {MyLocalStorage} from "./modules/MyLocalStorage.js";
import {Api} from "./modules/Api.js";
import {Ui} from "./modules/Ui.js";
import {Router} from "./modules/Router.js";
import {MonsterMap} from "./modules/MonsterMap.js";
import {Routie} from "./libraries/Routie.js";

class App { 
    constructor(){
        this.ui = new Ui(this);

        //vars
        this.myLocalStorage = new MyLocalStorage();
        this.api = new Api(this);

        //set router and show loading screen
        new Router(this.ui.render);
        
        //init
        this.init();
    }

    //after page load
    init(){        
        //first time a user visits this page,
        //load data from api   
        if(!this.myLocalStorage.hasMonsters()){
            //get data from api
            const promise = this.api.get();
            
            //do things with the json
            promise.then((json) => {
                //filter data
                const monsters = MonsterMap.fromAPI(json);

                //save monsters to local storage
                this.myLocalStorage.add(monsters.toJSON());

                //switch to detail page
                routie('overview');
            });
        //normal page view from a regular user
        //load data from local storage  
        }else{
            routie('overview');
        }
    }

    //after a user types, or presses search
    onMonsterSearch(monsterName){        
        //check if local storage has monsters
        if(!this.myLocalStorage.hasMonsters()){
            init();
        }

        //get monsters
        const monsters = this.myLocalStorage.get();
        
        //search monster in map
        const monster = monsters.get(monsterName);

        //check if a monster has been found
        if(monster !== undefined){
            //render result        
            this.ui.render.result(monster.name)
        }else{
            //render error
           this.ui.render.result("No monster found, please try again")
        }        
    }

    //after a user presses a monster
    onMonsterClick(monsterName){

        //get monsters
        const monsters = this.myLocalStorage.get();
        
        //search monster in map
        const monster = monsters.get(monsterName);

        //fill details page
        this.ui.render.stats(monster);

        //switch to details page
        routie('details');
    }
}

new App();