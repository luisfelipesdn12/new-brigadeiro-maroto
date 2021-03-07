import styled from "styled-components";

export const QuantityControlWrapper = styled.div`
    font-family: 'Rubik', 'Glacial Indifference', 'Open Sans', sans-serif;
    display: flex;
    justify-content: space-between;
    color: #1a202c;
    font-weight: 600;
    font-size: 1.125rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const ClickableControl = styled.span`
    cursor: pointer;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    border-radius: 9999px;
    padding-left: .5rem;
    padding-right: .5rem;

    :hover {
        background-color: #edf2f7;
    }
    `;

export const QuantityDisplay = styled.span`
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    font-weight: 500;
`;