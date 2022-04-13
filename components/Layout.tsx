import Link from "next/link";

export default function Layout({ children }) {
  function NavLink({ href, children: name }) {
    return (
      <Link href={href}>
        <a className="bg-secondary-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary-700">
          {name}
        </a>
      </Link>
    );
  }

  return (
    <div className="bg-primary-800 min-h-[100vh] text-gray-100">
      <div className="w-full">
        <nav className="bg-primary-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex items-center">
                  <div className="block text-2xl text-white font-bold">moecomp</div>
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/browse">Browse</NavLink>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <NavLink href="/create">New Comp</NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div>{children}</div>
    </div>
  );
}
