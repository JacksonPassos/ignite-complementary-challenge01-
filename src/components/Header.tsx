import '../styles/header.scss'

interface HeaderProps {
    title: string
}

export function Header(Props: HeaderProps) {
    const { title } = Props
    return (
        <header>
            <span className="category">Categoria:<span> {title}</span></span>
        </header>  
    )
}