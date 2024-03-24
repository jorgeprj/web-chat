import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: #fff;
    cursor: pointer;

    & svg {
        font-size: 20px;
    }
`;

const IconButton = ({ icon, onClick }) => {
    return (
        <Container onClick={onClick}>
            {icon}
        </Container>
    );
};

export default IconButton;