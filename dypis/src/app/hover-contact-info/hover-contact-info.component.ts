import { Component } from '@angular/core';
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAddressBook,
  faClock,
  faEnvelope,
  faLocationDot,
  faPhoneFlip,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { slideInRightAnimation } from '../utils/animation';

@Component({
  selector: 'hover-contact-info',
  templateUrl: './hover-contact-info.component.html',
  styleUrls: ['./hover-contact-info.component.scss'],
  animations: [slideInRightAnimation],
})
export class HoverContactInfoComponent {
  showHoverIcon = false;
  showContactInfo = false;
  faAddressBook = faAddressBook;
  faXmark = faXmark;
  faLocationDot = faLocationDot;
  faClock = faClock;
  faPhoneFlip = faPhoneFlip;
  faEnvelope = faEnvelope;
  faSquareFacebook = faSquareFacebook;
  faSquareYoutube = faSquareYoutube;
  faSquareInstagram = faSquareInstagram;
  contactNoPrimary = 'General - +91 7807080536';
  contactNoSecondary = 'Academics - +91 7807586358';
  contactNoTransport = 'Transport - +91 8344500005';
  emailPrimary = 'dypisk@gmail.com';
  emailSecondary = '';

  constructor() {
    setTimeout(() => {
      this.showHoverIcon = true;
    }, 1000);
  }
}
