package com.gablum.usermanagement.user.rabbit;

import com.gablum.usermanagement.user.model.othermodels.Proposal;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;

@EnableBinding(IGmailRabbit.class)
public class GmailRabbitListener {
    @StreamListener("newProposal")
    public void hello(Proposal proposal){
        System.out.println("Msg To USer Ms ----------------------->><<");
        System.out.println(proposal.toString());
    }
}
