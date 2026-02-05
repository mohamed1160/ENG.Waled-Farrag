
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const TOKEN =
    "7756fb530c1873c03ad43e0f3d644dd6fa8896909002bfcbf77ce9c2d1678c28d5b3087b631bf1f318970b41373ab92190cdf898cc1b611e5a3e0874af8fba69c9806076d6803cad3d4ff54ff6a1025bb96dbc1175c226ab9c7cfe41a039b1d8fc66ec6a74d1f7df1d43e3da79286929910b1a01a432bfe7174847ab0ac03097";

const Button = () => {
    const [phoneNumber, setPhoneNumber] = useState("201234567890"); 
    
        useEffect(() => {
            const fetchPhoneNumber = async () => {
                try {
                    const res = await axios.get("http://localhost:1337/api/phone", { headers: { Authorization: `Bearer ${TOKEN}` } });
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
