import { Proposal } from './proposal';

type uuid = string;

export interface Auction {
    auctionId: uuid;
    auctionName: string;
    proposal: Proposal;
    isAuctionActive: boolean;
    isAuctionFinished: boolean;
    participantsVerificationId: string;
    interestedUsersEmail: string[];
    bidIdList: uuid[];
    createdOn: Date;
    updatedOn: Date;
    createdBy: string;
    updatedBy: string;
    auctionStartDate: Date;
    auctionEndDate: Date;
    socketToken?: string;
}
