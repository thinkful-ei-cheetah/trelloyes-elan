import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

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
  