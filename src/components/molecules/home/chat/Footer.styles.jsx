import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    margin-bottom: 20px;
    gap: 12px;
    svg {
        width: 24px;
        height: 24px;
        color: #ccc;
        transform: rotate(-45deg);
        &:hover{
            color: #808080;
        }
        cursor: pointer;
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;

    svg {
        width: 16px;
        height: 16px;
        color: #fff;
        transform: rotate(0);
        &:hover{
            color: #fff;
        }
    }
    `;

export const Input = styled.input`
    padding: 10px 20px;
    outline: none;
    border: 1px solid #ddd;
    border-radius: 40px;
    width: 100%;
    height: 50px;
    background-color: #F2F2F2;

    &::placeholder {
        color: #939393; 
    }
`;