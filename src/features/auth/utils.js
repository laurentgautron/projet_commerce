const FakeStoreUrl = import.meta.env.VITE_FAKESTORE_URL;

export async function loginUser(loginInfos) {
    const response = await fetch(`${FakeStoreUrl}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginInfos)
    })
    const result = await response.json()

    if (!response.ok) throw new Error(result.message || "Erreur pour l'inscription")
    return result;
}

export async function  connexionUser(connexionInfos) {
    const response = await fetch(`${FakeStoreUrl}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(connexionInfos)
    });

    const data = await response.json()

    if (!response.ok) throw new Error(data.message || "Identifiants incorrects")
    
    return data
}