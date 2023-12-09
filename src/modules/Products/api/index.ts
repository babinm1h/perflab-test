import { $apiInstance } from '@core/api';
import { IProduct } from '../models/product.model';
import { IGetProductsParams } from './types';

export class ProductsApi {
  static async getProducts(params: IGetProductsParams) {
    return $apiInstance.get<IProduct[]>(`products`, { params: { ...params } });
  }
}
