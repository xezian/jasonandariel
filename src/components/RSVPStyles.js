import styled from 'styled-components'
import flowerborder from '../images/flowerborder.png'
import flowerborder2 from '../images/flowerborder2.png'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Dancing Script', cursive;
  font-size: 1.3rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.3);
  background-image: url(${flowerborder}), url(${flowerborder2});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  background-color: #efedec72;
  border-radius: 6px;
  width: 600px;
  margin-bottom: 20px;
  @media screen and (max-width: 725px) {
    width: 100vw;
  }
  hr {
    display: block;
    height: 1px;
    width: 100%;
    border: 0;
    border-top: 1px solid #b03045af;
    margin: 1em 0;
    padding: 0;
  }
  input,
  textarea,
  div.name {
    font-family: 'Josefin Slab', georgia, serif;
    border: 1px solid #b03045af;
    &:focus {
      outline: 0;
      background-color: #efefef !important;
    }
  }
  details textarea {
    resize: vertical;
  }
  div.name {
    min-width: 200px;
    position: relative;
    word-break: break-all;
    width: auto;
    min-height: 30px;
    background-color: #d1e6ef;
    border-radius: 7px;
    margin-bottom: 10px;
    text-align: center;
  }
  .namelabel {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .radio-toolbar,
  .tacos {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .taco {
    margin-bottom: 10px;
  }
  .hints {
    margin: 5px 0%;
    color: #b03045;
  }
  .heart {
    color: #b03045af;
  }
  button {
    font-size: 13px;
    text-align: center;
    color: #fff;
    outline: none;
    padding: 12px 60px;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
    background-color: #b03045af;
    border-radius: 6px;
    letter-spacing: 1.5px;
    &:hover {
      box-shadow: 2px 5px 10px rgba(0, 0, 0.1, 0.2);
    }
    &:focus,
    &:active {
      box-shadow: none;
    }
  }
`
export default Card
