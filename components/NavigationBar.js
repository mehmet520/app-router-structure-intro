import Link from 'next/link';

export default function NavigationBar() {
    return (
        <nav>
            <ul style= {{ display: 'flex', gap: '1rem' }}>
                <li>
                    <Link href='/'>Startseite</Link>
                </li>
                <li>
                    <Link href='/about'>Über uns</Link>
                </li>
                <li>
                    <Link href='/products'>Produkte</Link>
                </li>
            </ul>
        </nav>
    )
}