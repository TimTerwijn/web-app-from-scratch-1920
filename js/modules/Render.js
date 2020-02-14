export class Render{
    constructor(app){
        this.app = app;
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

        const render = this;
        this._submitButton.onclick = function(){
            render.app.onSearchMonster(render._monsterName.value);
        };

        this._monsterName.onkeyup = function(){
            render.app.onSearchMonster(render._monsterName.value);
        };

        this._result.onclick = function(){
            render._onMonsterClick();
        };
    }

    //first screen you see after opening the app
    loadingScreen(){//todo: better loading screen
        this._insertText(this._loadingScreen, "Loading, please wait...");
    }

    //after api has loaded show this screen
    overview(){
        this. _hide(this._loadingScreen);
        this._toggleVisibility(this._overview);
    }

    //after you clicked a monster show this screen
    details(){
        this._toggleVisibility(this._overview);
        this._toggleVisibility(this._detailPage);
    }

    //after searching a monster show this screen
    searchResult(monster){
        this._insertText(this._result, monster.getName());
    }

    //if an error has occured show this
    error(message){
        this._insertText(this._result, message);
    }


    //Private Methods

    //when a user presses a monster
    _onMonsterClick(){
        //get clicked monster
        const name = this._result.innerText;

        //find monster
        const monster = this.app.monsters.get(name);

        //get monster stats
        const stats = monster.printStats();

        //fill details page
        Transparency.render(this._monsterGrid, stats);

        //switch to details page
        routie('details');
    }

    _toggleVisibility(element){
        element.classList.toggle("hidden");
    }

    _hide(element){
        element.className = "hidden";
    }

    _insertText(element, string){
        element.innerHTML = string;
    }
}