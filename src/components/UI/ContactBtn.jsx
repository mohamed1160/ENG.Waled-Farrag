
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const TOKEN =
"e168cc232c6102f95d724baaf7a93b4fabc54caa078080c4f6c7fdbb4db56579ead53ed96e0890b13a23b1aa425f819a472b04ac6ee0b01d616eebe0b40c2216dfc5de272f210f47fd80b77002a60bb94fef86b60a092c5e83969d90153c15335ed563273e9a9cef2bedd97ff28601e5dc87e4c71b0980d4292b4629e43ff43d";
const Button = () => {
    const [phoneNumber, setPhoneNumber] = useState("201234567890"); 
    
        useEffect(() => {
            const fetchPhoneNumber = async () => {
                try {
                    const res = await axios.get("https://passionate-bee-93c3fc2f7c.strapiapp.com/api/phone" );
                    const phone = res.data?.data?.phone;
                    setPhoneNumber(phone || "201234567890");
    
    
    
                    // console.log(res.data.data.phone);
                    
                } catch (error) {
                    console.error("Error fetching phone number:", error);
                }
            };
    
            fetchPhoneNumber();
        }, []);
    return (
        <StyledWrapper>
            <a href={`https://wa.me/${phoneNumber}`} target="_blank" className="boton-elegante">Let's Talk</a>
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
