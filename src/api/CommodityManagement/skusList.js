import request from '@/utils/request'

export const getAdministration = () => {
  return request({
    url: '/skus/1',
    method: 'GET'
  })
}
