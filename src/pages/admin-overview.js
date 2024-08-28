import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdminOverviewPage = ({ fetchAdminOverview }) => {
    const [overviewData, setOverviewData] = useState({});

    useEffect(() => {
        fetchAdminOverview().then(data => {
            setOverviewData(data);
        });
    }, []);

    return (
        <div className="admin-overview-page">
            <Header />
            <main>
                <h2>Admin Overview</h2>
                <p>Total Users: {overviewData.totalUsers}</p>
                <p>Total Matches: {overviewData.totalMatches}</p>
                <p>Total Payments: {overviewData.totalPayments}</p>
                {/* Additional admin features can be added here */}
            </main>
            <Footer />
        </div>
    );
}

export default AdminOverviewPage;
