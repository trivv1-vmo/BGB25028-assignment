import { querySearch } from './http.utils';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { API_URL } from '@/config/api';
import { ERROR_CODE, StatusCodeEnum } from '@/constants';

class HttpService {
  protected httpInstance: AxiosInstance;
  protected basicToken: string;

  initAxiosInstance(baseURL: string = API_URL) {
    const instance = axios.create({
      baseURL: baseURL,
      ...this.getDefaultConfig(),
    });
    return instance;
  }

  constructor(baseURL: string = API_URL, basicToken: string = "BASIC_TOKEN") {
    this.basicToken = basicToken;
    this.httpInstance = this.initAxiosInstance(baseURL);
  }

  getDefaultConfig(): AxiosRequestConfig {
    const headers: LooseStringObject = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    if (this.basicToken) {
      headers.Authorization = `Basic ${this.basicToken}`;
    }

    return {
      headers,
      timeout: 100000,
      // False for Access-Control-Allow-Origin: *
      withCredentials: false,
    };
  }

  getMultipartFormConfig(): AxiosRequestConfig {
    const defaultConfig = this.getDefaultConfig();
    defaultConfig.headers!['Content-Type'] = 'multipart/form-data';
    return {
      ...defaultConfig,
    };
  }

  async get(endpoint: string, params = {}): Promise<any> {
    if (Object.keys(params).length > 0) {
      endpoint = `${endpoint}?${querySearch(params)}`;
    }
    try {
      const res = await this.httpInstance.get(endpoint);
      if (res?.status === StatusCodeEnum.OK) {
        return res.data;
      }
    } catch (err: any) {
      this.handleError(err);
    }
  }

  async post(endpoint: string, payload: any, config?: any): Promise<any> {
    try {
      const res = await this.httpInstance.post(endpoint, payload, {
        ...this.getDefaultConfig(),
        ...config,
      });
      if (res?.status === StatusCodeEnum.OK || res?.status === StatusCodeEnum.Created) {
        return res.data;
      }
    } catch (err: any) {
      this.handleError(err);
    }
  }

  async put(endpoint: string, payload: any, config?: any): Promise<any> {
    try {
      const res = await this.httpInstance.put(endpoint, payload, {
        ...this.getDefaultConfig(),
        ...config,
      });
      if (res?.status === StatusCodeEnum.OK) {
        return res.data;
      }
    } catch (err: any) {
      this.handleError(err);
    }
  }

  async delete(endpoint: string): Promise<any> {
    try {
      const res = await this.httpInstance.delete(endpoint);
      if (res?.status === StatusCodeEnum.OK) {
        return res.data;
      }
    } catch (err: any) {
      this.handleError(err);
    }
  }

  handleError(error: AxiosError) {
    // Initialize error message
    let errorText = '';

    // Switch based on the HTTP response status code
    switch (error.response?.status) {
      // Case: Bad Request (400)
      case StatusCodeEnum['Bad Request']:
        errorText = 'Bad Request';
        break;

      // Case: Unauthorized (401)
      case StatusCodeEnum['Unauthorized']:
        errorText = 'Unauthorized';
        break;

      // Case: Forbidden (403)
      case StatusCodeEnum['Forbidden']:
        errorText = 'Forbidden';
        break;

      // Case: Internal Server Error (500) or any other unhandled status
      case StatusCodeEnum['Internal Server Error']:
      default:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        errorText = ERROR_CODE['ERROR']; // Default error message
        break;
    }

    // Display an error notification with the corresponding error message
    // notification.error({
    //   message: 'Error',
    //   description: errorText,
    // });
  }
}

export default HttpService;
