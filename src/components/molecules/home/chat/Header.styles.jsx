import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: white;

    & img {
        width: 48px;
        height: 48px;
    }

    & h4{
        font-size: 16px;
    }

    & p {
        font-size: 12px;
    }
`

export const TextInfo = styled.div``

export const Icons =  styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    color: #fff;

    & svg{
        cursor: pointer;
    }
`