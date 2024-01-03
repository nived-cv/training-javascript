const sum = require('./sum')

test('add 1 +2 ',()=>{
    expect(sum(100000012,99099990)).toBe(300000)
})

