export type AxiosResponseType ={
    status:number,
    data :any, //response sent by the backend
    statusText:string,
    headers:Record<string, any>,
  }

export type AxiosErrorType ={
    response :{
        data:any, //response sent by the backend
        status:number,
        headers:Record<string, any>,
    },
    request:any,
    message: string,
    
}