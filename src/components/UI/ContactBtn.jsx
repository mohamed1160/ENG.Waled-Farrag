
import styled from "styled-components";

const Button = () => {
    return (
        <StyledWrapper>
            <button className="boton-elegante">Let's Talk</button>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .boton-elegante {
        padding: 10px 20px;
        border: 2px solid #2c2c2c;
        background-color: #52525233;
        color: #ffffff;
        cursor: pointer;
        border-radius: 8px;
        transition: all 0.5s ease;
        outline: none;
        position: relative;
        overflow: hidden;
    }

    .boton-elegante::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%);
        transform: scale(0);
        transition: transform 0.5s ease;
    }

    .boton-elegante:hover::after {
        transform: scale(4);
    }

    .boton-elegante:hover {
        border-color: #666666;
        background: #292929;
    }
`;

export default Button;
