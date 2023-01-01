import { client } from './config/Client';

export interface Brand {
  id: number;
  name: string;
}

export const brandApi = {
  findAll: async function (): Promise<Brand[]> {
    const response = await client.get<Brand[]>(
      'a61d21a1-d149-4eb1-8df6-5faca5fbc590'
    );
    return response.data;
  },
};
