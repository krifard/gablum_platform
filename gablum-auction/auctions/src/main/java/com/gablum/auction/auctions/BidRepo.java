package com.gablum.auction.auctions;

import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BidRepo extends MongoRepository<BidDataEntity, ObjectId>{

    Page<BidDataEntity> findAllByAuctionId(Pageable pageable, String id);
}
