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

        const render = this;
        this._submitButton.onclick = function(){
            render.app.onSearchMonster(render._monsterName.value);
        };

        this._monsterName.onkeyup = function(){
            render.app.onSearchMonster(render._monsterName.value);
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