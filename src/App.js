import Login from "components/login";
import Registration from "components/registrstion";
import Footer from "containers/footer";
import Header from "containers/header";
import React from "react";
import RouteBuilder from "routes";
import {useSelector, shallowEqual} from 'react-redux';
import {showChatModal, showLoginModalSelector, showRegistrationModalSelector} from 'store/selectors/app';
import Chat from "containers/chat";

export default function App() {

  const loginModalVisible = useSelector(showLoginModalSelector, shallowEqual);
  const registrationModalVisible = useSelector(showRegistrationModalSelector, shallowEqual);
  const chatModal = useSelector(showChatModal, shallowEqual);


  return (
    <div>
      <Header />
      <RouteBuilder />
      {loginModalVisible && <Login/>}
      {registrationModalVisible && <Registration/>}
      {chatModal && <Chat/>}
      {/* <Footer /> */}
      <Footer />
    </div>
  );
}
