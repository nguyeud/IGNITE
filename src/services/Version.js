const url = "https://valorant-api.com/v1/version";

export function getVersion() {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data.data.version)
        .catch((error) => console.log(error));
}