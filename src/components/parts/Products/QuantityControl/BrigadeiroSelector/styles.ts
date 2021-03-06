import styled from "styled-components";

export const BrigadeiroOptionWrapper = styled.div`
    display: flex;
    padding: 0.5rem 1rem;
    height: max-content;
`;

export const BrigadeiroInformation = styled.div`
    display: block;
    text-align: left;
`;

export const BrigadeiroPicture = styled.img`
    height: 3rem;
    margin-right: 1rem;
    border-radius: 9999px;
`;

export const BrigadeiroName = styled.h1`
    font-size: 1rem;
`;

export const BrigadeiroDescription = styled.p`
    font-size: 0.9rem;
`;

export const BrigadeiroQuantityControlWrapper = styled.div`
    width: max-content;
    display: flex;

    justify-content: center;

    border: 1px solid #e2e8f080;
    border-radius: 9999px;

    padding: 0 0.1rem;

    max-height: 2rem;
`;

export const BrigadeiroInformationAndControl = styled.div`
    display: flex;
    justify-content: space-between;
    width: -webkit-fill-available;
`;
