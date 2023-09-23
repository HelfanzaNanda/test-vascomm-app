import dayjs from "dayjs"

export const dateFormatYYYYMMDD = (str : string) => {
    return dayjs(str).format('YYYY-MM-DD')
}
export const dateFormatDDMMMYYYY = (str : string) => {
    return dayjs(str).format('DD MMM YYYY')
}