package com.sseung.payment.example.enums;

import com.sseung.payment.example.service.PayStrategy;
import com.sseung.payment.example.service.impl.pay.BankStrategy;
import com.sseung.payment.example.service.impl.pay.CardStrategy;
import com.sseung.payment.example.service.impl.pay.SimpleStrategy;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Arrays;
import java.util.function.BiFunction;

@Getter
@AllArgsConstructor
public enum PayType {
    CARD("10", CardStrategy.class, PayType::getModuleSale, 2.0),
    BANK("20", BankStrategy.class, PayType::getModuleSale, 10.0),
    SIMPLE("30", SimpleStrategy.class, PayType::getModuleSale, 15.0);

    private final String cd;

    private final Class<? extends PayStrategy> strategyClass;

    private final BiFunction<PayType, String, Double> sale;

    private final Double baseSale;

    private static Double getModuleSale(PayType payType, String moduleType) {
        Double baseSale = ModuleType.findModule(moduleType).getBaseSale();
        return 1- (baseSale + payType.baseSale) / 1000;
    }

    public static PayType findPay(String payType) {
        return Arrays.stream(PayType.values())
                .filter(pay -> pay.cd.equals(payType))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("결제 정보가 잘 못 되었습니다."));
    }
}
