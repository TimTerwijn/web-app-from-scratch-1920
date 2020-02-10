import {MonsterMap} from "./MonsterMap.js";

export class Api {

    constructor(app){
        this.app = app
        this.myLocalStorage = app.myLocalStorage;
        this.renderer = app.renderer;
    }

    get(){
        var apiUrl = "https://www.osrsbox.com/osrsbox-db/monsters-complete.json";
        var api = this

        api._getJSON(apiUrl, function(err, json) {
            if (err !== null) {
                api.app.renderError();
            } else {//succes
                api._onSucces(json);
            }
        });
    }  
    
    _onSucces(json){
        //filter data
        var monsters = new MonsterMap(json)

        //save monsters to local storage
        this.myLocalStorage.add(monsters);

        //save monsters to be able to search
        this.app.setMonsters(monsters)

        //show user api call is done
        this.renderer.renderApp();
    }

    _getJSON(url, callback) {
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