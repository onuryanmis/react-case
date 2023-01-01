import { client } from './config/Client';

type CampaignType = { price: number; percent: number } | null;

export interface Product {
  id: number;
  title: string;
  image: string;
  brand: string;
  price: number;
  campaign: CampaignType;
}

export const productApi = {
  findAll: async function (): Promise<Product[]> {
    const response = await client.get<Product[]>(
      'f015f8e7-dfbb-4065-90c9-bb3eef08e4cd'
    );
    return response.data;
  },
};
