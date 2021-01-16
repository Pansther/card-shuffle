import styled from "styled-components";

export const HandleCardListContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    position: fixed;
    bottom: 10px;
    align-items: center;

    .card-list-box {
        display: flex;
        min-width: 10%;
        min-height: 220px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        border: 1px solid gray;
        box-shadow: 2px 2px 4px #dddddd;
        border-radius: 10px;
        padding: 20px 30px;
        margin-bottom: 10px; 
    }

    .button-box {
        margin: 10px auto;

        button {
            display: flex;
            height: 40px;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            padding-top: 5px;
            border-radius: 5px;
        }

        i {
            margin-right: 10px;
            margin-top: -5px;
            margin-left: -2px;
        }
    }
`;
