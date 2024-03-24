import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    width: 20%;
    min-width: 200px;
    overflow-y: auto;
    background-color: #FEFCFF;
    
    &::-webkit-scrollbar {
        width: 6px;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.2);
    }
`

export const Chats = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fefcff;
    border-radius: 15px;
    height: 80%;
    z-index: 10;
    overflow-y: auto;
    &::-webkit-scrollbar {
		width: 6px;
		border-radius: 10px;
  	}

  	&::-webkit-scrollbar-thumb {
    	border-radius: 10px;
    	background-color: rgba(0, 0, 0, 0.2);
  	}
`

export const Content = styled.div``;

export const Divider = styled.div`
	border-top: solid 1px #ddd;
`;