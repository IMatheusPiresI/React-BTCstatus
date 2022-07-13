import styled from "styled-components";

export const Container= styled.main`
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
`;

export const Title = styled.h1`
    margin: 0 auto;
    text-align: center;
`;

export const BoxFilters = styled.section`
    max-width: 780px;
    margin: 0 auto;
`;

export const Filters = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 0px;
`;

export const Button = styled.button`
    padding: 5px 10px;
    color: #FFF;
    background-color: #CD3333;
    border-radius: 20px;
    font-size: 1rem;
`;

export const CurrentPrice = styled.h2`
    text-align: center;
    margin: 10px 5px 0px;
    font-size: 20px;
    color: #C4C4C4;
`;