import styled from 'styled-components'

export const CardBoardContainer = styled.div`
    display: flex; 
    width: 80%;
    height: 300px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .card-board-header {
        p {
            font-size: 3rem;
            font-weight: bold;
            text-shadow: 2px 2px 4px #AAAAAA;
            padding: 0;
            margin: 0;
            margin-bottom: 10px;
        }
    }
`;