import styled from "@emotion/styled";

export const List = styled.ul`
    display: grid;
    grid-template-columns: none;
    grid-template-columns: repeat(auto-fill, minmax(280px,1fr));
    /* grid-column-gap: 29px; */
    grid-row-gap: 50px;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
`;