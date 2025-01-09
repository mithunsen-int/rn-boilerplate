import { AxiosResponse } from 'axios';

export interface ApiResponse<T> extends AxiosResponse {
  data: ApiResponse<T>;
  message: string;
}
