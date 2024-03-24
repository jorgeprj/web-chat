import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--primary-color);
    height: 100vh;
    width: 50%;
    padding-left: 80px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    gap: 4px;
    color: #fff;

    & h2 {
        font-weight: 700;
    }

    & p {
        font-size: 20px;
    }
`;

export const LogoContent = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fff;

    & img {
        width: 40px;
        height: 40px;
    }
`;