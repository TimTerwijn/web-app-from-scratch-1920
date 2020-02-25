export class Render{
    constructor(ui){
        this.ui = ui
    }

    //first screen you see after opening the app
    loadingScreen(){//todo: better loading screen
        this._insertText(this.ui.loadingScreen, "Loading, please wait...");
    }

    //after api has loaded show this screen
    overview(){
        this._hide(this.ui.loadingScreen);
        this._toggleVisibility(this.ui.overview);
    }

    //after you clicked a monster show this screen
    details(){
        this._toggleVisibility(this.ui.overview);
        this._toggleVisibility(this.ui.detailPage);
    }

    result(string){
        this._insertText(this.ui.result, string);
    }

    //PRIVATE METHODS

    _toggleVisibility(element){
        element.classList.toggle("hidden");
    }

    _hide(element){
        element.className = "hidden";
    }

    _insertText(element, string){
        element.innerHTML = string;
        //todo: innerHTML is bad
    }
}