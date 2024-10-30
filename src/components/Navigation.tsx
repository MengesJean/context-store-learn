import Link from "next/link";

type NavigationProps = {
    children: React.ReactNode;
}

type NavigationItemProps = {
    link: string;
    children: React.ReactNode;
}

export const Navigation = ({children}: NavigationProps) => {
    return (
        <div className={"w-full"}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {children}
            </div>
        </div>
    );
}

export const NavigationLogo = ({children}: NavigationProps) => {
    return (
        <div className="flex-shrink-0 flex items-center">
            {children}
        </div>
    );
}

export const NavigationList = ({children}: NavigationProps) => {
    return (
        <div className="flex space-x-4 items-center">
            {children}
        </div>
    );
}

export const NavigationItem = ({link, children}: NavigationItemProps) => {
    return (
        <Link href={link} className="flex">
            {children}
        </Link>
    );
}