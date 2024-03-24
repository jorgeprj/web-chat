import styled from 'styled-components';

export const Container = styled.div`
    overflow-y: auto;
    margin-top: 24px;
    height: calc(100vh - 262px);
    padding-right: 8px;

    &::-webkit-scrollbar {
        width: 8px;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

export const MDate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    & span {
        padding: 5px 15px;
        background: #F2F2F2;
        border-radius: 40px;
    }
`