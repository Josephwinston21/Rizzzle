import React from 'react';

const PaymentsScreen = ({ paymentHistory, initiateRefund }) => {
    return (
        <div className="payments-screen">
            <h3>Payment History</h3>
            <ul>
                {paymentHistory.map((payment, index) => (
                    <li key={index}>
                        <p>{payment.description}</p>
                        <p>{payment.amount}</p>
                        <button onClick={() => initiateRefund(payment.id)}>Request Refund</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PaymentsScreen;

//Instructions: Configure the Razorpay API key for payment processing.
