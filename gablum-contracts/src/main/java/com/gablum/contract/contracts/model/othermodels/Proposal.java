package com.gablum.contract.contracts.model.othermodels;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "proposals")
public class Proposal {
    @Id
    private String _id;
    private String proposalId = UUID.randomUUID().toString();
    private String productId;
    private String createdBy;
    private String updatedBy;
    private String businessDomain;
    private String businessSubDomain;
    private String productName;
    private int quantityValue;
    private String quantityUnit;
    private float price;
    private Date deliveryDate;
    private int creditPeriod;
    private boolean qualityCertification;
    private boolean methodOfSupply;
    private Date regStartDate;
    private Date regEndDate;
    private Date auctionStartDate;
    private Date auctionEndDate;
    private Date createdOn;
    private Date updatedOn;
    private int thresholdParticipants;
    private int views;
    private int interested;
    private List<String> interestedUsersEmail = new ArrayList<>();
    private int priceWeight;
    private int creditPeriodWeight;
    private int deliveryDateWeight;
    private int methodOfSupplyWeight;
    private int qualityCertificationWeight;

    public String toStringContract(){
        return _id + productName + String.valueOf(quantityValue) + quantityUnit
                + String.valueOf(price) + String.valueOf(priceWeight)
                + String.valueOf(deliveryDateWeight) + String.valueOf(qualityCertification) + String.valueOf(qualityCertificationWeight)
                + String.valueOf(methodOfSupply) + String.valueOf(methodOfSupplyWeight);
    }
}
