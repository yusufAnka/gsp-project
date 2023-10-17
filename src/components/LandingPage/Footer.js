import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: black;;
  color: white;
  padding: 0.8rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 GSP Frontend Assessment. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
