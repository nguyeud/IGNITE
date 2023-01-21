export function getNews() {
    return fetch("https://api.henrikdev.xyz/valorant/v1/website/en-us")
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.log(error));
}