import { APIRequestContext } from "@playwright/test"

export default class API {
    private request: APIRequestContext
    endpoint!:string
    constructor(request: APIRequestContext) {
        this.request = request
    }
    async postReq(endpoint: string, reqBody: object) {
        const res = await this.request.post(endpoint, { data: reqBody })
        return res
      }
    
      async getReq(endpoint: string) {
        const res = await this.request.get(endpoint)
        return res
      }
    
      async putReq(endpoint: string, reqBody: object, token: string) {
        const res = await this.request.put(endpoint, {
          data: reqBody, headers: {
            'Cookie': `token=${token}`
          }
        })
        return res
      }
    
      async patchReq(endpoint: string, reqBody: object, token: string) {
        const res = await this.request.patch(endpoint, {
          data: reqBody, headers: {
            'Cookie': `token=${token}`
          }
        })
        return res
      }
    
      async deleteReq(endpoint: string, token: string) {
        const res = await this.request.delete(endpoint, {
          headers: {
            'Cookie': `token=${token}`
          }
        })
        return res
      }
};

// private async makeRequest (endpoint:string, method:string, reqBody?: object, token?: string) {
//     const re = await this.request[method](e)
// }