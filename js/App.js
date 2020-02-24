import {MyLocalStorage} from "./modules/MyLocalStorage.js";
import {Api} from "./modules/Api.js";
import {Router} from "./modules/Router.js";
import {MonsterMap} from "./modules/MonsterMap.js";
import {Routie} from "./modules/Routie.js";
import {Render} from "./modules/Render.js";

class App { 
    constructor(){
        //vars
        this.myLocalStorage = new MyLocalStorage();
        this.api = new Api(this);

        this.render = new Render(this.myLocalStorage);
        this.router = new Router(this.render);
        
        //init
        this.init();
    }

    //after page load
    init(){        
        //get api data if there is no data in the local storage    
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
        }else{
            routie('overview');
        }
    }
}

new App();