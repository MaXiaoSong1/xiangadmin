import request from '@/utils/request'

export const getAdministration = () => {
  return request({
    url: '/category',
    method: 'GET'
  })
}
