import {$authHost, $host} from "./index";


export const createType = async (type) => {
    const {data} = await $authHost.post('api/typeProduct', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/typeProduct')
    return data
}

export const createStoreProduct = async (storeProduct) => {
    const {data} = await $authHost.post('api/storeProduct', storeProduct)
    return data
}

export const fetchStoreProducts = async () => {
    const {data} = await $host.get('api/storeProduct', )
    return data
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', product)
    return data
}

export const fetchProducts = async (typeProductId, storeProductId, page, limit= 5) => {
    const {data} = await $host.get('api/product', {params: {
            typeProductId, storeProductId, page, limit
        }})
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}