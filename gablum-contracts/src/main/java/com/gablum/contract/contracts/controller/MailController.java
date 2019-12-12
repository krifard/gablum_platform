package com.gablum.contract.contracts.controller;

import com.gablum.contract.contracts.Interfaces.Irabbit;
import com.gablum.contract.contracts.model.Contracts;
import com.gablum.contract.contracts.service.ContractService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.messaging.SubscribableChannel;

import java.security.MessageDigest;

@Slf4j
@EnableBinding(Irabbit.class)
public class MailController {

    private MessageDigest digest;

    @Autowired
    ContractService contractService;

    @StreamListener("newContract")
    public void awardContractChannel(Contracts contract){
        contractService.saveContract(contract);
    }


}
