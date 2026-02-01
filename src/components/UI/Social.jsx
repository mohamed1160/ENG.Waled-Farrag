import React from "react";
import styled from "styled-components";

const socials = [
    {
        name: "LinkedIn",
        href: "https://linkedin.com/",
        color: "#0274b3",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/",
        color: "linear-gradient(45deg, #405de6, #833ab4, #fd1d1d, #fcb045)",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
            </svg>
        ),
    },
    {
        name: "Behance",
        href: "https://behance.net/",
        color: "#1769ff",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432 384" fill="currentColor">
                <path d="M384 103H277V77h107v26zM208 203.5q12 17.5 12 42.5q0 20-8 35q-7 14-21 23q-12 9-30 14q-14 4-34 4H0V56h124q12 0 34 5q13 3 26 12q11 7 18 20q6 13 6 31q0 20-9.5 33.5T172 179q24 7 36 24.5zM55 163h61q17 0 26-6q10-7 10-23q0-9-3.5-15t-9.5-9q-6-4-12-5q-9-2-15-2H55v60zm107 80q0-20-11-29q-11-8-30-8H55v73h64q7 0 17-2q8-2 13.5-5.5T159 260q3-6 3-17zm264-3H289q0 24 13 37q12 11 34 11q15 0 27-8q12-9 14-18h46q-10 35-34 50q-24 16-55 16q-22 0-40-7t-31-21q-13-13-19-32q-7-18-7-40t7-40.5t20-32.5q13-13 30-21q18-8 40-8q24 0 42 9.5t30 25.5q11 15 17 37q5 21 3 42z" />
            </svg>
        ),
    },
    {
        name: "Pinterest",
        href: "https://pinterest.com/",
        color: "#e60023",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.015 0C4.484 0 0 4.473 0 9.99c0 4.232 2.638 7.847 6.364 9.3c-.088-.79-.166-2.002.034-2.865c.183-.78 1.175-4.964 1.175-4.964s-.3-.6-.3-1.484c0-1.386.808-2.426 1.811-2.426c.855 0 1.268.64 1.268 1.406c0 .858-.545 2.14-.829 3.327c-.238.994.502 1.804 1.483 1.804c1.778 0 3.148-1.87 3.148-4.572c0-2.384-1.723-4.058-4.184-4.058c-2.848 0-4.518 2.135-4.518 4.333c0 .86.329 1.786.742 2.284c.083.1.094.188.071.288c-.075.312-.244.999-.279 1.135c-.044.188-.143.226-.335.138c-1.249-.575-2.032-2.398-2.032-3.872c0-3.146 2.296-6.043 6.616-6.043c3.474 0 6.175 2.472 6.175 5.769c0 3.446-2.178 6.218-5.207 6.218c-1.014 0-1.966-.524-2.304-1.149l-.625 2.374c-.225.87-.84 1.96-1.252 2.621A10.07 10.07 0 0 0 9.988 20C15.508 20 20 15.53 20 10.01C20 4.493 15.507.023 9.988.023L10.015 0Z" />
            </svg>
        ),
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/201234567890",
        color: "#25d366",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                    fill="currentColor"
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                />
            </svg>
        ),
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
