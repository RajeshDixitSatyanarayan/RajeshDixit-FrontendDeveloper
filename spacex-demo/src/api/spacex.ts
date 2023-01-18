import axios from "axios";

const BASE_URL = 'https://api.spacexdata.com/v4/'

export const SpaceXAPIs = {
  getCapsules: (status: string, original_launch: string, type: string) => {
    // We might be able to use /capsules/query but couldn't find how to create a proper query
    return axios.get(`${BASE_URL}capsules`).then(({data}) => {

      // Doing a manual filter as query is not working and its returning all data.
      return data.filter((item: { [key: string]: any}) => {
        return (!!status && status === item.status) ||
        (!!type && type === item.type) ||
        // (!!original_launch && +new Date(item.original_launch) >= +new Date(original_launch)) ||
        (!status && !type)
      })
    }).catch((err) => err)
  },
}