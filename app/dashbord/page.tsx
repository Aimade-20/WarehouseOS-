"use client"
import Header from "@/src/components/Header"
import { SessionProvider } from "next-auth/react"

export default function Dashbord() {
    return(
        <>
        <SessionProvider>
        <Header/>
        </SessionProvider>
        </>
    )
}