const AuthRi7Url = import.meta.env.VITE_AUTHRI7_URL;

export async function registerApiAuthRi7(registerInfos) {
    const response = await fetch(`${AuthRi7Url}register`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(registerInfos)
    });
    const result = await response.json()
    return result
}

export async function loginApiAuthRi7(loginInfos) {
    const response = await fetch(`${AuthRi7Url}login`, {
        method: "POST", 
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(loginInfos)
    });
    const result = await response.json();
    return result;
}

export async function checkAuth() {
    const token = sessionStorage.getItem('authRi7-token')
    if (!token) throw new Error('Non authentifié')

    const response = await fetch(`${AuthRi7Url}me`, {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
    });
    const result = await response.json()
    if (!response.ok) throw new Error(result.message || 'Non authentifié')
    return result;
}