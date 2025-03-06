package com.sseung.payment.example.service.impl.module;

import com.sseung.payment.example.dto.Module;
import com.sseung.payment.example.dto.ModuleInfo;
import com.sseung.payment.example.enums.ModuleType;
import com.sseung.payment.example.service.ModuleStrategy;
import com.sseung.payment.example.service.PayStrategyContext;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class TossStrategy implements ModuleStrategy {
    private final PayStrategyContext payStrategyContext;

    @Override
    public ModuleInfo module() {
        return ModuleInfo.builder()
                .module(new Module())
                .payList(List.of())
                .build();
    }

    @Override
    public void pay(String payType, int price) {
        int result = payStrategyContext.discount(ModuleType.TOSS.getCd(), payType, price);
        log.info("결제 금액: {}", result);
    }
}
