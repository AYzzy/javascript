let testScore = require("./score.js")

test("scoreAbove70", ()=>{
    let number =[71,40,32,65,90,82,52,79,85,25]
    let answer = testScore(number)
    expect(answer).toEqual([71,90,82,79,85])
})