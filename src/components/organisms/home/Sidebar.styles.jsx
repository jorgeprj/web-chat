import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 91px;
    padding: 20px;
    gap: 32px;
    margin-top: 72px;
    height: calc(100vh - 155px);

    & p {
        font-size: 14px;
    }
    
    & svg {
        color: rgba(165, 165, 165, 1);

        &:hover{
            color: #767676;
        }
    }

    & .active svg {
        color: var(--primary-color);
    }
`