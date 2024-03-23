import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #F0EDFF;
    border-radius: 8px;
    gap: 12px;
    text-decoration: none;
    padding: 8px;
    cursor: pointer;
    
    &:hover {
        background-color: #eee;
    }

    & img {
        width: 24px;
        height: 24px;
    }
`

export const Text = styled.h2`
    font-size: 16px;
    font-weight: 700;
    color: black;
`