import ICircle from "../models/shapes/circle";
import ISquare from "../models/shapes/square";

export class CanvasView{

    private shapesForm: HTMLElement;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private shape: HTMLElement;
    private color: HTMLElement;


    constructor(private view: Document){

        this.initCaching();
        this.init();

    }

    private initCaching(){
        this.getShapeInput();
        this.getCanvas();
        this.getColorInput();
        
        console.log(this.canvas)
    }

    init():void{

        this.draw();
       this.formValue();
        
          
    }

 

    private getShapeInput=()=>{
        this.shapesForm = this.view.getElementById('menu1');
    } 

    private getCanvas=()=>{
        this.canvas = this.view.getElementById('mycanvas') as HTMLCanvasElement;
    }


    private getContext=()=>{
        
        this.context = this.canvas.getContext('2d');
    }

    private getColorInput=()=>{

        this.color = this.view.getElementById('input-color');
    }

    /*private getColorValue=()=>{
        this.inputName = this.view.getElementById("name") as HTMLInputElement;
    }*/

     draw() {

        this.canvas.addEventListener('click', (event)=> {
            const coordinates = this.getLocalClickCoords(event, this.canvas)
            const parameters={
                axisX: coordinates.x,
                axisY: coordinates.y,
                height: 100,
                width: 100
            }
            this.drawSquare(parameters)

        });
    }

    getValue(){
        this.shape, this.color
    }

    formValue(){
        this.shapesForm.addEventListener('click', 
        e => console.log((e.target as HTMLInputElement).value))
    }

     getLocalClickCoords = (event, parent) =>{
        return {
            
            x: event.clientX - parent.offsetLeft,
            y: event.clientY - parent.offsetLeft,
        }
    }
    

    

    drawSquare = (parameters: ISquare) => {

       
        const { axisX, axisY, height, width } = parameters
        
        
        this.context.fillRect(axisX, axisY, height, width)

    }

    drawCircle = (parameters: ICircle) => {

        const {  axisX, axisY, size } = parameters


        this.context.beginPath();
        this.context.arc(axisX, axisY, size, 0, 2 * Math.PI);
        this.context.stroke();
    }

    


}