import React, { useState } from "react";
import styled from "styled-components";

const Card = ({ items = ["Card 1", "Card 2", "Card 3", "Card 4"] }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <StyledWrapper>
            <div className="card">
                {items.map((text, index) => (
                    <p key={index} className={activeIndex === index ? "active" : ""} onClick={() => setActiveIndex(index === activeIndex ? null : index)}>
                        <span>{text}</span>
                    </p>
                ))}
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .card {
        height: 100vh;
        display: flex;
        gap: 15px;
        padding: 0.4em;
    }

    .card p {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        overflow: hidden;
        cursor: pointer;
        border: 2px solid rgba(255, 255, 255, 0.1);
        background: #212121;
        transition: flex 0.5s ease;
    }

    .card p span {
        display: inline-block;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #fff;
        text-align: center;
        transform: rotate(-90deg);
        transition: transform 0.5s ease;
        padding: 0.5em;
        min-width: 14em;
    }

    .card p.active span,
    .card p:hover span {
        transform: rotate(0deg);
    }

    .card p:hover {
        flex: 4; 
    }

    /*  Mobile */
    @media (max-width: 768px) {
        .card {
            flex-direction: column; 
            height: 100vh;
            gap: 12px;
        }

        .card p {
            flex: 1;
            width: 100%;
        }

        .card p:hover {
            flex: 1; 
        }

        .card p.active {
            flex: 4; 
        }

        .card p span {
            transform: rotate(0);
            min-width: unset;
            font-size: 1rem;
        }
    }
`;

export default Card;
