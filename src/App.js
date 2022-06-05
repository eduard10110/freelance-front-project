import Login from "components/login";
import Footer from "containers/footer";
import Header from "containers/header";
import React from "react";
import RouteBuilder from "routes";
import {useSelector, shallowEqual} from 'react-redux';
import {showLoginModal, showRegistrationModal} from 'store/selectors/app';

export default function App() {

  const loginModalVisible = useSelector(showLoginModal, shallowEqual);


  return (
    <div>
      <Header />
      <RouteBuilder />
      {loginModalVisible && <Login/>}
      {/* <Footer /> */}
    </div>
  );
}
