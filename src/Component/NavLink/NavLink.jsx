import styled from "styled-components";
import { Link } from "react-router";

export const NavLink = styled(Link)`
    color: #f8fafc;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    transition: color 0.2s ease, background-color 0.2s ease;

    &:hover {
        color: #93c5fd;
        background-color: rgba(255, 255, 255, 0.08);
    }

    &:focus-visible {
        outline: 2px solid #93c5fd;
        outline-offset: 3px;
    }
`