const getPuzzle = async (wordCount) => {
    const response = await fetch(
        `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
    );

    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error("Unable to fetch puzzle");
    }
};

const getCounty = async (countryCode) => {
    const response = await fetch("//restcountries.eu/rest/v2/all");

    if (response.status === 200) {
        const countries = await response.json();
        const country = countries.find(
            (country) => country.alpha2Code === countryCode
        );
        return country.name;
    } else {
        throw new Error("Unable to fetch county");
    }
};

const getLocation = async () => {
    const response = await fetch("//ip-api.com/json/");

    if (response.status === 200) {
        const location = await response.json();
        return location.countryCode;
    } else {
        throw new Error("Unable to fetch location ip");
    }
};

const getCurrentCountry = async () => {
    const location = await getLocation();
    const country = await getCounty(location);
    return country;
};
