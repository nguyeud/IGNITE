export function getVersion() {
    return fetch("https://valorant-api.com/v1/version")
        .then((response) => response.json())
        .then((data) => data.data.version)
        .catch((error) => console.log(error));
}

export function getAgents() {
    return fetch("https://valorant-api.com/v1/agents")
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => console.log(error));
}

export function getMaps() {
    return fetch("https://valorant-api.com/v1/maps")
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => console.log(error));
}

export function getWeapons() {
    return fetch("https://valorant-api.com/v1/weapons")
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => console.log(error));
}

export function getWeaponSkins() {
    return fetch("https://valorant-api.com/v1/weapons/skins")
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => console.log(error));
}