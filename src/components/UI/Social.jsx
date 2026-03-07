import React, { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";
import axios from "axios";

const TOKEN =
    "e168cc232c6102f95d724baaf7a93b4fabc54caa078080c4f6c7fdbb4db56579ead53ed96e0890b13a23b1aa425f819a472b04ac6ee0b01d616eebe0b40c2216dfc5de272f210f47fd80b77002a60bb94fef86b60a092c5e83969d90153c15335ed563273e9a9cef2bedd97ff28601e5dc87e4c71b0980d4292b4629e43ff43d";

const Social = () => {
    const [phoneNumber, setPhoneNumber] = useState("201234567890"); 

    useEffect(() => {
        const fetchPhoneNumber = async () => {
            try {
                const res = await axios.get("https://passionate-bee-93c3fc2f7c.strapiapp.com/api/phone");
                const phone = res.data?.data?.phone;
                setPhoneNumber(phone || "201234567890");



                // console.log(res.data.data.phone);
                
            } catch (error) {
                console.error("Error fetching phone number:", error);
            }
        };

        fetchPhoneNumber();
    }, []);

    const socials = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/waledfarrag/",
            color: "#0274b3",
            icon: <FaLinkedin />,
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/waledfarrag/",
            color: "linear-gradient(45deg, #405de6, #833ab4, #fd1d1d, #fcb045)",
            icon: <FaInstagram />,
        },
        {
            name: "Behance",
            href: "https://www.behance.net/WaledFarrag",
            color: "#1769ff",
            icon: <FaBehance />,
        },
        {
            name: "Pinterest",
            href: "https://www.pinterest.com/waledfarrag7/",
            color: "#e60023",
            icon: <FaPinterest />,
        },
        {
            name: "WhatsApp",
            href: `https://wa.me/${phoneNumber}`, 
            color: "#25d366",
            icon: <FaWhatsapp />,
        },
    ];

    return (
        <StyledWrapper>
            <ul className="socials">
                {socials.map((social) => (
                    <li key={social.name} className="icon-content">
                        <a href={social.href} aria-label={social.name} target="_blank" rel="noopener noreferrer" data-social={social.name.toLowerCase()}>
                            {social.icon}
                            <div className="filled" />
                        </a>
                    </li>
                ))}
            </ul>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }

    .icon-content a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        background: #fff;
        color: #4d4d4d;
        transition: all 0.3s ease-in-out;
    }

    .icon-content a svg {
        width: 22px;
        height: 22px;
        z-index: 1;
        transition: all 0.3s ease-in-out;
    }

    .filled {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 0;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
    }

    .icon-content a:hover .filled {
        height: 100%;
    }

    .icon-content a[data-social="linkedin"] .filled {
        background: #0274b3;
    }
    .icon-content a[data-social="instagram"] .filled {
        background: linear-gradient(45deg, #405de6, #833ab4, #fd1d1d, #fcb045);
    }
    .icon-content a[data-social="behance"] .filled {
        background: #1769ff;
    }
    .icon-content a[data-social="pinterest"] .filled {
        background: #e60023;
    }
    .icon-content a[data-social="whatsapp"] .filled {
        background: #25d366;
    }

    .icon-content a:hover svg {
        color: #fff;
    }

    @media (max-width: 768px) {
        ul {
            gap: 15px;
        }
        .icon-content a {
            width: 32px;
            height: 32px;
        }
        .icon-content a svg {
            width: 18px;
            height: 18px;
        }
    }
`;

export default Social;
