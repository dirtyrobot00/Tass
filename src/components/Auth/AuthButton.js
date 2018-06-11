import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils';

const Wrapper = styled.div`
    margin-top: 1rem;
    padding-top: 1rem;
    padding-bottom: 0.5rem;

    background: ${oc.cyan[6]};
    color: white;

    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;

    &:hover {
        background: ${oc.cyan[6]};
        ${shadow(0)}
    }

    &:active {
        background: ${oc.cyan[6]};
    }

`;

const AuthButton = ({children, onClick}) => (
    <Wrapper onClick={onClick}>
        {children}
    </Wrapper>
);

export default AuthButton;
