import styled from "styled-components";

export const Form = styled.div`
    background: var(--grey-0);
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    height: 60vh;
    position: relative;
    top: 10%;
    border-radius: 4px;
    border: 1px solid var(--yellow-1);
    box-shadow: 0px 4px 4px rgba(255, 193, 37, 0.25);
    @media (min-width: 320px) {
        width: 300px;
    }
    div {
        text-align: center;
        h1 {
            margin-top: 45px;
            color: var(--yellow-1);
            font-weight: 700;
            line-height: 27px;
            font-size: 25px;
            @media (min-width: 768px) {
                font-size: 38px;
            }
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
                @media (min-width: 768px) {
                    font-size: 16px;
                }
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
                @media (min-width: 768px) {
                    height: 40px;
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
            font-weight: 700;
            color: var(--white);
            background: var(--yellow-1);
            height: 37px;
            border: 1px solid var(--yellow-1);
            border-radius: 4px;
            :hover {
                background: var(--yellow-0);
                border: 1px solid var(--yellow-0);
                color: var(--black);
            }
        }
    }
    .signUpSection {
        p {
            margin-bottom: 45px;
            font-size: 12px;
        }
        button {
            width: 90%;
            height: 50px;
            font-size: 15px;
            font-weight: 700;
            margin: 0 auto 30px auto;
            color: var(--grey-0);
            background: var(--grey-1);
            border: 1px solid var(--yellow-1);
            border-radius: 3px;
            :hover {
                background: var(--grey-2);
            }
        }
    }
`;
