import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

const Footer = () => {
  const getModeDisplay = () => {
    const mode = import.meta.env.MODE;
    return mode === 'production' ? '' : `(${mode})`;
  };

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h5 className="font-bold mb-2">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-blue-400">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-blue-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="font-bold mb-2">Contact Me</h5>
            <p className="mb-2">Email: kobe.brants@euri.com</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h5 className="font-bold mb-2">Follow Me</h5>
            <div className="flex space-x-4">
              <Button icon="pi pi-linkedin" className="p-button-text" />
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm">
            Made by Kobe Brants © {new Date().getFullYear()} Carl Order. All
            rights reserved. {getModeDisplay()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
