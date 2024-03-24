import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: 42px;
    margin-right: 80px;
    width: calc(80% - 213px);
    height: calc(100vh - 82px);
    justify-content: space-between;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Default = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 42px;
    margin-right: 80px;
    width: calc(75% - 213px);
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    margin-top: 12px;
`;

export const Info = styled.p`
    font-size: 16px;
    text-align: center;
    max-width: 500px;
`;