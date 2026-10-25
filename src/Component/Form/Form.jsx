import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 50px;
    margin-top: 50px;
    div {
        width: 50vh;
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    textarea {
        width: 250px;
        height: 150px;
        resize: both;
    }
`