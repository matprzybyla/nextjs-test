import Link from "next/link"
import { useRouter } from "next/router"
import { PropsWithChildren } from "react"

type ActiveLinkProps = PropsWithChildren & {
    href: string
}
export const ActiveLink: React.FC<ActiveLinkProps> = ({href, children}) => {
    const currentRoute = useRouter().route;    
    return <Link href={href} className={currentRoute === href ? "selected": ""}>
        {children}
    </Link>
}