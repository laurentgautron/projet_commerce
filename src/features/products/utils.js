const FakeStoreUrl = import.meta.env.VITE_FAKESTORE_URL;

export async function getProducts() {
    const response = await fetch(`${FakeStoreUrl}/products`);
    const result = await response.json();
    return result;
};

export async function getCategories() {
    const response = await fetch(`${FakeStoreUrl}/products/categories`);
    const result = await response.json();
    return result;
}

export async function getProductByCategory(category) {
    const response = await fetch(`${FakeStoreUrl}/products`);
    const result = await response.json();
    const products = result.filter((prod) => prod.category === category);
    return products;
}

export async function getArticle(id) {
    const response = await fetch(`${FakeStoreUrl}/products/${id}`)
    const article = await response.json();
    return article;
}

export async function modifyProduct(articleInfos, method) {
    const response = await fetch(`${FakeStoreUrl}/products/${articleInfos.id}`, {
        method: `${method}`,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(articleInfos)
    })
    const result = await response.json()
    return result;
}

export async function addProduct(articleInfos, method) {
    const response = await fetch(`${FakeStoreUrl}/products`, {
        method: `${method}`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(articleInfos)
    });
    const result = await response.json()
    return result
}