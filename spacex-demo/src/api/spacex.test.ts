import axios from 'axios'
import { DummyResponse } from '../constants/mock-response'
import { SpaceXAPIs } from './spacex'

describe('GIVEN SpaceX APIs', () => {
  beforeAll(() => {
    jest.spyOn(axios, 'get').mockResolvedValue({data: DummyResponse})
  })
  it('THEN expect it have getCapsules function', () => {
    expect(SpaceXAPIs.getCapsules).toBeDefined()
  })

  it('THEN expect it to return a promise when called', async () => {
    const res = await SpaceXAPIs.getCapsules('', '', '')
    expect(res.length).toEqual(25)
  })

  it('THEN expect it to return only actice results', async () => {
    const res = await SpaceXAPIs.getCapsules('active', '', '')
    expect(res.length).toEqual(15)
  })

  it('THEN expect it to return only "Dragon 1.0" results', async () => {
    const res = await SpaceXAPIs.getCapsules('', '', 'Dragon 1.0')
    expect(res.length).toEqual(4)
  })
})

describe('AND When API throws error', () => {
  it('expect it to catch error', async () => {
    const response = 'Dummy Error response'
    jest.spyOn(axios, 'get').mockRejectedValue(response)
    const res = await SpaceXAPIs.getCapsules('active', '', '')
    expect(res).toEqual(response)
  })
})