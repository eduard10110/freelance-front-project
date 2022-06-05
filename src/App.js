import Login from "components/login";
import Registration from "components/registrstion";
import Footer from "containers/footer";
import Header from "containers/header";
import React from "react";
import RouteBuilder from "routes";
import {useSelector, shallowEqual} from 'react-redux';
import {showLoginModalSelector, showRegistrationModalSelector} from 'store/selectors/app';

export default function App() {

  const loginModalVisible = useSelector(showLoginModalSelector, shallowEqual);
  const registrationModalVisible = useSelector(showRegistrationModalSelector, shallowEqual);


  return (
    <div>
      <Header />
      <RouteBuilder />
      {loginModalVisible && <Login/>}
      {registrationModalVisible && <Registration/>}
      {/* <Footer /> */}
      <Footer />
    </div>
  );
}
