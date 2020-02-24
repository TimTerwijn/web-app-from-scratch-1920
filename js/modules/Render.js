import {Ui} from "./Ui.js";

export class Render{
    constructor(myLocalStorage){
        this.ui = new Ui(this, myLocalStorage);

        this.setComponents();
    }

    //set all components
    setComponents(){
        this._loadingScreen = document.getElementById("loading_screen");
        this._overview = document.getElementById("overview");
        this._detailPage = document.getElementById("detail_page");

        this._result = document.getElementById("result");
    }

    //first screen you see after opening the app
    loadingScreen(){//todo: better loading screen
        this.ui.insertText(this._loadingScreen, "Loading, please wait...");
    }

    //after api has loaded show this screen
    overview(){
        this.ui.hide(this._loadingScreen);
        this.ui.toggleVisibility(this._overview);
    }

    //after you clicked a monster show this screen
    details(){
        this.ui.toggleVisibility(this._overview);
        this.ui.toggleVisibility(this._detailPage);
    }

    //after searching a monster show this screen
    searchResult(monster){
        this.ui.insertText(this._result, monster.name);
    }

    //if an error has occured show this
    error(message){
        this.ui.insertText(this._result, message);
    }
}