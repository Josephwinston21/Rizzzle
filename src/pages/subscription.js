import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubscriptionPlans from '../components/SubscriptionPlans';

const SubscriptionPage = ({ plans, initiatePayment }) => {
    return (
        <div className="subscription-page">
            <Header />
            <main>
                <h2>Subscription Plans</h2>
                <SubscriptionPlans plans={plans} initiatePayment={initiatePayment} />
            </main>
            <Footer />
        </div>
    );
}

export default SubscriptionPage;
