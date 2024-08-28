package com.rizzzle;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.rizzzle.services.PaymentService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class PaymentServiceTest {

    @Mock
    private RazorpayClient razorpayClient;

    @InjectMocks
    private PaymentService paymentService;

    @Test
    public void testCreatePaymentSession() throws Exception {
        Order order = new Order();
        when(razorpayClient.Orders.create(any(HashMap.class))).thenReturn(order);

        Order result = paymentService.createPaymentSession("1", "basic");
        assertNotNull(result);
    }

    @Test
    public void testVerifyPayment() {
        assertTrue(paymentService.verifyPayment("payment_id"));
    }

    @Test
    public void testRefundPayment() {
        assertTrue(paymentService.refundPayment("payment_id"));
    }
}
