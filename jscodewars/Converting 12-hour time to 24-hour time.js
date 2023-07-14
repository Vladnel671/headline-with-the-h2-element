function to24hourtime(hour, minute, period) {
    if (period === "am") {
        if (hour === 12) {
            return "00" + minute.toString().padStart(2, '0')
        }
        return hour.toString().padStart(2, '0') + minute.toString().padStart(2, '0')
    } else if (period === "pm") {
        if (hour === 1) {
            return "13" + minute.toString().padStart(2, '0')
        }
        if (hour === 2) {
            return "14" + minute.toString().padStart(2, '0')
        }
        if (hour === 3) {
            return "15" + minute.toString().padStart(2, '0')
        }
        if (hour === 4) {
            return "16" + minute.toString().padStart(2, '0')
        }
        if (hour === 5) {
            return "17" + minute.toString().padStart(2, '0')
        }
        if (hour === 6) {
            return "18" + minute.toString().padStart(2, '0')
        }
        if (hour === 7) {
            return "19" + minute.toString().padStart(2, '0')
        }
        if (hour === 8) {
            return "20" + minute.toString().padStart(2, '0')
        }
        if (hour === 9) {
            return "21" + minute.toString().padStart(2, '0')
        }
        if (hour === 10) {
            return "22" + minute.toString().padStart(2, '0')
        }
        if (hour === 11) {
            return "23" + minute.toString().padStart(2, '0')
        }
        if (hour === 12) {
            return "12" + minute.toString().padStart(2, '0')
        }
    }
}

console.log(to24hourtime(1, 0, "pm"))