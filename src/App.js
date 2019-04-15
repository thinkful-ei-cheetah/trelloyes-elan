import React, { Component } from 'react';
import './App.css';
import STORE from './store';
import List from './composition/List';



class App extends Component {
  render() {
    const listArray = STORE.lists;
    const newListArray = listArray.map((item => <List key={item.id} header={item.header} cards={item.cardIds.map(id => STORE.allCards[id])}/> ))
    return (
        <main className="App">
          <header className="App-header">
            <h1>Hello Trelloyes!</h1>
          </header>
          <div className="App-list">
            {newListArray}
          </div>
        </main>
    )
  }
}

export default App;
