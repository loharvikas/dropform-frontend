export const getDatetime = (date) => {
    const options = { day: 'numeric', month: 'long',year: 'numeric'};
    const time = new Date(date);
    return time.toLocaleDateString("en-US", options);
}
