import React from "react";
import styled from "styled-components";

const Tooltip = () => {
    return (
        <StyledWrapper>
            <ul className="example-2">
                <li className="icon-content">
                    <a href="https://linkedin.com/" aria-label="LinkedIn" data-social="linkedin">
                        <div className="filled" />
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16" xmlSpace="preserve">
                            <path
                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                    <div className="tooltip">LinkedIn</div>
                </li>

                <li className="icon-content">
                    <a href="https://www.instagram.com/" aria-label="Instagram" data-social="instagram">
                        <div className="filled" />
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16" xmlSpace="preserve">
                            <path
                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                    <div className="tooltip">Instagram</div>
                </li>

                <li className="icon-content">
                    <a href="https://behance.net" aria-label="Behance" data-social="behance">
                        <div className="filled" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 432 384">
                            <path
                                fill="currentColor"
                                d="M384 103H277V77h107v26zM208 203.5q12 17.5 12 42.5q0 20-8 35q-7 14-21 23q-12 9-30 14q-14 4-34 4H0V56h124q12 0 34 5q13 3 26 12q11 7 18 20q6 13 6 31q0 20-9.5 33.5T172 179q24 7 36 24.5zM55 163h61q17 0 26-6q10-7 10-23q0-9-3.5-15t-9.5-9q-6-4-12-5q-9-2-15-2H55v60zm107 80q0-20-11-29q-11-8-30-8H55v73h64q7 0 17-2q8-2 13.5-5.5T159 260q3-6 3-17zm264-3H289q0 24 13 37q12 11 34 11q15 0 27-8q12-9 14-18h46q-10 35-34 50q-24 16-55 16q-22 0-40-7t-31-21q-13-13-19-32q-7-18-7-40t7-40.5t20-32.5q13-13 30-21q18-8 40-8q24 0 42 9.5t30 25.5q11 15 17 37q5 21 3 42zm-52-34q-2-18-12-30q-9-10-29-10q-13 0-21 4.5T298.5 181t-6.5 13q-3 7-3 12h85z"
                            />
                        </svg>
                    </a>
                    <div className="tooltip">Behance</div>
                </li>

                <li className="icon-content">
                    <a href="https://pinterest.com" aria-label="Pinterest" data-social="pinterest">
                        <div className="filled" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 20 20">
                            <path
                                fill="currentColor"
                                d="M10.015 0C4.484 0 0 4.473 0 9.99c0 4.232 2.638 7.847 6.364 9.3c-.088-.79-.166-2.002.034-2.865c.183-.78 1.175-4.964 1.175-4.964s-.3-.6-.3-1.484c0-1.386.808-2.426 1.811-2.426c.855 0 1.268.64 1.268 1.406c0 .858-.545 2.14-.829 3.327c-.238.994.502 1.804 1.483 1.804c1.778 0 3.148-1.87 3.148-4.572c0-2.384-1.723-4.058-4.184-4.058c-2.848 0-4.518 2.135-4.518 4.333c0 .86.329 1.786.742 2.284c.083.1.094.188.071.288c-.075.312-.244.999-.279 1.135c-.044.188-.143.226-.335.138c-1.249-.575-2.032-2.398-2.032-3.872c0-3.146 2.296-6.043 6.616-6.043c3.474 0 6.175 2.472 6.175 5.769c0 3.446-2.178 6.218-5.207 6.218c-1.014 0-1.966-.524-2.304-1.149l-.625 2.374c-.225.87-.84 1.96-1.252 2.621A10.07 10.07 0 0 0 9.988 20C15.508 20 20 15.53 20 10.01C20 4.493 15.507.023 9.988.023L10.015 0Z"
                            />
                        </svg>
                    </a>
                    <div className="tooltip">Pinterest</div>
                </li>

                <li className="icon-content">
                    <a href="https://wa.me/201234567890" aria-label="WhatsApp" data-social="whatsapp">
                        <div className="filled" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 432 432">
                            <path
                                fill="currentColor"
                                d="M364.5 65Q427 127 427 214.5T364.5 364T214 426q-54 0-101-26L0 429l30-109Q2 271 2 214q0-87 62-149T214 3t150.5 62zM214 390q73 0 125-51.5T391 214T339 89.5T214 38T89.5 89.5T38 214q0 51 27 94l4 6l-18 65l67-17l6 3q42 25 90 25zm97-132q9 5 10 7q4 6-3 25q-3 8-15 15.5t-21 9.5q-18 2-33-2q-17-6-30-11q-8-4-15.5-8.5t-14.5-9t-13-9.5t-11.5-10t-10.5-10.5t-8.5-9.5t-7-8.5t-5.5-7t-3.5-5L128 222q-22-29-22-55q0-24 19-44q6-7 14-7q6 0 10 1q8 0 12 9q2 3 6 13l7 17.5l3 8.5q3 5 1 9q-3 7-5 9l-3 3l-3 3.5l-2 2.5q-6 6-3 11q13 22 30 37q13 11 43 26q7 3 11-1q12-15 17-21q4-6 12-3q6 3 36 17z"
                            />
                        </svg>
                    </a>
                    <div className="tooltip">WhatsApp</div>
                </li>
            </ul>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    ul {
        list-style: none;
    }

    .example-2 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .example-2 .icon-content {
        margin: 0 10px;
        position: relative;
    }
    .example-2 .icon-content .tooltip {
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        padding: 6px 10px;
        border-radius: 5px;
        opacity: 0;
        visibility: hidden;
        font-size: 14px;
        transition: all 0.3s ease;
    }
    .example-2 .icon-content:hover .tooltip {
        opacity: 1;
        visibility: visible;
        top: -50px;
    }
    .example-2 .icon-content a {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #4d4d4d;
        background-color: #fff;
        transition: all 0.3s ease-in-out;
    }
    .example-2 .icon-content a:hover {
        box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
    }
    .example-2 .icon-content a svg {
        position: relative;
        z-index: 1;
        width: 20px;
        height: 20px;
    }
    .example-2 .icon-content a:hover {
        color: white;
    }
    .example-2 .icon-content a .filled {
        position: absolute;
        top: auto;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        background-color: #000;
        transition: all 0.3s ease-in-out;
    }
    .example-2 .icon-content a:hover .filled {
        height: 100%;
    }

    .example-2 .icon-content a[data-social="linkedin"] .filled,
    .example-2 .icon-content a[data-social="linkedin"] ~ .tooltip {
        background-color: #0274b3;
    }

    .example-2 .icon-content a[data-social="behance"] .filled,
    .example-2 .icon-content a[data-social="behance"] ~ .tooltip {
        background-color: #1769ff;
    }

    .example-2 .icon-content a[data-social="instagram"] .filled,
    .example-2 .icon-content a[data-social="instagram"] ~ .tooltip {
        background: linear-gradient(45deg, #405de6, #5b51db, #b33ab4, #c135b4, #e1306c, #fd1f1f);
    }

    .example-2 .icon-content a[data-social="pinterest"] .filled,
    .example-2 .icon-content a[data-social="pinterest"] ~ .tooltip {
        background-color: #e60023;
    }

    .example-2 .icon-content a[data-social="whatsapp"] .filled,
    .example-2 .icon-content a[data-social="whatsapp"] ~ .tooltip {
        background-color: #25d366;
    }
`;

export default Tooltip;
