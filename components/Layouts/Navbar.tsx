"use client";
import { getRoleName, getUserEmail, getUserName, removeAuth } from "@/lib/authentication";
import { Avatar, Dropdown } from "flowbite-react";
import { useRouter } from "next/navigation";
import React from "react";




export default function Navbar() {
    const router = useRouter();

    const [email, setEmail] = React.useState<string | undefined>("");
    const [name, setName] = React.useState<string | undefined>("");
    const [role, setRole] = React.useState<string | undefined>("");

    const handleLogout = () => {
        removeAuth();
        router.push("/login");
    }

    React.useEffect(() => {
        const email = getUserEmail();
        const name = getUserName();
        const role = getRoleName();

        setEmail(email);
        setName(name);
        setRole(role);
    }, [])

    
    
    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button
                            data-drawer-target="logo-sidebar"
                            data-drawer-toggle="logo-sidebar"
                            aria-controls="logo-sidebar"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                />
                            </svg>
                        </button>
                        <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
                            <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="h-8 mr-3"
                                alt="FlowBite Logo"
                            />
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                MyApp
                            </span>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <div className="flex space-x-3 items-center ml-3">
                            <div className="flex flex-col">
                                <div className="text-xs text-end text-blue-500">Hallo {role},</div>
                                <div className="text-sm">{name}</div>
                            </div>
                            <div>
                            <Dropdown inline label={ <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded /> } >
                                <Dropdown.Header>
                                    <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                                    <span className="block text-sm text-center">{name}</span>
                                    <span className="block truncate text-sm font-medium text-center">{email}</span>
                                </Dropdown.Header>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                            </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}