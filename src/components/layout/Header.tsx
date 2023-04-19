import { ActiveLink } from "../common/ActiveLink"

export const Header = () => {
    return <header className="bg-slate-800">
        <nav>
            <ul className="flex gap-6 p-4">
                <li><ActiveLink href="/">Home</ActiveLink></li>
                <li><ActiveLink href="/users">Users</ActiveLink></li>
                <li><ActiveLink href="/about">About</ActiveLink></li>
            </ul>
        </nav>
    </header>
}