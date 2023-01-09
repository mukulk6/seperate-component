import logo from './logo.svg';
import './App.css';
import React from 'react';
import Profile from './components/Profile/Profile';
import NavbarComponent from './components/Navbar/NavbarComponent';
import { SigninContext } from './contexts/SigninContext';
import Signin from './components/Signin/Signin';
import {FieldLevelValidationExample, FormComponent} from './components/FormComponent/FormComponent';
import Signupform from './components/Signupform/Signupform';
import FormikArrays from './components/FormikArrays/FormikArrays';
import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll';
// import ReduxProvider from 'redux';
// import ModalProvider from '../src/components/ModalProvider';

function App() {
  const [userName, setUserName] = React.useState(false)
  const [displayProfile, setDisplayProfile] = React.useState(false)
  return (
    <div class="container">
      {/* <NavbarComponent /> */}
      {/* <ReduxProvider store={store} >
        <ModalProvider>
        </ModalProvider>
      </ReduxProvider> */}
        <div>
      <SigninContext.Provider
        value={{ userName, setUserName, setDisplayProfile }}
      >
        {displayProfile ? <Profile /> : <Signin />}
      </SigninContext.Provider>
      <FieldLevelValidationExample />
     <div class="row">
      <Signupform />
      <FormikArrays />
      <InfiniteScroll />
     </div>
    </div>
    </div>
  );
}

export default App;
