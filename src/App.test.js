import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './composition/Card';
import STORE from './store';
import renderer from 'react-test-renderer';

describe('App component', () => {
  // SMOKE
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  // SNAPSHOT
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<App store={STORE} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });  
});





// Card.test.js
describe('Card component', () => {
  // SMOKE
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  // SNAPSHOT
  it('renders the UI as expected', () => {
    const tree = renderer 
      .create(<Card title="Test" content="Lorem ipsum" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

