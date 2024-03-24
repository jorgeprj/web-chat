import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 60%;
    gap: 12px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;

    & h2 {
        font-size: 24px;
    }

    & p {
        font-size: 16px;
    }

    & a {
        text-decoration: none;
        color: black;

        &:hover {
            text-decoration: underline;
        }
    }
`;