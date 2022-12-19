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
  showContactInfo = true;
  faAddressBook = faAddressBook;
  faXmark = faXmark;
  faLocationDot = faLocationDot;
  faClock = faClock;
  faPhoneFlip = faPhoneFlip;
  faEnvelope = faEnvelope;
  faSquareFacebook = faSquareFacebook;
  faSquareYoutube = faSquareYoutube;
  faSquareInstagram = faSquareInstagram;
  contactNoPrimary = '+91 1234567890';
  contactNoSecondary = '+91 1234567890';
  emailPrimary = 'schoolprimary1@gmail.com';
  emailSecondary = 'schoolprimary1@gmail.com';

  constructor() {
    setTimeout(() => {
      this.showHoverIcon = true;
    }, 1000);
  }
}
