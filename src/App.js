<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar/NavbarComponent';

function App() {
  return (
    <div class="container">
      <NavbarComponent />
    </div>
=======
import React from 'react';
import './App.css';
import {Navbar} from './app/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {PostsLists} from './features/posts/PostsLists';
import { AddPostForm } from './features/posts/AddPostForm';
import {SinglePostPage} from './features/posts/SinglePostPage';
import {EditPostForm} from './features/posts/EditPostForm';


function App() {
  return (
    <Router>
      <Navbar />
    <div className="App">
    <Routes>
      <Route exact path="/" element={<React.Fragment><AddPostForm /><PostsLists /></React.Fragment>} />
      <Route exact path="/posts/:postId" element={<SinglePostPage />} />
      <Route exact path="/editPost/:postId" element = {<EditPostForm />} />
  </Routes>
    </div>
    </Router>
>>>>>>> a414fe02007bcdfad8fbe46a0d733e8f48ea53a6
  );
}

export default App;
