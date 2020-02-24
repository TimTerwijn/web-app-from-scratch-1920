import {Render} from "./modules/Render.js";
import {MyLocalStorage} from "./modules/MyLocalStorage.js";
import {Api} from "./modules/Api.js";
import {Router} from "./modules/Router.js";
import {Routie} from "./modules/Routie.js";
import {MonsterMap} from "./modules/MonsterMap.js";


class App { 
    monsters;//type of MonsterMap class //todo: kan dit weg?
    
    constructor(){
        //vars
        this.render = new Render(this);
        this.myLocalStorage = new MyLocalStorage();
        this.api = new Api(this);
        this.router = new Router(this.render);
        
        //init
        this.init();
    }

    //after page load
    init(){        
        //check if there is data in the local storage    
        if(this.myLocalStorage.hasMonsters()){
            //load data from local storage
            this.monsters = this.myLocalStorage.get();
            
            //show app to the user
            this.render.renderApp();
        }else{
            //get data from api
            const promise = this.api.get();
            
            //do things with the json
            promise.then((json) => {
                //filter data
                const monsters = new MonsterMap(json);

                //save monsters to local storage
                this.myLocalStorage.add(monsters);

                //save monsters to be able to search
                this.setMonsters(monsters);

                //switch to detail page
                routie('overview');
            });
        }
    }

    //search button has been clicked
    onSearchMonster(monsterName){
        //check if monster map is filled
        if(!this.hasMonsters){
            this.monsters = this.myLocalStorage.get();
        }
        
        //search monster in map
        monsterName = this.capitalizeString(monsterName);
        const monster = this.monsters.get(monsterName);

        //check if a monster has been found
        if(monster !== undefined){
            //render result        
            this.render.searchResult(monster)
        }else{
            //render error
            this.render.error("No monster found, please try again")
        }        
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

const app = new App();

routie({//todo add to router.js
    //default page, also loadscreen
    "":() => {
        app.router.loadingScreen();
    },
    //overview page
    overview:() => {
        app.router.overview();
    },
    //monster page
    details: () => {
        app.router.details();
    }
});