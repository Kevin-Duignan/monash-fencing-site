import * as React from "react";
import { Link } from "gatsby";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white p-4">
        <ul className="flex justify-between items-center">
          <div className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/training" className="hover:underline">
                Training
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </div>

          <li>
            <Link
              to="/membership"
              className="bg-gray-100 hover:bg-gray-300 p-2 rounded"
            >
              Membership
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex-grow">
        <h1 className="text-3xl font-bold mb-4">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
