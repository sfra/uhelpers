const string = {
    Sstring: {
        suffix:(st,su)=>{
          let ss=null;
          if(typeof su==='number') {
            return st.substring(0,st.length-su);
          }
          if(typeof su=='string') {
            ss = st.split(su);
            ss.pop();
            return ss.join(su);
          }
      
      
        }
      },
      toFixedString: (linePatern, line, prefix='', postfix='', fill=' ' )=> {
        let linePatternLength = (typeof linePatern==='string')?linePatern.length: linePatern;
      
        let lineLength = Math.max(line.length, linePatternLength);
        let out = line;
        for(let i=0;  i<lineLength-line.length; i++) {
          out+=fill;
        }
      
       return prefix+out+postfix;
      }
      
}

exports.string = string;