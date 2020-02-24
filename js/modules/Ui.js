import {Word} from "./Word.js"

export class Ui{
    constructor(render, myLocalStorage){
        this.render = render;
        this.myLocalStorage = myLocalStorage;
        this.setComponents();
    }

    //set all components
    setComponents(){
        this._loadingScreen = document.getElementById("loading_screen");
        this._overview = document.getElementById("overview");
        this._detailPage = document.getElementById("detail_page");

        this._monsterName = document.getElementById("monster_name");
        this._submitButton = document.getElementById("submit");
        this._result = document.getElementById("result");

        this._monsterGrid = document.getElementById("monster_grid");
        this._gridCombatStats = document.getElementById("grid_combat_stats");
        this._gridAggressiveStats = document.getElementById("grid_aggressive_stats");
        this._gridDefensiveStats = document.getElementById("grid_defensive_stats");

        const ui = this;
        this._submitButton.onclick = function(){
            ui._findMonster(ui._monsterName.value);
        };

        this._monsterName.onkeyup = function(){
            ui._findMonster(ui._monsterName.value);
        };

        this._result.onclick = function(){
            ui._onMonsterClick();
        };
    }


    //Private Methods

    //when a user presses a monster
    _onMonsterClick(){
        //get clicked monster
        const monsterName = this._result.innerText;

        const monsters = this.myLocalStorage.get();
        
        //search monster in localstorage
        const monster = monsters.get(monsterName);

        //fill details page
        Transparency.render(this._monsterGrid, monster);

        //switch to details page
        routie('details');
    }

    //search button has been clicked or input field key released
    _findMonster(monsterName){        
        //check if local storage has monsters
        if(!this.myLocalStorage.hasMonsters()){
            
        }

        const monsters = this.myLocalStorage.get();
        
        //search monster in map
        monsterName = Word.cap(monsterName);
        const monster = monsters.get(monsterName);

        //check if a monster has been found
        if(monster !== undefined){
            //render result        
            this.render.searchResult(monster)
        }else{
            //render error
           this.render.error("No monster found, please try again")
        }        
    }

    toggleVisibility(element){
        element.classList.toggle("hidden");
    }

    hide(element){
        element.className = "hidden";
    }

    insertText(element, string){
        element.innerHTML = string;
    }
}