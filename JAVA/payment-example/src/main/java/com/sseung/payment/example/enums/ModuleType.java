package com.sseung.payment.example.enums;

import com.sseung.payment.example.service.ModuleStrategy;
import com.sseung.payment.example.service.impl.module.InicisStrategy;
import com.sseung.payment.example.service.impl.module.NaverStrategy;
import com.sseung.payment.example.service.impl.module.TossStrategy;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Arrays;

@Getter
@AllArgsConstructor
public enum ModuleType {
    INICIS("10", InicisStrategy.class, 5.0),
    TOSS("20", TossStrategy.class, 6.0),
    NAVER("30", NaverStrategy.class, 3.0);

    private final String cd;

    private final Class<? extends ModuleStrategy> moduleStrategy;

    private final Double baseSale;

    public static ModuleType findModule(String modyleType) {
        return Arrays.stream(ModuleType.values())
                .filter(module -> module.cd.equals(modyleType))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("결제 요청이 잘못 되었습니다."));
    }
}
