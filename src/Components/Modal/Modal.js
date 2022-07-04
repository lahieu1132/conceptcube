import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";

import './index.scss'

const portalRoot = document.getElementById("portal-root");

const ScrollDisabler = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;

const Modal = ({ isOpen, close, children }) => {
  const contentRef = useRef();

  useEffect(() => {
    if (!isOpen) return;

    function listener(evt) {
      if (contentRef.current?.contains(evt.target)) return;
      close();
    }

    window.addEventListener("click", listener);

    return () => {
      window.removeEventListener("click", listener);
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modal">
          {children}
      </div>
      <ScrollDisabler />
    </>,
    portalRoot
  );
};

export default Modal;