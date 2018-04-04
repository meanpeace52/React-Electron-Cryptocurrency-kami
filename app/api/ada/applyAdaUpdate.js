// @flow
import { request } from './lib/request';

export type ApplyAdaUpdateParams = {
  ca: string,
};

export const applyAdaUpdate = (
  { ca }: ApplyAdaUpdateParams
): Promise<any> => (
  request({
    hostname: 'gotest.cryptokami.com',
    method: 'POST',
    path: '/api/update/apply',
    port: 8090,
    ca,
  })
);
