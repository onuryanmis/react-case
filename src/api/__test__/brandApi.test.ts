import { brandApi } from '../brandApi';
import { client } from '../config/Client';

describe('brandApi', () => {
  describe('findAll', () => {
    it('should make a GET request to the correct endpoint', async () => {
      jest
        .spyOn(client, 'get')
        .mockImplementationOnce(() => Promise.resolve({ data: [] }));

      await brandApi.findAll();

      expect(client.get).toHaveBeenCalledWith(
        'a61d21a1-d149-4eb1-8df6-5faca5fbc590'
      );
    });

    it('should return an array of brands', async () => {
      const mockResponse = {
        data: [
          { id: 1, name: 'Brand 1' },
          { id: 2, name: 'Brand 2' },
        ],
      };
      jest
        .spyOn(client, 'get')
        .mockImplementationOnce(() => Promise.resolve(mockResponse));

      const result = await brandApi.findAll();

      expect(result).toEqual(mockResponse.data);
    });

    it('should throw an error if the request fails', async () => {
      jest
        .spyOn(client, 'get')
        .mockImplementationOnce(() =>
          Promise.reject(new Error('Request failed'))
        );
      try {
        await brandApi.findAll();
        fail('findAll should have thrown an error');
      } catch (error) {
        const err = error as Error;
        expect(err.message).toEqual('Request failed');
      }
    });
  });
});
