import React from 'react';
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = React.useState('/admin/dashboard');

  React.useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const history = useHistory();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => history.push(item.key)}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: 'Dashboard',
            icon: <AppstoreOutlined />,
            key: '/admin/dashboard',
          },
          {
            label: 'Products',
            icon: <ShopOutlined />,
            key: '/admin/products',
          },
          {
            label: 'Orders',
            icon: <ShoppingCartOutlined />,
            key: '/admin/orders',
          },
          {
            label: 'Customers',
            icon: <UserOutlined />,
            key: '/admin/customers',
          },
        ]}
      />
    </div>
  );
}

export default SideMenu;
