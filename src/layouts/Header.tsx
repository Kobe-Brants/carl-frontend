import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { MenuItem } from 'primereact/menuitem';
import { useAuthContext } from '../services/contexts/AuthContext.tsx';
import { Avatar } from 'primereact/avatar';

const Header = () => {
  const { user } = useAuthContext();

  const items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => {},
    },
    {
      label: 'Menu',
      icon: 'pi pi-fw pi-list',
      items: [
        { label: 'Salads', icon: 'pi pi-fw pi-check' },
        { label: 'Sandwiches', icon: 'pi pi-fw pi-check' },
        { label: 'Beverages', icon: 'pi pi-fw pi-check' },
      ],
    },
    {
      label: 'Order History',
      icon: 'pi pi-fw pi-clock',
      command: () => {},
    },
  ];

  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            <img src="/logo.png" alt="logo" className="h-20" />
          </Link>
          <Menubar model={items} />
          <div>
            {user ? (
              <>
                <Avatar
                  label={user.email.charAt(0).toUpperCase()}
                  size="large"
                  shape="circle"
                />
              </>
            ) : (
              <Button label="Login" className="p-button-text" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
