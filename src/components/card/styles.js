import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    width: 110px;
    height: 150px;
    border: 1px solid #bbbbbb;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin: 10px;
    box-shadow: 2px 2px 4px #dddddd;

    user-select: none;

    :hover {
        cursor: pointer;
    }

    .digit-box {
        display: flex;
        /* background-color: red; */
        align-items: center;

        p {
            font-size: 3.5rem;
            padding: 0;
            margin: 0;
        }
    }

    .back-box {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        background-color: pink;
        color: white;
        width: 80%;
        height: 85%;
        border: 1px solid #bbbbbb;
        border-radius: 5px;
        justify-content: center;

        .back-circle {
            background: white;
            width: 40px;
            height: 40px;
            border: 1px solid #bbbbbb;
            border-radius: 100%;
        }
    }

    transition: transform 100ms ease-in-out;

    :hover {
        transform: scale(1.1);
    }

    :active {
        transform: scale(1.05);
    }
`;
