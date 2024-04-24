function timetask(times){
    let result = times.filter(times=> times.endsWith("PM"))
    return result
}

module.exports = timetask