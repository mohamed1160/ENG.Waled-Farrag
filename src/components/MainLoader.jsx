import React from "react";
import styled from "styled-components";

const Loader = () => {
    return (
        <StyledWrapper>
            <div className="card">
                <div className="loader">
                    <div className="words">
                        <span className="word">buttons</span>
                        <span className="word">forms</span>
                        <span className="word">switches</span>
                        <span className="word">cards</span>
                        <span className="word">buttons</span>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .card {
        --bg-color: #303030;
        background-color: var(--bg-color);
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loader {
        color: rgb(124, 124, 124);
        font-family: "Poppins", sans-serif;
        font-weight: 600; 
        font-size: 60px; 
        box-sizing: content-box;
        height: 70px; 
        padding: 10px 10px;
        display: flex;
        border-radius: 8px;
    }

    .words {
        overflow: hidden;
        position: relative;
    }

    .words::after {
        content: "";
        position: absolute;
        inset: 0;
        
        background: linear-gradient(var(--bg-color) 15%, transparent);
        z-index: 20;
    }

    .word {
        display: block;
        
        color: white; 
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);

        animation: spin_4991 5s infinite;
    }

    @keyframes spin_4991 {
        10% {
            transform: translateY(-102%);
        }
        25% {
            transform: translateY(-100%);
        }
        35% {
            transform: translateY(-202%);
        }
        50% {
            transform: translateY(-200%);
        }
        60% {
            transform: translateY(-302%);
        }
        75% {
            transform: translateY(-300%);
        }
        85% {
            transform: translateY(-402%);
        }
        100% {
            transform: translateY(-400%);
        }
    }
`;

export default Loader;
