import Link from "next/link";
import { ReactNode } from "react";

export default function Button({ children, href, className }: { children: ReactNode, href?: string, className?: string }) {
    return (
        <Link className={`w-full max-w-md text-center py-3 font-semibold uppercase rounded-full text-sm sm:text-base  ${className ? className : 'bg-gradient-to-r from-blue-500 to-blue-700 text-white border-[3px] border-blue-400'}`} href={href ? href : '#preco'}>{children}</Link>
    )
}