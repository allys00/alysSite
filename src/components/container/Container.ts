import  styled from 'styled-components';

const Container = styled.section`
  /* Adapt the colors based on primary prop */
  padding: 2rem;
  background-color: ${({ theme }: any) => theme.main};
  color: ${({ theme }: any) => theme.contrast};
  width: calc(100vw - 100px);
  height: 100vh;
  overflow: auto;
`;

export default Container