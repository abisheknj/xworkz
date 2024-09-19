import React from 'react';
import {
    Navbar, NavbarBrand, NavbarContent, NavbarItem,
    NavbarMenuToggle, NavbarMenu, NavbarMenuItem,
    Link, Button, DropdownItem, DropdownTrigger,
    Dropdown, DropdownMenu
} from "@nextui-org/react";

// Define the data for regular menu items and dropdown items
const regularMenuItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Softwares", href: "/softwares" },
    { name: "Direction", href: "direction" },
];

const dropdownMenus = [
    {
        name: "Products",
        items: [
            { name: "Autoscaling", description: "ACME scales apps to meet user demand, automagically, based on load.", href: "/autoscaling" },
            { name: "Usage Metrics", description: "Real-time metrics to debug issues. Slow query added? We’ll show you exactly where.", href: "/usage-metrics" }
        ]
    },
    {
        name: "PLacements",
        items: [
            { name: "Placement Stories", description: "Description for item 1.", href: "/item-1" },
            { name: "Placement", description: "Description for item 2.", href: "/item-2" }
        ]
    }
];

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div>
            <Navbar onMenuOpenChange={setIsMenuOpen} position="sticky">
                <NavbarContent>
                    <NavbarBrand>
                        <img src="https://www.x-workz.in/static/media/Logo.cf195593dc1b3f921369.png" width="100" height="50" alt="Xworkz" />
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">

                    {regularMenuItems.map((item, index) => (
                        <NavbarItem key={index} isActive={index === 1}>
                            <Link
                                color="foreground"
                                // color={index === 2 ? "primary" : index === regularMenuItems.length - 1 ? "danger" : "foreground"}
                                className="w-full"
                                href={item.href}
                                size="md"
                            >
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
                    {dropdownMenus.map((dropdown, index) => (
                        <NavbarItem>
                        <Dropdown key={index}>
                            <NavbarItem>
                                <DropdownTrigger>
                                    <Button
                                        disableRipple
                                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                        radius="sm"
                                        variant="light"
                                        size='lg'
                                    >
                                        {dropdown.name}
                                    </Button>
                                </DropdownTrigger>
                            </NavbarItem>
                            <DropdownMenu aria-label={dropdown.name} className="w-[340px]">
                                {dropdown.items.map((item, subIndex) => (
                                    <DropdownItem key={subIndex} description={item.description}>
                                        <Link href={item.href} color="inherit">
                                            {item.name}
                                        </Link>
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        </NavbarItem>
                    ))}

                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                </NavbarContent>

                <NavbarMenu>
                    {regularMenuItems.map((item, index) => (
                        <NavbarMenuItem key={index}>
                            <Link
                                color={index === 2 ? "primary" : index === regularMenuItems.length - 1 ? "danger" : "foreground"}
                                className="w-full"
                                href={item.href}
                                size="lg"
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}

                    {dropdownMenus.map((dropdown, index) => (
                        <Dropdown key={index}>
                            <NavbarItem>
                                <DropdownTrigger>
                                    <Button
                                        disableRipple
                                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                        radius="sm"
                                        variant="light"
                                        size='lg'
                                    >
                                        {dropdown.name}
                                    </Button>
                                </DropdownTrigger>
                            </NavbarItem>
                            <DropdownMenu aria-label={dropdown.name} className="w-[340px]">
                                {dropdown.items.map((item, subIndex) => (
                                    <DropdownItem key={subIndex} description={item.description}>
                                        <Link href={item.href} color="inherit">
                                            {item.name}
                                        </Link>
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    );
}
