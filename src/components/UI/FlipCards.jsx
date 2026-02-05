import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const TOKEN =
    "7756fb530c1873c03ad43e0f3d644dd6fa8896909002bfcbf77ce9c2d1678c28d5b3087b631bf1f318970b41373ab92190cdf898cc1b611e5a3e0874af8fba69c9806076d6803cad3d4ff54ff6a1025bb96dbc1175c226ab9c7cfe41a039b1d8fc66ec6a74d1f7df1d43e3da79286929910b1a01a432bfe7174847ab0ac03097";

const Card = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [works, setWorks] = useState([]);

    useEffect(() => {
        const fetchWorks = async () => {
            try {
                const res = await axios.get("http://localhost:1337/api/works?populate=*", { headers: { Authorization: `Bearer ${TOKEN}` } });
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
                            backgroundImage: work.workImg ? `url(http://localhost:1337${work.workImg.url})` : "none",
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
