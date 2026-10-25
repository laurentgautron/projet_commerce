import styled from "styled-components";

export const DivButtonsActions = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 20px;
    justify-content: flex_start;
    button {
        padding: 0.75rem 0.75rem;
        border: 1px solid #172554;
        border-radius: 8px;
        background-color: #172554;
        color: #f8fafc;
        transition:
            background-color 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
    }
    button:hover {
        background-color: #1d4ed8;
        border-color: #1d4ed8;
        color: #ffffff;
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(23, 37, 84, 0.2);
    }
`
