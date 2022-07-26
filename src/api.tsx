import queryString, {ParsedUrlQueryInput} from 'querystring'
import { randomIntBetween } from './examples/FakeAPI'

type RequestOptions = {
    queryParams?: ParsedUrlQueryInput
    method?: 'GET' | 'POST'
    body?: object | string
}

// export const apiUrl = (lambda: string, queryParams?: ParsedUrlQueryInput) => {
//     let url = `https://f10adraov8.execute-api.us-east-1.amazonaws.com/dev/${lambda}`
//     if (queryParams) url += '?' + queryString.stringify(queryParams)

//     return url
// }

export const apiUrl = () => {
    const width = randomIntBetween(100, 900)
    const height = randomIntBetween(100, 900)
    return `https://random.imagecdn.app/v1/image?format=image&width=${width}&height=${height}`
}

export const callApi = (lambda: string, options?: RequestOptions) => {
    const {queryParams, body, method} = options || {}
    const url = apiUrl()
    console.log(url)
    let bodyString = body
    if (typeof bodyString === 'object') {
        bodyString = JSON.stringify(body)
    }

    console.log( fetch(url, {body: bodyString, method}).then((res) => res.json()))
}