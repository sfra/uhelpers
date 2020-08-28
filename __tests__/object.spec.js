const { object } = require('../object')    

let objs0 = [
    { x: 44, y: 22 },
    { x: 44, y: -22 },
    [],
    (new Set()).add([2, 1]).add(3).add([new Set(), 'hello'])
  ];
  let objs1 = [
    { x: 44, y: 22 },
    { x: 44, y: -22 },
    [],
    (new Set()).add([2, 1]).add([new Set(), 'hello']).add(3)
  ];
  
  let obj = (new Set()).add([2, 1]).add(-3).add([new Set(), 'hello']);

  describe('deepEqual', () => {
    test('simple objects and Sets', () => {
  
  
  
  
      objs0.forEach((el, i) => {
        console.log(`${i})`);
        //console.dir(`[${el}]`);
        expect(object.deepEqual(el, objs1[i])).toBeTruthy();
      });
      expect(object.deepEqual(obj, objs0)).toBeFalsy();
  
  
    });
    
  });

  describe('deepMerge', () => {

    let config = {
      'string': (a, b) => a + b,
      'number': (a, b) => Math.min(a, b),
      'boolean': (a, b) => a || b,
      'function': (a, b) => {
        return (...arg) => {
          a(...arg) + b(...arg);
        };
      },
      'string.number': (a, b) => parseInt(a) * parseInt(b)
    };
  
    test('Simple expample', () => {
      let p0 = [3, 4, 5];
      let p1 = [6, 7, 9];
  
  
  
      p0 = {
        a: [1, 2, 4],
        b: { a: 'Hello' },
        c: [1, 2, 3, true, { a: 11 }],
        d: 33,
        e: { a: { a: [] } }
  
      };
  
      p1 = {
        a: [-1, 3, -4, 6, 7],
        b: { a: 'World' },
        c: [9, 0, 3, true, { a: 9 }],
        d: 33,
        e: { b: [1, 2, 17] },
  
  
      };
  
  
  
  
      expect(object.deepEqual(object.deepMerge(p0, p1, config),
        {
          a: [-1, 2, -4, 6, 7]
          ,
          b: { a: 'HelloWorld' },
          c: [1, 0, 3, true, { a: 9 }],
          d: 33,
          e: { a: { a: [] }, b: [1, 2, 17] }
  
        }
      )
  
      ).toBeTruthy();
  
  
  
  
  
    });
  })
  
  

  
describe('findPath', () => {
  test('find z', () => {
    let examinedObject = { x: { y:  { z: 'dadsw' } } , uu: { c: { z: { k: [], l: 1 } }} };
    let examinedObject0 = {x: {y: {z:11}}}
    let examinedObject1 ={z:[11]};
    let examinedObject2 ={ x: { y: [2, 3, 4, { zz: 'dadsw' }] }, uu: { c: 'ABC', zz: { k: [], l: 1 } } };;
    let examinedObject3 = {x: [1,2,{u: {z: 'dd'}}]}
      
    expect(object.findPath(examinedObject0, 'z')).toEqual(['x.y']);
    expect(object.findPath(examinedObject, 'z')).toEqual([`x.y`,'uu.c']);
    expect(object.findPath(examinedObject1, 'z')).toEqual(['']);
    expect(object.findPath(examinedObject2, 'z')).toEqual([]);
    expect(object.findPath(examinedObject3, 'z')).toEqual(['x.2.u']);
  });
  });
