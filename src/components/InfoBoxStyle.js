import styled from 'styled-components';

export const StyledPlainInfoBox = styled.div `
    padding: 10px;
    margin: 10px;
    color: #333;
    background: #fafafa;
    border: 1px solid #ccc;
`

export const StyledErrorDiv = styled(StyledPlainInfoBox) `
    color: #ba3939;
    background: #ffe0e0;
    border: 1px solid #a33a3a;
`