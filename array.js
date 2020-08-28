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
    }
};


exports.array = array;