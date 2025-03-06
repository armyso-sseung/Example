package com.sseung.payment.example.service.impl.pay;

import com.sseung.payment.example.enums.PayType;
import com.sseung.payment.example.service.PayStrategy;
import org.springframework.stereotype.Component;

@Component
public class BankStrategy implements PayStrategy {
    @Override
    public int discount(String moduleType, int price) {
        return (int) (price * PayType.BANK.getSale().apply(PayType.BANK, moduleType));
    }
}
