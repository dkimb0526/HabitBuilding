"use client";
import React from "react"
import styled from "styled-components";
import {useGlobalState } from "@/app/context/globalProvider";
import Image from "next/image";

function Sidebar(){
const{ theme } = useGlobalState();

    return(
        <SidebarStyled theme = { theme }>
            Sidebar
            <div className = "profile">
                <div className="profile-overlay">
                </div>
                <Image width = {70} height={70} src = "/luffy.png" alt = "profile" />
            </div>
            </SidebarStyled>
    )
}

const SidebarStyled = styled.nav`
    position: relative;
    width: ${(props) => props.theme.sidebarWidth};
    background-color : ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radidus: 1rem;
`;
export default Sidebar