package com.sseung.payment.example.service;

import com.sseung.payment.example.dto.ModuleInfo;

public interface ModuleStrategy {
    ModuleInfo module();

    void pay(String payType, int price);
}
