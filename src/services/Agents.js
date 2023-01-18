const url = "https://valorant-api.com/v1/agents";

export function getAgents() {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => console.log(error));
}