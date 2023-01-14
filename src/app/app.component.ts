import { Component } from '@angular/core';
import { footerBtn } from './helpers/enums';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ListenPay "Listen|Earn|Redeem"';
  public footerBtnRef = footerBtn;
  public selectedFooterBtn: footerBtn = footerBtn.None;

  onProfileBtn() {
    if ($('.dashboard').is(":visible")) {
      $(".btn-sidebar-holder").hide();
      $(".dashboard").stop(true, true).hide("slide", {
        direction: "left"
      }, 200, function () {
        $(".login").show();
        $(".wrapper").addClass("loginScreen");
      });
    }
    this.selectedFooterBtn = this.footerBtnRef.Login;
  }


  onAppLink() {
    console.log("onFooterLink")
    this.selectedFooterBtn = this.footerBtnRef.App;
    this.toogleLoginUser();
  }

  onanalyticsLink() {
    console.log("onanalyticsLink")
    this.selectedFooterBtn = this.footerBtnRef.Analytics;
    this.toogleLoginUser();
  }

  onUserLink() {
    console.log("onUserLink()");

    if (this.selectedFooterBtn == this.footerBtnRef.None) {
      this.selectedFooterBtn = this.footerBtnRef.Login
    }
    else if (this.selectedFooterBtn == this.footerBtnRef.User) {
      this.selectedFooterBtn = this.footerBtnRef.Login
    } else if (this.selectedFooterBtn == this.footerBtnRef.Login) {
      this.selectedFooterBtn = this.footerBtnRef.User;
    }else {
      this.selectedFooterBtn = this.footerBtnRef.Login;
    }
    this.toogleLoginUser();
  }

  ongiftLink() {
    console.log("ongiftLink")
    this.selectedFooterBtn = this.footerBtnRef.Gift;
    this.toogleLoginUser();
  }

  onFaqLink() {
    console.log("onFaqLink")
    this.selectedFooterBtn = this.footerBtnRef.Faq;
    this.toogleLoginUser();
  }

  toogleLoginUser() {
    if (this.selectedFooterBtn == this.footerBtnRef.Login) {
      $(".btn-sidebar-holder").hide();
      $(".dashboard").stop(true, true).hide("slide", {
        direction: "left"
      }, 200, function () {
        $(".login").show();
        $(".wrapper").addClass("loginScreen");
      });
    } else {
      $(".login").hide();
      $(".wrapper").removeClass("loginScreen");
      $(".dashboard").stop(true, true).show("slide", {
        direction: "left"
      }, 200, function () {
        $(".btn-sidebar-holder").show();
      });
    }
  }
}
