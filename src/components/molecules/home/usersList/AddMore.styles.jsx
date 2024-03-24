import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    font-weight: 500;

    & p {
        font-size: 14px;
        margin-bottom: 4px;
    }

    & h4{
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-color);
        margin-bottom: 8px;
    }
`