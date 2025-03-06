package com.sseung.payment.example.service;

import com.sseung.payment.example.enums.PayType;
import com.sseung.payment.example.service.impl.pay.BankStrategy;
import com.sseung.payment.example.service.impl.pay.CardStrategy;
import com.sseung.payment.example.service.impl.pay.SimpleStrategy;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
@RequiredArgsConstructor
public class PayStrategyContext {
    private final Map<String, PayStrategy> payStrategyMap;

    @PostConstruct
    private void init() {
        payStrategyMap.put(PayType.CARD.getCd(), new CardStrategy());
        payStrategyMap.put(PayType.BANK.getCd(), new BankStrategy());
        payStrategyMap.put(PayType.SIMPLE.getCd(), new SimpleStrategy());
    }

    public int discount(String moduleType, String payType, int price) {
        return payStrategyMap.get(payType).discount(moduleType, price);
    }
}
