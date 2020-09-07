export function isValidDate(date) {
    const dateExp = /^(?:(19|20)[0-9]{2})[-.](0[1-9]|1[012])[-.](0[1-9]|1[0-9]|2[0-9]|[12][0-9]|3[01])$/;
    return dateExp.test(date.from) && dateExp.test(date.to) && (new Date(date.to) >= new Date(date.from));
}