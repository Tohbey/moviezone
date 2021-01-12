export default class HTTPClient {
    constructor(url, headers) {
        this.url = url;
        this.headers = headers
        console.log(this.url)
    }

    post = async (path, body, headers = {}) => (
        await fetch(this.url + path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                ...this.headers,
                ...headers,
            },
            body: JSON.stringify(body),
    })).json()

    put = async (path, body, headers = {}) => (await fetch(this.url + path, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...this.headers,
            ...headers,
        },
        body: JSON.stringify(body),
    })).json()

    get = async (path, headers = {}) => (await fetch(this.url + path, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            ...this.headers,
            ...headers,
        },
    })).json()

    delete = async (path, body, headers = {}) => (await fetch(this.url + path, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...this.headers,
            ...headers,
        },
        body: JSON.stringify(body),
    })).json()
}