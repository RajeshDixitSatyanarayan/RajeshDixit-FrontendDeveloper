import App from './App';
import {render} from '@testing-library/react';

describe('WHEN app is render', () => {
  it('expect it to have App container', () => {
    const app = render(<App />);
    expect(app.baseElement.querySelector('.App')).toBeTruthy()
  })

  it('and expect it to have home-banner', () => {
    const app = render(<App />);
    expect(app.baseElement.querySelector('.home-banner')).toBeTruthy()
  })

  it('and expect it to have search-form', () => {
    const app = render(<App />);
    expect(app.baseElement.querySelector('.search-form')).toBeTruthy()
  })

  it('but expect it to not have search-result', () => {
    const app = render(<App />);
    expect(app.baseElement.querySelector('.search-result')).toBeFalsy()
  })
});
