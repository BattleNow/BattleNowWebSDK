export default class RequestUtil {
  static buildJsonBody(value: any): RequestInit {
    return {
      method: 'post',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(value)
    } as RequestInit
  }

  static buildJsonBodyWithAuth(value: any, token: string): RequestInit {
    return {
      method: 'post',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(value)
    } as RequestInit
  }

  static buildWithAuth(token: string, method: string): RequestInit {
    return {
      method: method,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${token}`
      }
    } as RequestInit
  }

  static buildJSONQuery(method: string): RequestInit {
    return {
      method: method,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    } as RequestInit
  }

  static buildQueryParams(url: string, queryParams: object): string {
    const queryKeys = Object.getOwnPropertyNames(queryParams)
    const paramsStringList = queryKeys.map(value => {
      return `${value}=${queryParams[value]}`
    })
    return `${url}?${paramsStringList.join('&')}`
  }
}
