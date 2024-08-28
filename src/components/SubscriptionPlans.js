import React from 'react';

const SubscriptionPlans = ({ plans, initiatePayment }) => {
    return (
        <div className="subscription-plans">
            <h3>Choose Your Plan</h3>
            {plans.map((plan, index) => (
                <div key={index} className="plan">
                    <h4>{plan.name}</h4>
                    <p>{plan.description}</p>
                    <button onClick={() => initiatePayment(plan.id)}>Subscribe</button>
                </div>
            ))}
        </div>
    );
}

export default SubscriptionPlans;


//Instructions: Insert your Razorpay API key in the payment initialization section.
