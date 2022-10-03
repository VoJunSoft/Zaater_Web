//Date format
export const handleDate = (data) => {
    let date_listed = new Date(data * 1000)
    let month = date_listed.getMonth() + 1
    let day = date_listed.getDate()
    let year = date_listed.getFullYear()
    if (day <= 9)
        day = '0' + day
    if (month < 10)
        month = '0' + month
    const postDate = day + '/' + month + '/' + year
    return postDate
}

//Time format
export const handleTime = (data) => {
    let date_listed = new Date(data * 1000)
    let hrs = date_listed.getHours()
    let mins = date_listed.getMinutes()
    if (hrs <= 9)
        hrs = '0' + hrs
    if (mins < 10)
        mins = '0' + mins
    const postTime = hrs + ':' + mins
    return postTime
}

//retrieve the time difference between todays date and the date the post was listed
export const handleTimeDifference = (data) => {
    //multiply by 1000 because dataD is in miliseconds
    let date_listed = new Date(data * 1000)
    let current_date = new Date()
    let seconds = (current_date.getTime() - date_listed.getTime()) / 1000;
    let mins = Math.floor(seconds / 60)
    let hrs = Math.floor(mins / 60)
    let days = Math.floor(hrs / 24)
    let months = Math.floor(days / 30)
    let years = Math.floor(months / 12)

    if (years > 0)
        return years + 'yrs'
    else if (months > 0)
        return months + 'mons'
    else if (days > 0)
        return days + 'd'
    else if (hrs > 0)
        return hrs + 'hrs'
    else if (mins > 0)
        return days + 'mins'
}