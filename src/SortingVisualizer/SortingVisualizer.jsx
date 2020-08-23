import React from 'react';
import './Sorting.css'
import {getMergeSortAnimation} from '../SortingAlgo/Mergesort'
import {getBubbleSortAnimation} from '../SortingAlgo/BubbleSort'
import {getQuicksortanimation} from '../SortingAlgo/Quicksort'
import {partition} from '../SortingAlgo/Quicksort'
import {quicksort} from '../SortingAlgo/Quicksort'
import { Button } from '@material-ui/core';
import {valuetext} from './Slider'
const SECONDARY_COLOR = 'red'
const PRIMARY_COLOR = 'skyblue'
const ANIMATION_SPEED_MS = 2

console.log("V:",valuetext())
export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            array:[],
        }
    }
    componentDidMount(){ // this func will run when we reload our page
        this.resetArray()
    }

    resetArray(){
        const array = []    
        for(let i=0 ; i<200; i++){
            array.push(randomGenerator(5,400))
        }
        this.makeAllBarsBlue()
        this.setState({array})
    }
    
    mergeSort = () => {
    const animations = getMergeSortAnimation(this.state.array);
     for (let i = 0; i < animations.length; ++i) {
      const arrayBars = document.getElementsByClassName('array-bar');
      let isColorChange = 0
      if(i%3 !== 2) isColorChange = 1;
      
         
      if (isColorChange) {
        const [barOneIdx,barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          // if(i === animations.length-1) this.makeAllBarsGreen();
        }, i * ANIMATION_SPEED_MS);
      }
     else {
        setTimeout(() => {
          const [barOneIdx,newHeight] = animations[i];
          const barOneStylee = arrayBars[barOneIdx].style;
          barOneStylee.height = `${newHeight}px`;
          if(i === animations.length-1) this.makeAllBarsGreen();
        }, i * ANIMATION_SPEED_MS);
      }
     
    }
    
  
}
    BubbleSort(){
      
      const animations = getBubbleSortAnimation(this.state.array)
      const arrayBars = document.getElementsByClassName("array-bar")
      for (let i = 0; i < animations.length; ++i) {
        setTimeout(()=>{
            const [oldposition,newposition] = animations[i]
            const oldBarstyle = arrayBars[oldposition].style 
            const newBarstyle = arrayBars[newposition].style 

            var tmp = this.state.array[oldposition]
            this.state.array[oldposition] = this.state.array[newposition] 
            this.state.array[newposition] = tmp

            oldBarstyle.height = `${this.state.array[oldposition]}px`;
            newBarstyle.height = `${this.state.array[newposition]}px`;

            oldBarstyle.backgroundColor = "red";
            newBarstyle.backgroundColor = "green";

            var currentPosition = oldposition;
          for (let j = 0; j < currentPosition; j++) {
          var jBarStyle = arrayBars[j].style;
          jBarStyle.backgroundColor = "red";
       }
         if(i === animations.length-1) {
         var n = arrayBars.length;
         for(let j=0;j<n;j++) {
            arrayBars[j].style.backgroundColor = "limegreen"
         }
       }

        },i*ANIMATION_SPEED_MS)
    }
  }

  quick() {
    const array = this.state.array
    const animation = getQuicksortanimation(array)
    const arrayBars = document.getElementsByClassName("array-bar")
    for(let i=0;i<animation.length;i++)  {
      setTimeout(()=> {
        var [oldposition,newposition] = animation[i]
        var oldstyle = arrayBars[oldposition].style
        var newstyle = arrayBars[newposition].style
        var index 
        var dummyanimation = []
        if(array.length > 1) {
          index = partition(array,0,array.length-1,dummyanimation)
          if(index-1 > 0) quicksort(array,0,index-1,dummyanimation)
          if(index < array.length) quicksort(array,index,array.length-1,dummyanimation)
        }
        oldstyle.height = `${this.state.array[oldposition]}px`;
        newstyle.height = `${this.state.array[newposition]}px`;
         
        oldstyle.backgroundColor = "green";
        newstyle.backgroundColor = "red";

        var curr = oldposition
        for(let i=0;i<curr;i++) {
          arrayBars[i].style.backgroundColor = "green"
        }
        if (i === animation.length - 1) {
          this.makeAllBarsGreen();
        }
      },i*ANIMATION_SPEED_MS)
    }
  }
  makeAllBarsGreen() {
    console.log("Sorted");
    const arrayBars = document.getElementsByClassName("array-bar");
    var arrayLength = arrayBars.length;
    for (let j = 0; j < arrayLength; j++) {
      var jBarStyle = arrayBars[j].style;
      jBarStyle.backgroundColor = "limegreen";
    }
  }
  makeAllBarsBlue() {
    const arrayBars = document.getElementsByClassName("array-bar");
    var arrayLength = arrayBars.length;
    for (let j = 0; j < arrayLength; j++) {
      var jBarStyle = arrayBars[j].style;
      jBarStyle.backgroundColor = "skyblue";
    }
  }
    render(){
        const {array} = this.state

        return (
           <>
            <div className="main_container">
                  <h1 style = {{backgroundColor:"lightpink",color:"black",height:'70px',textAlign:"center",justifyContent:'center',alignItems:"center"}}>Sorting Algorithm Visualizer</h1>
                {/* <Slider></Slider> */}
                <div className="array-container">
                  {array.map((value,index)=>(
                      <div className="array-bar"  key = {index}
                      style = {{backgroundColor : PRIMARY_COLOR,
                      height : `${value}px`,
                      
                        }}
                    >
                    </div>
                     ))}
              <div className="main-btn">
                <Button className='btn' style={{margin:'3px'}}  onClick={()=>this.resetArray()}  variant="contained" color="secondary" disableElevation >
                Generate New Array
                </Button>
                <Button className='btn' style={{margin:'3px'}} onClick={()=>this.mergeSort()}  variant="contained" color="primary" disableElevation >
                Merge Sort
                </Button>
                <Button className='btn' style={{margin:'3px'}} onClick={()=>this.quick()}  variant="contained" color="primary" disableElevation >
                Quick Sort
                </Button>
                <Button className='btn' style={{margin:'3px'}} onClick={()=>this.BubbleSort()}  variant="contained" color="primary" disableElevation >
                Bubble Sort
                </Button>
              </div>
              </div>
            </div>
           </>
        )
    }
}
function randomGenerator(min,max){
    return Math.floor(Math.random() * (max-min+1)+min)
}