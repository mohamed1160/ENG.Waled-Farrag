import React, { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";
import axios from "axios";

const TOKEN =
    "7756fb530c1873c03ad43e0f3d644dd6fa8896909002bfcbf77ce9c2d1678c28d5b3087b631bf1f318970b41373ab92190cdf898cc1b611e5a3e0874af8fba69c9806076d6803cad3d4ff54ff6a1025bb96dbc1175c226ab9c7cfe41a039b1d8fc66ec6a74d1f7df1d43e3da79286929910b1a01a432bfe7174847ab0ac03097";

const Social = () => {
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
