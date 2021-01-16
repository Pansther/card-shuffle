import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    width: 100px;
    height: 150px;
    border: 1px solid black;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin: 10px; 
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
`;
