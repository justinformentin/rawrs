import styled from 'styled-components';

const MenuBar = styled.div`
  text-align: right;
  margin-top:-2.5rem;
  @media (max-width: 425px) {
    text-align:center
    padding-top:2.25rem;
  }
  a.hover {
    background-color: #2779bd;
`;

export default MenuBar;
