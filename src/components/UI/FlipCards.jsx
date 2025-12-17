import React from "react";
import styled from "styled-components";

const Card = () => {
    return (
        <StyledWrapper>
            <div className="card">
                <p>
                    <span>HOVER ME</span>
                </p>
                <p>
                    <span>HOVER ME</span>
                </p>
                <p>
                    <span>HOVER ME</span>
                </p>
                <p>
                    <span>HOVER ME</span>
                </p>
                
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .card {
        height: 100vh;
        border-radius: 4px;
        background: #212121;
        display: flex;
        gap: 15px;
        padding: 0.4em;
    }

    .card p {
        height: 100%;
        flex: 1;
        overflow: hidden;
        cursor: pointer;
        border-radius: 2px;
        transition: all 0.8s;
        background: #212121;
        border: 2px solid #fafafa;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card p:hover {
        flex: 4;
    }

    .card p span {
        min-width: 14em;
        padding: 0.5em;
        text-align: center;
        transform: rotate(-90deg);
        transition: all 0.5s;
        text-transform: uppercase;
        color: #fff;
        letter-spacing: 0.1em;
    }

    .card p:hover span {
        transform: rotate(0);
    }
`;

export default Card;
