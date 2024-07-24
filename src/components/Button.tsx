"use client";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?: "primary" | "secondary" | "danger" | "success" | "warning";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-500/90",
    secondary: "bg-gray-500 text-white hover:bg-gray-500/90",
    danger: "bg-red-500 text-white hover:bg-red-500/90",
    success: "bg-green-500 text-white hover:bg-green-500/90",
    warning: "bg-yellow-500 text-white hover:bg-yellow-500/90"
};

const globalsStyle = "px-4 py-2 rounded relative flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";


export const Button = ({children, variant, onClick, disabled, ...props}) => {
    const style = variants[variant] || variants.primary;
    props.className = `${globalsStyle} ${style} ${props.className}`;
    return <button {...props} onClick={onClick} disabled={disabled}>{children}</button>;
}