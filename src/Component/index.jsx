import styled from 'styled-components';
import React from 'react';

const Corpo = styled.p`
  color: red;
  font-size: larger;
`;

const Component = () => {
    return (
        <div>
            <h1>Meu PDF</h1>
            <Corpo>Eu sou um titulo estilizado</Corpo>
        </div>
    )
};

export default Component;