const announceDate = () => {
    const MONTH_NAMES = ["January", "February", "March", "April", 
    "May", "June", "July", "August", "September", "October", "November", "December"]
    const ORDINAL_SUFFIXES = ["th", "st", "nd", "rd"]
    let theDate = new Date()

    const getOrdinalDay = (date) => {
        let lastDigit = Number.parseInt(date.toString[date.toString.length - 1])
        if (lastDigit >= 1 && lastDigit <= 3) {
        return date + ORDINAL_SUFFIXES[lastDigit]
        }
        else return date + ORDINAL_SUFFIXES[0]
    }

    const getDaypart = (hour) => {
        if (hour >= 0 && hour <= 11) return "morning"
        if (hour >= 12 && hour <= 17) return "afternoon"
        return "evening"
    }

    let str = `Today's date is ${MONTH_NAMES[theDate.getMonth()]} ${getOrdinalDay(theDate.getDate())}, ${theDate.getFullYear()}. \
    It is ${theDate.getHours()}:${theDate.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2})} in the ${getDaypart(theDate.getHours())}.`
    return str
}

export default announceDate