import {Render} from "./Render.js";
import {Routie} from "./Routie.js";

export class Router{
    constructor(render){
        this.render = render;
        
        routie({

            //default page, also loadscreen
            "":() => {
                this.loadingScreen();
            },
            //overview page
            overview:() => {
                this.overview();
            },
            //monster page
            details: () => {
                this.details();
            }
        });
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



