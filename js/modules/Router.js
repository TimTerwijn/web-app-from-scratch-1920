export class Router{
    constructor(render){
        this.render = render;
    }

    loadingScreen(){
        this.render.loadingScreen();
    }

    overview(){
        this.render.overview();
    }

    details(){
        this.render.details();
    }    
}