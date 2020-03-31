const progressDays = runs => { // define function progressDays

  var d=0;
  for (let n=0; n<runs.legth; n++) {
      if(runs[n+1]-runs[n]>0) {
          d++;
      }
  } 

  return d;
    
}


console.log(progressDays({9;9})); // display the number of progress day

