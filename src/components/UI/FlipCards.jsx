import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const TOKEN =
    "8af8ebf69a94129848d0dddcf013defc01429c620b13e99de4b5ee02ac73c93e14c153486d811f90b47df8d3ca3a7a49d78635f5dc2fbb021d0a13b4b3b95e633f85c793f052c493d38a72f991794b351fe0ae4d92936ea747bff09e08dc992a3175f57d246c7c31143ca727297ba7b54139b7bc5352e0029e2c30948d9b4cb5";

const Card = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [works, setWorks] = useState([]);

    useEffect(() => {
        const fetchWorks = async () => {
            try {
                const res = await axios.get("https://passionate-bee-93c3fc2f7c.strapiapp.com/api/works?populate=*",);
                console.log(res.data.data);
                setWorks(res.data.data || []);
            } catch (error) {
                console.error("Error fetching works:", error);
            }
        };

        fetchWorks();
    }, []);

    return (
        <StyledWrapper>
            <div className="card">
                {works.map((work, index) => (
                    <p
                        key={work.id}
                        className={activeIndex === index ? "active" : ""}
                        onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                        style={{
                            backgroundImage: work.workImg ? `url(${work.workImg.url})` : "none",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}>
                        <span>{work.workName}</span>
                    </p>
                ))}
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    /* Hidden by default */
    display: none;

    @media (min-width: 1024px) {
        /* Show only on desktop */
        display: block;

        .card {
            height: 100vh;
            display: flex;
            gap: 15px;
            padding: 0.4em;
        }

        .card p {
            flex: 1;
            display: flex;
            padding: 0.5em;
            align-items: center;
            justify-content: center;
            align-items: center;
            border-radius: 6px;
            overflow: hidden;
            cursor: pointer;
            border: 2px solid rgba(255, 255, 255, 0.1);
            background: #212121; /* fallback background */
            transition: flex 0.5s ease;
        }

        .card p span {
            display: inline-block;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #fff;
            font-size: 1.2em;
            font-weight: 600;
            text-align: center;
            transform: rotate(-90deg);
            transition: transform 0.5s ease;
            padding: 0.5em;
            min-width: 14em;
            background: rgba(0, 0, 0, 0.8); /* semi-transparent background for text readability */
            border-radius: 4px;
        }

        .card p.active span,
        .card p:hover span {
            transform: rotate(0deg);
        }

        .card p:hover {
            flex: 4;
        }
    }

    /* Mobile & Tablet */
    @media (max-width: 1023px) {
        .card {
            display: none; 
        }
    }

    /* Optional: keep hover behavior consistent on desktop */
    .card p.active {
        flex: 4;
    }
`;

export default Card;
