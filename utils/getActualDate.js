const getActualDate = () => {
    const dateRaw = new Date;
    const actualDay=(dateRaw.getDate() >= 10)?dateRaw.getDate():`0${dateRaw.getDate()}`
    const actualMonth=dateRaw.getMonth() + 1
    const actualYear=dateRaw.getFullYear()
    const actualDate = `${actualYear}-${actualMonth}-${actualDay}`
    return actualDate;
}

export default getActualDate;
