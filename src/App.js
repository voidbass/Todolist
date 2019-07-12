import React from 'react';
import NoteList from './noteList';
import FormNote from './formNote';
import './App.css';
import Consumer from './Consumer';


class App extends React.Component {
    render() {
        return (
            <div>
                <div className="titleApp">
                    <div className="container flex">
                        <i className="far fa-clipboard"></i>
                        <span className="text-center">To Do List</span>
                    </div>
                </div>
                <br />
                <Consumer>
                    <FormNote />
                </Consumer>
                <br />
                <Consumer>
                    <NoteList />
                </Consumer>
            </div>
        );
    }
}

export default App;
