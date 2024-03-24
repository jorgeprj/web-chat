import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 15px 20px;
    gap: 8px;
    cursor: pointer;

    &:hover {
        background-color: #f0f2f5;
    }

    svg {
        width: 30px;
        height: 30px;
        background-color: #ccc;
        border-radius: 50%;
        min-width: fit-content;
    }

    &.active {
        background-color: #f0f2f5;
    }

    & img {
        width: 42px;
        height: 42px;
    }
`;

export const Name = styled.h4`
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
`;

export const LastMessage = styled.p`
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;