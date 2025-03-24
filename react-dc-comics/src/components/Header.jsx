const menuItems = [
    { label: 'Characters', url: '#' },
    { label: 'Comics', url: '#' },
    { label: 'Movies', url: '#' },
    { label: 'TV', url: '#' },
    { label: 'Games', url: '#' },
    { label: 'Collectibles', url: '#' },
    { label: 'Videos', url: '#' },
    { label: 'Fans', url: '#' },
    { label: 'News', url: '#' },
    { label: 'Shop', url: '#' }
];

export default function Header() {
    return (
        <header>
            <div id="header_box">
                <div id="logo_box">
                    <img src="img/dc-logo.png" alt="" />
                </div>
                <div id="list_box">
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.url}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}