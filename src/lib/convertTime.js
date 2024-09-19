function convertToFranceTime(utcDateString) {
    const date = new Date(utcDateString); // Convert string to Date object

    // Use Intl.DateTimeFormat to format the date for France (Europe/Paris time zone)
    const options = {
        timeZone: 'Europe/Paris',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    const franceTime = new Intl.DateTimeFormat('fr-FR', options).format(date);

    return franceTime;
}

export default convertToFranceTime;