export const getDatetime = (date) => {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour:'numeric', minute:'numeric'};
    const time = new Date(date);
    return time.toLocaleDateString("en-US", options);
}
