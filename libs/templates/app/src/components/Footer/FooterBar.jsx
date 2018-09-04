import styled from 'styled-components';

const FooterBar = styled.div`
  clip-path: polygon(0% 100%, 100% 100%, 100% 0, 93% 20%, 87% 0, 80% 20%, 73% 0, 66% 20%, 59% 0, 51% 20%, 44% 0, 36% 20%, 29% 0, 21% 20%, 14% 0, 7% 20%, 0 0);
  background: rgb(47,58,153);
  background: linear-gradient(135deg, rgba(47,58,153,1) 34%, rgba(2,118,214,1) 100%);
  padding: 1rem 0 0 0;
  margin-right:5rem;
  text-align: right;
  position: fixed;
  bottom: 0;
  color: #e3fcec;
  width:100vw;
  height:3vh;
`;

export default FooterBar;
