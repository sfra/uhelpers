const { run } = require('../run')

describe('run',()=>{
    test('sleep',async ()=>{
        let d0 = new Date()
        await run.sleep(1000)
        let d1 = new Date()
        expect(d1.getTime()-d0.getTime()).toBeGreaterThan(990)
        expect(d1.getTime() - d0.getTime()).toBeLessThan(1010)

    })
})