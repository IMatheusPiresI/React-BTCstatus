import styled from 'styled-components';

export const Container = styled.section`
    max-width: 780px;
    height: 300px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 1rem;
    border: 1px solid #CD0000;
    border-radius: 20px;

    & li {
        padding: 10px 5px;
        list-style: none;
        display: flex;
        justify-content: space-between;
        
        & span:last-child {
            margin-left: auto;
        }

        & + li {
            border-top: 1px solid #CD0000;
        }
    }

    ::-webkit-scrollbar {
        width: 15px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 50px;
        margin: 10px 0px;
    }

    ::-webkit-scrollbar-thumb {
        width: 1px;
        background: #CD0000;
        border-radius: 50px;
    }

`;

export const BoxChart = styled.div`
    width: 1000px;
`;