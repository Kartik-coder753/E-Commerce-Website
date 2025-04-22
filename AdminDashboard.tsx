import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Users, 
  Package, 
  LayoutDashboard, 
  Settings, 
  LogOut,
  LineChart,
  DollarSign 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ProductList from '../components/admin/ProductList';
import OrderList from '../components/admin/OrderList';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if not admin
  React.useEffect(() => {
    if (!isAdmin) {
      navigate('/login');
    }
  }, [isAdmin, navigate]);
  
  if (!isAdmin) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <ShoppingBag size={48} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Access Denied</h2>
          <p className="text-gray-600">You don't have permission to view this page.</p>
        </div>
      </div>
    );
  }
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <div className="pt-20 min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 bg-purple-700 text-white">
                <div className="flex items-center">
                  <ShoppingBag className="mr-2" size={24} />
                  <h2 className="text-xl font-bold">ZAYRA Admin</h2>
                </div>
              </div>
              
              <nav className="p-4">
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setActiveTab('dashboard')}
                      className={`w-full flex items-center px-4 py-2 rounded-md text-left ${
                        activeTab === 'dashboard' 
                          ? 'bg-purple-100 text-purple-700 font-medium' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <LayoutDashboard size={18} className="mr-3" />
                      Dashboard
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('products')}
                      className={`w-full flex items-center px-4 py-2 rounded-md text-left ${
                        activeTab === 'products' 
                          ? 'bg-purple-100 text-purple-700 font-medium' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Package size={18} className="mr-3" />
                      Products
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('orders')}
                      className={`w-full flex items-center px-4 py-2 rounded-md text-left ${
                        activeTab === 'orders' 
                          ? 'bg-purple-100 text-purple-700 font-medium' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <ShoppingBag size={18} className="mr-3" />
                      Orders
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('customers')}
                      className={`w-full flex items-center px-4 py-2 rounded-md text-left ${
                        activeTab === 'customers' 
                          ? 'bg-purple-100 text-purple-700 font-medium' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Users size={18} className="mr-3" />
                      Customers
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('settings')}
                      className={`w-full flex items-center px-4 py-2 rounded-md text-left ${
                        activeTab === 'settings' 
                          ? 'bg-purple-100 text-purple-700 font-medium' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Settings size={18} className="mr-3" />
                      Settings
                    </button>
                  </li>
                  <li className="pt-4 border-t">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-2 rounded-md text-left text-gray-600 hover:bg-gray-100"
                    >
                      <LogOut size={18} className="mr-3" />
                      Logout
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-4">
            {activeTab === 'dashboard' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                    <div className="rounded-full bg-blue-100 p-3 mr-4">
                      <ShoppingBag className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 uppercase">Orders</h3>
                      <p className="text-2xl font-bold text-gray-800">125</p>
                      <p className="text-xs text-green-600">+12% from last month</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                    <div className="rounded-full bg-green-100 p-3 mr-4">
                      <DollarSign className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 uppercase">Revenue</h3>
                      <p className="text-2xl font-bold text-gray-800">$24,560</p>
                      <p className="text-xs text-green-600">+8% from last month</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                    <div className="rounded-full bg-purple-100 p-3 mr-4">
                      <Users className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 uppercase">Customers</h3>
                      <p className="text-2xl font-bold text-gray-800">1,823</p>
                      <p className="text-xs text-green-600">+5% from last month</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                    <div className="rounded-full bg-yellow-100 p-3 mr-4">
                      <Package className="text-yellow-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 uppercase">Products</h3>
                      <p className="text-2xl font-bold text-gray-800">384</p>
                      <p className="text-xs text-yellow-600">12 low stock</p>
                    </div>
                  </div>
                </div>
                
                {/* Recent Orders */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h3>
                  <OrderList />
                </div>
              </div>
            )}
            
            {activeTab === 'products' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Management</h2>
                <ProductList />
              </div>
            )}
            
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Management</h2>
                <OrderList />
              </div>
            )}
            
            {activeTab === 'customers' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Management</h2>
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <Users size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Customer Management</h3>
                  <p className="text-gray-600">This feature is coming soon.</p>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h2>
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <Settings size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Settings</h3>
                  <p className="text-gray-600">This feature is coming soon.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;