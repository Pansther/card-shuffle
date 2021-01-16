import styled from 'styled-components'

export const CardBoardContainer = styled.div`
    display: flex;
    width: 80%;
    height: 350px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .card-board-header {
        p {
            font-size: 3rem;
            font-weight: bold;
            text-shadow: 2px 2px 4px #aaaaaa;
            padding: 0;
            margin: 0;
            margin-bottom: 10px;
        }
    }

    .button-box {
        display: flex;
        margin: 10px auto;

        button {
            display: flex;
            height: 40px;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            padding-top: 5px;
            border-radius: 5px;
            margin: 0 10px;
        }

        i {
            margin-right: 10px;
            margin-top: -3px;
            margin-left: -2px;
        }
    }
`;