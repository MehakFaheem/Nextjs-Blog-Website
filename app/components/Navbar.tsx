import Link from "next/link"
const Navbar = () => {
    return (
        //Navigation bar with sticky position and glassmorphic effect
        <nav className="sticky top-0 z-50 bg-transparent backdrop-filter backdrop-blur-lg border-b border-gray-200">
            <div className="mx-10">
                {/* flex container to align items horizontally and sapce between logo and links */}
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <span className="text-2xl font-semibold">Blogs</span>
                    {/* Navigation Links */}
                    <div className="flex space-x-10">
                        <Link href="#" className="hover:text-purple-500">Home</Link>
                        <Link href="#" className="hover:text-purple-500">About</Link>
                        <Link href="#" className="hover:text-purple-500">Blogs</Link>
                        <Link href="#" className="hover:text-purple-500">Sign up</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}                                                                                                                                                                                       
export default Navbar