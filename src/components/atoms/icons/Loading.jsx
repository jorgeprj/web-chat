import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

const Loader = styled.span`
    width: 48px;
    height: 48px;
    border: 5px solid #191919;
    border-bottom-color: #ffffff;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const Loading = () => {
    return (
        <Container>
            <Loader />
        </Container>
    );
};

export default Loading;
