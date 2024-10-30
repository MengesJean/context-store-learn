import Image from "next/image";

type CardProps = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

type CardImageProps = {
    src: string;
    alt: string;
}
export const Card = ({children}: CardProps) => {
    return (
        <div className={"rounded border bg-background flex flex-col"}>
            {children}
        </div>
    )
}

export const CardImage = ({src, alt}: CardImageProps) => {
    return (
        <div className={"w-full h-64 py-5"}>
            <Image src={src} alt={alt} width={500} height={500} className={"h-full w-full object-contain"}/>
        </div>
    )
}

export const CardContent = ({children}: CardProps) => {
    return (
        <div className={"p-4 text-foreground"}>
            {children}
        </div>
    )
}
export const CardFooter = ({children}: CardProps) => {
    return (
        <div className={"p-4 mt-auto mt-4"}>
            {children}
        </div>
    )
}