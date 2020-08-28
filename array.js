const { object } = require('./object')

const array = {
    whichOne: (obj,array,ref=false)=>{
        let equality = object.deepEqual;
        ref || (equality=(x,y)=> x===y);
        
      for(let i=0, max = array.length;i<max;i++){
        if(equality(array[i],obj)) {
          return i;
        }
    
    
      }
      return -1;
    },
    unique: (arr,equality = object.deepEqual) =>{
      let out = [];
      let isPresent = null;
       for(let i=0, max=arr.length;i<max;i++) {
         isPresent = false;
        for(let k=0; k < i; k++) {
          if(equality(arr[k], arr[i])) {
             isPresent = true;
          }
        }
        if(!isPresent) {
          out.push(arr[i])
        }
      }
       return out;
     }
};



exports.array = array;