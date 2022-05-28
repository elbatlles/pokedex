import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Message } from "semantic-ui-react";
import { clearError } from "../../actions";
 import Loader from "../Loader";
import Menu from "../Menu";

import "./styles.css";

const Layout = ({ children }) => {
 
  const errorMessage = useSelector((state) => state.get('error'));
  const loading = useSelector((state) => state.getIn(['ui','loading']));
 
  const dispatch = useDispatch();

  const handleDismiss = () => {
    dispatch(clearError());
  };

  return (
    <div>
      <Menu />
      {errorMessage && (
        <div className="wrapper">
          <Message
            onDismiss={handleDismiss}
            content={errorMessage}
            color="red"
          />
        </div>
      )}
    {loading && <Loader  /> }  
      <div className="Layout-content">{children}</div>
    </div>
  );
};

export default Layout;
