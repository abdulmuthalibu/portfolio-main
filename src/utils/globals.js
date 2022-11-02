import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Muli', sans-serif;
  }
  
  html {
    scroll-behavior: smooth;
  }
  *, 
  *::after,
  *::before {
    box-sizing: inherit;
  }

  img {
    width: 100%;
    height: auto;
  }
  
  a {
    text-decoration: none;
    color : black;
  }
  
   p {
    margin: 50px 0px;
    color: black;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
   }
   
  .remove-margin {
    margin : 0;
    @media only screen and (min-width:960px) {
      margin-top:50px;
    }
  }


  .link {
    width: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 163.19%;
    display: inline;
    color: black;
    letter-spacing: 0.03em;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.3s ease 0s;
    text-transform: uppercase;

    @media only screen and (min-width:960px) {
      margin: 50px 0px;
    }
  }

  .link:hover {
    border-bottom: 2px solid black;
  }

  .email {
    text-transform: lowercase;
  }
  .ml-10 {
    margin-left :10px;
  }

  .social-link {
    margin: 0px 0px 0px 30px;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease 0s;
    padding-bottom: 3px;
    font-weight: 500;
    
    &:hover {
      border-bottom: 2px solid black;
    }
  }

  .project-desc {
    margin: 50px 0px 16px;

    @media (min-width:960px) {
      max-width: 70%;
    }
  }

  .disabled {
    color : grey;
    cursor: pointer;

    &:hover {
      border-color : transparent!important;
    }
  }
`;
