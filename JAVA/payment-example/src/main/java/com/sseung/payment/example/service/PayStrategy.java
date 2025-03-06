package com.sseung.payment.example.service;

public interface PayStrategy {
    int discount(String moduleType, int price);
}
