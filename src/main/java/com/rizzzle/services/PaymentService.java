package com.rizzzle.services;

import com.rizzzle.models.Payment;
import com.rizzzle.repositories.PaymentRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private RazorpayClient razorpayClient;

    public Payment createPayment(Payment payment) {
        // Logic to create a new payment in the database
        return paymentRepository.save(payment);
    }

    public Optional<Payment> getPaymentById(Long id) {
        // Logic to fetch payment by ID
        return paymentRepository.findById(id);
    }

    public List<Payment> getUserPayments(Long userId) {
        // Logic to fetch payments for a user
        return paymentRepository.findAllByUserId(userId);
    }

    public Order createRazorpayOrder(Double amount, String currency) throws Exception {
        // Logic to create an order with Razorpay
        Order order = razorpayClient.orders.create(
            new JSONObject()
                .put("amount", amount * 100)
                .put("currency", currency)
                .put("payment_capture", 1)
        );
        return order;
    }

    public void refundPayment(String paymentId) throws Exception {
        // Logic to refund a payment with Razorpay
        razorpayClient.payments.refund(paymentId);
    }
}
