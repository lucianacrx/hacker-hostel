export function isValidDate(date) {
    const splittedDate = splitDate(date);
    const dateExp = /^(?:(19|20)[0-9]{2})[-.](0[1-9]|1[012])[-.](0[1-9]|1[0-9]|2[0-9]|[12][0-9]|3[01])$/;
    if (splittedDate !== undefined) {
        return dateExp.test(splittedDate.from) && dateExp.test(splittedDate.to) && (new Date(splittedDate.to) >= new Date(splittedDate.from));
    } else {
        return false;
    }
}

function splitDate(date) {
    const splittedDate = date.split(" to ");
    splittedDate.from = splittedDate[0];
    splittedDate.to = splittedDate[1];
    return splittedDate
}

export function getDateRange(date) {
    let dateArray = [];

    const splittedDate = splitDate(date);

    let startDate = new Date(splittedDate.from + ' EDT');
    let day = startDate.getDate();
    let month = startDate.getMonth();
    let year = startDate.getFullYear();
    startDate = [year, month, day].join("-");

    let endDate = new Date(splittedDate.to + ' EDT');
    let endDay = endDate.getDate();
    let endMonth = endDate.getMonth();
    let endYear = endDate.getFullYear();
    endDate = [endYear, endMonth, endDay].join("-");

    startDate = new Date(startDate);
    
    while (new Date(startDate).getTime() <= new Date(endDate).getTime()) {
      let formatDate = `${new Date(startDate).getFullYear()}-${new Date(startDate).getMonth() + 1}-${new Date(startDate).getDate()}`; +
      dateArray.push(formatDate);
      startDate = new Date(startDate).setDate(new Date(startDate).getDate() + 1);
    }

    return dateArray;
}

export function sortArray(array) {
    array.sort(function(a, b) {
        if (new Date(a.date) < new Date(b.date)) return -1;
	    if (new Date(a.date) > new Date(b.date)) return 1;

        if (a.name > b.name) return 1;
	    if (a.name < b.name) return -1;

    })
}