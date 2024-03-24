import styled from 'styled-components';

export const SearchInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
    height: 42px;
    max-width: 40%;
    border-radius: 40px;
    color: #fff;

    &::placeholder {
        color: rgba(255, 255, 255, 0.5); 
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;