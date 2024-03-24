import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: fit-content;
    gap: 12px;
    color: white;
    font-size: 32px;

    & p {
        font-size: 14px;
        white-space: nowrap;
    }

    .logout {
        font-size: 16px;
        cursor: pointer;
        color: #e2e2e2;
    }

    .logout svg:hover {
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        & p {
            display: none;
        }
    }
`;