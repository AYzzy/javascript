let timetask = require("./task4.JS")

test("timetake test",()=>{
    let moment = ["9:00 AM","11:00 AM","1:00 PM","3:00 PM","5:00 PM"]
    let result = timetask(moment)
    expect(result).toEqual(["1:00 PM","3:00 PM","5:00 PM"])
})