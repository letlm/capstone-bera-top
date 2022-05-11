import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    margin: 20px auto;
    justify-content: space-between;
    width: 90%;
    align-items: center;
    @media (min-width: 400px) {
        width: 400px;
    }

    .logo {
        display: flex;
        align-items: center;

        h1 {
            color: var(--yellow-1);
            font-weight: 700;
        }

        img {
            width: 50px;
            height: 50px;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
    }

    button {
        width: 80px;
        height: 27px;
        background: var(--grey-0);
        color: var(--yellow-1);
        padding: 0px;
        border-radius: 4px;
        border: 1px solid var(--yellow-1);
        font-weight: 800;
        line-height: 23px;
        :hover {
            background: var(--grey-1)
        }
    }
`;

export const Form = styled.div`
    background: var(--grey-0);
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    height: 80vh;
    border-radius: 4px;
    border: 1px solid var(--yellow-1);
    box-shadow: 0px 4px 4px rgba(255, 193, 37, 0.25);
    @media (min-width: 400px) {
        width: 400px;
    }

    div {
        text-align: center;
        h1 {
            margin-top: 15px;
            color: var(--yellow-1);
            font-weight: 700;
            line-height: 27px;
            font-size: 25px;
        }
    }

    form {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 90%;

        div {
            display: flex;
            flex-direction: column;
            text-align: left;

            label {
                color: var(--black);
                font-weight: 600;
                font-size: 13px;
                margin-left: 5px;
                margin-bottom: 2px;
            }

            input {
                background: var(--white);
                color: var(--black);
                border: 1px solid var(--yellow-1);
                border-radius: 4px;
                padding: 0 12px;
                border-radius: 3px;
                height: 36px;
                ::placeholder {
                    color: var(--grey-1);
                }
            }

            .inputError {
                border: 1px solid var(--red);
                ::placeholder {
                    color: var(--red);
                }
            }

            span {
                color: var(--red);
                font-size: 11px;
                margin-left: 5px;
                margin-top: 3px;
            }
        }

        button {
            font-size: 15px;
            font-weight: 500;
            color: var(--black);
            background: var(--yellow-1);
            height: 37px;
            border: 1px solid var(--yellow-1);
            border-radius: 4px;
            :hover {
                background: var(--yellow-0);
                border: 1px solid var(--yellow-0);
            }
        }

        .termsSection {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-items: center;

            label {
                font-size: 12px;
            }

            a {
                font-size: 12px;
                color: var(--yellow-1);
            }
        }

        .loginSection {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 0 auto;

            button {
                margin-left: 5px;
                background: none;
                border: none;

                height: 20px;
                color: var(--yellow-1);
            }
        }
    }
`;
