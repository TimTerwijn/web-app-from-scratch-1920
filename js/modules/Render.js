export class Render{
    constructor(ui){
        this.ui = ui
        this.loadingScreen()
    }

    _hideAll(){
        this._hide(this.ui.loadingScreen);
        this._hide(this.ui.overview);
        this._hide(this.ui.detailPage);
    }

    //first screen you see after opening the app
    loadingScreen(){//todo: better loading screen
        this._hideAll();
        this._toggleVisibility(this.ui.loadingScreen);

        //inspired by Max
        this.ui.loadingScreen.innerText = "Loading, please wait...";
    }

    //after api has loaded show this screen
    overview(){
        this._hideAll();
        this._toggleVisibility(this.ui.overview);
    }

    //after you clicked a monster show this screen
    details(){
        this._hideAll();
        this._toggleVisibility(this.ui.detailPage);
    }

    result(result){
        //inspired by Max
        this.ui.result.innerText = result;
    }

    stats(monster){
        Transparency.render(this.ui.monsterGrid, monster);
    }

    //PRIVATE METHODS

    _toggleVisibility(element){
        element.classList.toggle("hidden");
    }

    _hide(element){
        element.className = "hidden";
    }
}