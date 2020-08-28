const  {  array } = require('../array')
const { object } = require('../object')
let objInArray = { x: 11, y: 12 };

let arr = [{ x: 11, y: 12 }, { x: 11 }, 'Hello world', objInArray, { z: 22, u: 33 }];
describe('whichOne', () => {
  test('exists', () => {
    expect(array.whichOne(objInArray, arr)).toBe(3);

  })
  test('non-exists', () => {
    expect(array.whichOne({ x: 11 }, arr)).toBe(-1);

  })

  test('by value', () => {

    expect(array.whichOne(objInArray, arr, true)).toBe(0);
  });
});

let a = [1,2,3,5,2,4]
let ao = [{x:11}, {y:12}, {x:11}]
describe('unique',()=>{
  test('simple',()=>{
    expect(
      (()=>{ 
        let a0 = array.unique(a)
        let a1= [1,2,3,5,4]
        console.log('[[[[')
        console.log(a)
        console.log(a0)
        console.log(']]]')
        return (a0.length===a1.length) && a0.every((val,index)=>{
          return val === a1[index]
        })
      })()



    ).toBe(true)

      
     

  })
  test('objects',()=>{
    let a0 = array.unique(ao)
    let a1 = [{x:11}, {y:12}]
    expect((a0.length === a1.length) && a0.every((val,index)=>{
      return object.deepEqual(val, a1[index])
    })).toBe(true)
  })
})
