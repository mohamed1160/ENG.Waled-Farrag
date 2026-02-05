import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
            <a href={`https://wa.me/${phoneNumber}`} target="_blank" className="button">
                <svg className="svgIcon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                </svg>
                Craft With Me
            </a>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .button {
        padding: 15px 25px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        background-color: #fff;
        border-radius: 8px;
        color: rgb(19, 19, 19);
        font-weight: 600;
        font-size: 24px;
        border: none;
        position: relative;
        cursor: pointer;
        transition-duration: 0.5s;
        overflow: hidden;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.116);
    }

    .svgIcon {
        height: 25px;
        transition-duration: 1.5s;
    }

    .button::after {
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

    .button:hover::after {
        transform: scale(4);
    }

    .button:hover {
        border-color: #666666;
        background: #292929;
        color: #fff;
    }

    .button:hover .svgIcon {
        transform: rotate(250deg);
        transition-duration: 1.5s;
        fill: #fff;
    }

    /* Responsive Mobile */
    @media (max-width: 768px) {
        .button {
            font-size: 18px; 
            padding: 10px 15px; 
            justify-content: flex-start; 
            width: auto; 
        }

        .svgIcon {
            height: 20px; 
        }
    }
`;

export default Button;
