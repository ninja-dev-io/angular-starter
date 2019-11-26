import {ResponseBody} from '../../common/base/response-body.interface';

export const DATA_FAKE_RESPONSE: ResponseBody<any[]> = {
  data: [
    {
      id: '1',
      name: 'Bitcoin',
      symbol: 'BTC',
      slug: 'bitcoin',
      num_market_pairs: 7919,
      date_added: '2013-04-28T00:00:00.000Z',
      tags: [
        'mineable'
      ],
      max_supply: 21000000,
      circulating_supply: 17906012,
      total_supply: 17906012,
      platform: null,
      cmc_rank: 1,
      last_updated: '2019-08-30T18:51:28.000Z',
      quote: {
        USD: {
          price: 9558.55163723,
          volume_24h: 13728947008.2722,
          percent_change_1h: -0.127291,
          percent_change_24h: 0.328918,
          percent_change_7d: -8.00576,
          market_cap: 171155540318.86005,
          last_updated: '2019-08-30T18:51:28.000Z'
        }
      }
    },
    {
      id: '1027',
      name: 'Ethereum',
      symbol: 'ETH',
      slug: 'ethereum',
      num_market_pairs: 5629,
      date_added: '2015-08-07T00:00:00.000Z',
      tags: [
        'mineable'
      ],
      max_supply: null,
      circulating_supply: 107537936.374,
      total_supply: 107537936.374,
      platform: null,
      cmc_rank: 2,
      last_updated: '2019-08-30T18:51:21.000Z',
      quote: {
        USD: {
          price: 168.688633539,
          volume_24h: 5774323846.44399,
          percent_change_1h: -0.0330049,
          percent_change_24h: -0.510765,
          percent_change_7d: -13.1883,
          market_cap: 18140427540.533985,
          last_updated: '2019-08-30T18:51:21.000Z'
        }
      }
    }
  ]
};

