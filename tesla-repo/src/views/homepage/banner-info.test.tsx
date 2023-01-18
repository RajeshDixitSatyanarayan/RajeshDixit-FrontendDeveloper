import {render} from '@testing-library/react';
import { HomePageBannerInfo } from './banner-info'

describe('WHEN HomePageBannerInfo is redered', () => {
  it('THEN expect it to have all elements', () => {
    const component = render(<HomePageBannerInfo />)
    const baseElement = component.baseElement
    expect(baseElement.querySelector('.banner-info')).toBeTruthy()
    expect(baseElement.querySelector('h2')?.innerHTML).toEqual('Space X')
    expect(baseElement.querySelector('p')).toBeTruthy()
  })
})