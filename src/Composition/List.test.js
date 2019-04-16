import React from 'react';
import ReactDOM from "react-dom";
import Card from './Card';
import STORE from '../store';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {
    // SMOKE
    it('renders', () => {
      const div = document.createElement('div');
      ReactDOM.render(<List header="test" cards={STORE.lists.map((card, i) => <Card title={card.title} content={card.content} key={i} />)} />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    // SNAPSHOT
    it('renders the UI as expected', () => {
      const tree = renderer
        .create(<List header="test" cards={STORE.lists.map((card, i) => <Card title={card.title} content={card.content} key={i} />)} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });