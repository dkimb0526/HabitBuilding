"use client";
import React from "react"
import styled from "styled-components";
import {useGlobalState } from "@/app/context/globalProvider";
import Image from "next/image";

import menu  from "@/app/utils/menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


function Sidebar(){

    const{ theme } = useGlobalState();

    const router = useRouter();
    const pathname = usePathname();

    const handleClick= (link:string) => {
        router.push(link);
    };


    return(
        <SidebarStyled theme = { theme }>
            
            <div className = "profile">
                <div className="profile-overlay">
                </div>
                <div className = "image">
                <Image width = {70} height={70} src = "/luffy.png" alt = "profile" />
                <h1>
                    <span>
                        Luffy
                    </span>
                    <span>
                        Monkey
                    </span>
                </h1>
                </div>
            </div>
            <ul className = "nav-items">{menu.map((item)=>{
                const link = item.link;
                return (
                <li 
                className = {`nav-item ${pathname === link ? "active" : ""}`} 
                onClick={() => {
                    handleClick(link)
                }}>
                    {item.icon}
                    <Link href={link}>
                        {item.title}
                    </Link>
                </li>);
            })}</ul>
            <button></button>
            </SidebarStyled>
    )
}

const SidebarStyled = styled.nav`
    position: relative;
    width: ${(props) => props.theme.sidebarWidth};
    background-color : ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radidus: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export default Sidebar