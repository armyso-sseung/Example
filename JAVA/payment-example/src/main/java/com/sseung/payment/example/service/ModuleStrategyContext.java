package com.sseung.payment.example.service;

import com.sseung.payment.example.dto.ModuleInfo;
import com.sseung.payment.example.dto.PaymentSearch;
import com.sseung.payment.example.enums.ModuleType;
import com.sseung.payment.example.service.impl.module.InicisStrategy;
import com.sseung.payment.example.service.impl.module.NaverStrategy;
import com.sseung.payment.example.service.impl.module.TossStrategy;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
@RequiredArgsConstructor
public class ModuleStrategyContext {
    private final Map<String, ModuleStrategy> moduleStrategyMap;

    private final PayStrategyContext payStrategyContext;

    @PostConstruct
    private void init() {
        moduleStrategyMap.put(ModuleType.INICIS.getCd(), new InicisStrategy(payStrategyContext));
        moduleStrategyMap.put(ModuleType.TOSS.getCd(), new TossStrategy(payStrategyContext));
        moduleStrategyMap.put(ModuleType.NAVER.getCd(), new NaverStrategy(payStrategyContext));
    }

    public ModuleInfo execute(String moduleType) {
        ModuleStrategy strategy = moduleStrategyMap.get(moduleType);
        return strategy.module();
    }

    public void pay(PaymentSearch search) {
        ModuleStrategy strategy = moduleStrategyMap.get(search.getModuleType());
        strategy.pay(search.getPayType(), search.getPrice());
    }
}
