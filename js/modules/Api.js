import {MonsterMap} from "./MonsterMap.js";

export class Api {

    constructor(app){
        this.app = app
        this.myLocalStorage = app.myLocalStorage;
        this.renderer = app.renderer;
    }

    //get monster json from api
    get(){
        const apiUrl = "https://www.osrsbox.com/osrsbox-db/monsters-complete.json";
        const api = this;

        //inspired by https://stackoverflow.com/a/35970894
        api._getJSON(apiUrl, function(err, json) {
            if (err !== null) {
                api.app.renderError();
            } else {//succes
                api._onSucces(json);
            }
        });
    }  
    
    //do things with the json
    _onSucces(json){
        //filter data
        const monsters = new MonsterMap(json)

        //save monsters to local storage
        this.myLocalStorage.add(monsters);

        //save monsters to be able to search
        this.app.setMonsters(monsters)

        //get data from api
        this.renderer.renderApp();
    }

    
    //inspired by https://stackoverflow.com/a/35970894
    //get data from API
    _getJSON(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
          const status = xhr.status;
          if (status === 200) {
            callback(null, xhr.response);
          } else {
            callback(status, xhr.response);
          }
        };
        xhr.send();
    }
}