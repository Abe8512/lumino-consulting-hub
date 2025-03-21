
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-lumino-800">
                Lumino<span className="text-lumino-500">Strategies</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Transforming operations for sustainable business growth and efficiency.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/#services" className="text-gray-600 hover:text-lumino-600 text-sm">
                  Process Optimization
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-600 hover:text-lumino-600 text-sm">
                  Workflow Analysis
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-600 hover:text-lumino-600 text-sm">
                  Strategic Planning
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-600 hover:text-lumino-600 text-sm">
                  Technology Integration
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/#about" className="text-gray-600 hover:text-lumino-600 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="text-gray-600 hover:text-lumino-600 text-sm">
                  Client Stories
                </a>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-lumino-600 text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-lumino-600 text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/#contact" className="text-gray-600 hover:text-lumino-600 text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="mailto:info@luminostrategies.com" className="text-gray-600 hover:text-lumino-600 text-sm">
                  info@luminostrategies.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-gray-600 hover:text-lumino-600 text-sm">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <p className="text-gray-600 text-sm">
                  123 Innovation Drive, Suite 500<br />
                  Boston, MA 02108
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-500 text-sm">
            &copy; {currentYear} Lumino Strategies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
