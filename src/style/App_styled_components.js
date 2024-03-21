import styled from "styled-components";

function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const Wrapper = styled.div`
    padding: 4em;
    background: papayawhip;
  `;

  return (
    <Wrapper>
      <Title>안녕하세요</Title>
    </Wrapper>
  );
}

export default App;
