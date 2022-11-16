const requrl = "http://localhost:3000"

const proFetch = async (url: string, init?: RequestInit): Promise<Response> => {

    let thisReq = requrl
    return fetch(thisReq, init)
}

export { proFetch }