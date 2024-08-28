package com.rizzzle.controllers;

import com.rizzzle.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/create")
    public ResponseEntity<?> createPaymentSession(@RequestParam String userId, @RequestParam String planId) {
        return ResponseEntity.ok(paymentService.createPaymentSession(userId, planId));
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyPayment(@RequestParam String paymentId) {
        return ResponseEntity.ok(paymentService.verifyPayment(paymentId));
    }

    @PostMapping("/refund")
    public ResponseEntity<?> refundPayment(@RequestParam String paymentId) {
        return ResponseEntity.ok(paymentService.refundPayment(paymentId));
    }
}
