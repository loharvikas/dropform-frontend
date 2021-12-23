export const getDatetime = (date) => {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour:'numeric', minute:'numeric'};
    const time = new Date(date);
    return time.toLocaleDateString("en-US", options);
}


export function validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    return errors;
};