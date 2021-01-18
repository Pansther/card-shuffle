import styled from 'styled-components'

export const CardBoardContainer = styled.div`
    display: flex;
    width: 80%;
    height: 350px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    user-select: none;

    .card-board-header {
        p {
            font-size: 3rem;
            font-weight: bold;
            text-shadow: 2px 2px 4px #aaaaaa;
            padding: 0;
            margin: 0;
            margin-bottom: 10px;
        }

        p {
            transition: color 0.25s ease-in-out, transform 0.25s;
        }

        p:hover {
            cursor: pointer;
            color: hotpink;
            animation: swingHorizontal 1s ease;
            animation-iteration-count: 1;
            transition: color 0.25s ease-in-out, transform 0.25s;
            transform: scale(1.1);
        }

        p:active {
            transform: scale(1.07);
            transition: none;
        }

        @keyframes swingHorizontal {
            from {
                transform: scale(1);
            }
            15% {
                transform: translateX(5px);
            }
            30% {
                transform: translateX(-5px);
            }
            50% {
                transform: translateX(3px);
            }
            65% {
                transform: translateX(-3px);
            }
            80% {
                transform: translateX(2px);
            }
            100% {
                transform: translateX(0);
            }
            to {
                transform: scale(1.1);
            }
        }

        p {
            span {
                transition: color 200ms;
            }
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