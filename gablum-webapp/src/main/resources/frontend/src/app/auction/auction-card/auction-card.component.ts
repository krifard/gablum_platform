import { Component, OnInit, Input } from '@angular/core';
import { Auction } from 'src/app/interfaces/auction';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { AuctionsListComponent } from 'src/app/dashboard/auctions-list/auctions-list.component';
import { Router } from '@angular/router';
import { Proposal } from 'src/app/interfaces/proposal';
import { environment } from 'src/environments/environment';
import { LoggerService } from 'src/app/services/logger.service';
import { HttpClient } from '@angular/common/http';
import { AuctionSocketToken } from 'src/app/interfaces/auction-token';
import { WebsocketService } from 'src/app/services/websocket.service';
import { TranslateService } from '@ngx-translate/core';
import { IntlService } from 'src/app/services/intl.service';

@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.css']
})
export class AuctionCardComponent implements OnInit {
  public static messageKey = 'auction-card-component';
  public qualityMsgTrue = 'Quality Assurance Required';
  public qualityMsgFalse = 'Quality Certification Optional';
  public supplyTrue = 'FULL';
  public supplyFalse = 'IN PARTS';
  constructor(
    private auctionDataService: AuctionsDataService,
    private comms: CommunicatorService,
    private router: Router,
    private logger: LoggerService,
    private http: HttpClient,
<<<<<<< HEAD
    private ws: WebsocketService,
    public translate: TranslateService,
    public intl: IntlService
  ) {
    translate.addLangs(['en', 'fr', 'hi']);
    translate.setDefaultLang('en');
    // const browserLang = translate.getBrowserLang();
    translate.use(intl.getLang());

    //     if ('auctions' in data) {
    //       this.auctions = data.auctions;
    //       console.log(this.auctions);
    //     }
    //   }
    // });
=======
    private ws: WebsocketService
    ) {
>>>>>>> 1500c9fbadb07cf932bed34ac2cd97159b0c3fc2
  }

  @Input() public auction: Auction;
  @Input() public buttonShow: boolean;

  public isOwner = false;
  private tokenBody: any;

  ngOnInit() {
    const auctionUrl = environment.tokenUrl;
    this.http.get<AuctionSocketToken>(auctionUrl + '/' + this.auction.auctionId)
<<<<<<< HEAD
      .subscribe(token => {
        this.auction.socketToken = token.token;
        this.logger.log(this.auction);
        this.tokenBody = JSON.parse(atob(token.token.split('.')[1]));
        this.logger.log(this.tokenBody);
        this.isOwner = this.tokenBody.isOwner;
        // this.ws.connect(message => this.subscribe());
      },
        err => {
          this.logger.log(err);
        });
=======
    .subscribe(token => {
      this.auction.socketToken = token.token;
      this.logger.log(this.auction);
      this.tokenBody = JSON.parse(atob(token.token.split('.')[1]));
      this.logger.log(this.tokenBody);
      this.isOwner = this.tokenBody.isOwner;

      console.log('oowwwwwwwwwwwwwwwner', this.isOwner);
      // this.ws.connect(message => this.subscribe());
    },
    err => {
      this.logger.log(err);
    });
>>>>>>> 1500c9fbadb07cf932bed34ac2cd97159b0c3fc2
    this.logger.log(auctionUrl);
  }

  public placeBid() {
    console.log('calling place bid');
    this.router.navigate(['auctions', this.auction.auctionId, 'new', 'bid']);
  }

  public seeBids() {
    this.router.navigate(['auctions/' + this.auction.auctionId + '/see/bids']);
  }

  subscribe() {
    // if (this.isOwner) {
    //   this.ws.subscribe(
    //     '/topic/admin/' + this.auction.auctionId,
    //     AuctionCardComponent.messageKey,
    //     'newbid', this.auction.socketToken).subscribe(message => {
    //       if (message.dest === '@all' || message.dest === AuctionCardComponent.messageKey) {
    //         const data = message.data;
    //         if ('newbid' in data) {
    //           this.logger.log(data.newbid.body);
    //         }
    //       }
    //     }
    //   );
    // } else {
    //   this.ws.subscribe(
    //     '/topic/supplier/' + this.auction.auctionId + '/' + this.tokenBody.sub,
    //     AuctionCardComponent.messageKey,
    //     'newbid', this.auction.socketToken).subscribe(message => {
    //       if (message.dest === '@all' || message.dest === AuctionCardComponent.messageKey) {
    //         const data = message.data;
    //         if ('newbid' in data) {
    //           this.logger.log(data.newbid.body);
    //         }
    //       }
    //     }
    //   );
    // }
  }

}
