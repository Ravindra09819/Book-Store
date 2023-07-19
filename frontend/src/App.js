import Header from './componets/Header';
import { Routes , Route } from 'react-router-dom';
import React from 'react';
import Home from './componets/Home';
import AddBook from './componets/AddBook';
import Books from './componets/Book/Books';
import About from './componets/About';
import BookDetail from './componets/Book/BookDetail';


function App() {
  return (
      <React.Fragment>
        <header>
          <Header/>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/add' element={<AddBook/>} exact/>
            <Route path='/books' element={<Books/>} exact/>
            <Route path='/about' element={<About/>} exact/>
            <Route path='/books/:id' element={<BookDetail/>} exact/>




           
          </Routes>
        </main>
      </React.Fragment>
  );
}

export default App;
