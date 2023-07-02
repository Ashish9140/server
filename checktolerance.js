function checkTolerance(lats, longs) {
    const latitudeArray = [];
    const longitudeArray = [];

    // Filter out values within tolerance
    for (let i = 0; i < longs.length; i++) {
        const latitude = lats[i];
        const longitude = longs[i];

        let isWithinTolerance = false;
        for (let j = 0; j < i; j++) {
            const prevLatitude = latitudeArray[j];
            const prevLongitude = longitudeArray[j];

            // Calculate difference between current and previous coordinates
            const latitudeDifference = Math.abs(latitude - prevLatitude);
            const longitudeDifference = Math.abs(longitude - prevLongitude);

            if (latitudeDifference < 0.000001 && longitudeDifference < 0.000001) {
                // Coordinate is within tolerance, skip storing it
                isWithinTolerance = true;
                break;
            }
        }

        if (!isWithinTolerance) {
            latitudeArray.push(latitude);
            longitudeArray.push(longitude);
        }
    }

    // Update lats and longs arrays with the filtered values
    lats.length = 0;
    longs.length = 0;
    lats.push(...latitudeArray);
    longs.push(...longitudeArray);

    // Return the updated arrays
    return [lats, longs];
}

module.exports = checkTolerance