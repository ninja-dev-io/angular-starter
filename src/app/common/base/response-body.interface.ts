export class ResponseBody<D> {
   status?: Status;
   data: D;
}

export class Status {
  credit_count: number;
  elapsed: number;
  error_code: number;
  error_message: string;
  timestamp: string;
}

export interface IdMapper<T> {
  [key: number]: T;
}




