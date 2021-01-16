import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    width: 110px;
    height: 150px;
    border: 1px solid black;
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
            font-size: 3rem;
            padding: 0;
            margin: 0;
        }
    }

    transition: transform 100ms ease-in-out;

    :hover {
        transform: scale(1.1);
    }

    :active {
        transform: scale(1);
    }
`;
