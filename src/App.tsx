import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import Chart from './components/Chart';
import WorldMap from './components/WorldMap';
import NotificationsSidebar from './components/NotificationsSidebar';
import BarChart from './components/BarChart';

function App() {
  return (
    <div className="flex h-screen bg-[#141414]">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-white mb-6">eCommerce</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Customers" value="3,781" change={11.01} />
              <StatCard title="Orders" value="1,219" change={-0.03} />
              <StatCard title="Revenue" value="695" prefix="$" change={15.03} />
              <StatCard title="Growth" value="30.1" suffix="%" change={6.08} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Chart title="Projections vs Actuals">
                <BarChart />
              </Chart>
            </div>
            <div>
              <WorldMap />
            </div>
          </div>
        </main>
      </div>
      
      <NotificationsSidebar />
    </div>
  );
}

export default App;