import { productApi } from '../productApi';
import { client } from '../config/Client';

describe('productApi', () => {
  describe('findAll', () => {
    it('should make a GET request to the correct endpoint', async () => {
      jest
        .spyOn(client, 'get')
        .mockImplementationOnce(() => Promise.resolve({ data: [] }));

      await productApi.findAll();

      expect(client.get).toHaveBeenCalledWith(
        'f015f8e7-dfbb-4065-90c9-bb3eef08e4cd'
      );
    });

    it('should return an array of products', async () => {
      const mockResponse = {
        data: [
          {
            id: 1,
            title: 'Product 1',
            image: 'https://example.com/product1.jpg',
            brand: 'Brand 1',
            price: 100,
            campaign: { price: 80, percent: 20 },
          },
          {
            id: 2,
            title: 'Product 2',
            image: 'https://example.com/product2.jpg',
            brand: 'Brand 2',
            price: 200,
            campaign: null,
          },
        ],
      };
      jest
        .spyOn(client, 'get')
        .mockImplementationOnce(() => Promise.resolve(mockResponse));

      const result = await productApi.findAll();

      expect(result).toEqual(mockResponse.data);
    });

    it('should throw an error if the request fails', async () => {
      jest
        .spyOn(client, 'get')
        .mockImplementationOnce(() =>
          Promise.reject(new Error('Request failed'))
        );

      try {
        await productApi.findAll();
        fail('findAll should have thrown an error');
      } catch (error) {
        const err = error as Error;
        expect(err.message).toEqual('Request failed');
      }
    });
  });
});
