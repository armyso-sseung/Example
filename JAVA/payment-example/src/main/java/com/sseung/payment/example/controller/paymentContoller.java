package com.sseung.payment.example.controller;

import com.sseung.payment.example.dto.ModuleInfo;
import com.sseung.payment.example.dto.PaymentSearch;
import com.sseung.payment.example.service.ModuleStrategyContext;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
@RequiredArgsConstructor
public class paymentContoller {
    private final ModuleStrategyContext moduleStrategyContext;

    @GetMapping("/{moduleType}")
    public ModuleInfo getModuleInfo(@PathVariable String moduleType) {
        return moduleStrategyContext.execute(moduleType);
    }

    @PostMapping("/{moduleType}/{payType}")
    public void pay(@RequestBody PaymentSearch search) {
        moduleStrategyContext.pay(search);
    }
}
