import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";

const socials = [
    {
        name: "LinkedIn",
        href: "https://linkedin.com/",
        color: "#0274b3",
        icon: <FaLinkedin />,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/",
        color: "linear-gradient(45deg, #405de6, #833ab4, #fd1d1d, #fcb045)",
        icon: <FaInstagram />
        ,
    },
    {
        name: "Behance",
        href: "https://behance.net/",
        color: "#1769ff",
        icon: <FaBehance />,
    },
    {
        name: "Pinterest",
        href: "https://pinterest.com/",
        color: "#e60023",
        icon: <FaPinterest />,
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/201234567890",
        color: "#25d366",
        icon: <FaWhatsapp />,
    },
];

const Social = () => {
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
