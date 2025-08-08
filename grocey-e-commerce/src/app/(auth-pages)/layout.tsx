export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark">
            <body>
                {children}
            </body>
        </html>
    )
}