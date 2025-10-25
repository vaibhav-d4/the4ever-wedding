import logo from '@assets/logo/vy-logo-blue-bg-t.svg';
import loaderLogo from '@assets/logo/loader-logo.svg';
import haldiImage from '@assets/events/haldi-temp-1.jpg';
import garbaImage from '@assets/events/sangeet-temp-1.jpg';
import weddingImage from '@assets/events/wedding-temp-1.jpg';
import coupleLogo from '@assets/couple/couple-info-logo-bg-floral.svg';
import {default as galleryImg1} from '@assets/couple/left-1.jpg';
import {default as galleryImg2} from '@assets/couple/mid-1.jpg';
import {default as galleryImg3} from '@assets/couple/mid-2.jpeg';
import {default as galleryImg4} from '@assets/couple/mid-3.jpg';
import {default as galleryImg5} from '@assets/couple/right-1.jpg';

export const WEDDING_DATE = import.meta.env.VITE_WEDDING_DATE || '08-Feb-2026 06:00:00';
// export const WEDDING_DATE = '08-Feb-2026 06:00:00';

export const WEBSITE_TYPES = [
  {label: 'Website 1', value: 1},
  {label: 'Website 2', value: 2}
];

export const LOGO_TIMEOUT = 3000;
export const CONTENT_MOUNT_TIMEOUT = LOGO_TIMEOUT + 500;
export const BACKDROP_BLUR = 'backdrop-blur-md'; // xs, sm, md, lg, xl, 2xl, 3xl

export const MONTHS_LABEL = 'Months';
export const DAYS_LABEL = 'Days';
export const HOURS_LABEL = 'Hours';
export const MINUTES_LABEL = 'Mins';
export const SECONDS_LABEL = 'Secs';

export const YESHA_AND_VAIBHAV = 'Yesha & Vaibhav';
export const Y_AND_V = 'Y & V';
export const YESHA = 'Yesha';
export const VAIBHAV = 'Vaibhav';
export const HASHTAG = '#The4Ever';

export const LOCATION_NAME = 'Rajhans Abhinandan';
export const LOCATION_FULL_NAME = 'Rajhans Abhinandan, Bhopal';
export const LOCATION_GOOGLE_LINK = 'https://maps.app.goo.gl/ZafM4K5oUyR3Qebs6';

export const MAX_WIDTH = 1240;

export const MAIN_LOGO_IMAGE = logo;
export const LOADER_LOGO = loaderLogo;

export const CALENDAR_INVITE_LINK = import.meta.env.VITE_CALENDAR_INVITE_LINK;

export const WEDDING_EVENTS = [
  {
    name: 'Haldi',
    image:
      'https://plus.unsplash.com/premium_photo-1670524465634-93cf255ffa8b?q=80&w=1154&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // image: haldiImage,
    eventImage: haldiImage,
    quote: 'Let the yellow shine and the love bloom.',
    info: 'Haldi ceremony marks the beginning of the wedding festivities, bringing joy and blessings.'
  },
  {
    name: 'Garba Night',
    image: 'https://i.pinimg.com/1200x/71/d4/f6/71d4f6612bd4d471bdcc184ddbd1a0f2.jpg',
    eventImage: garbaImage,
    quote: 'Dance to the rhythm of love and tradition.',
    info: 'A night of music, dance, and celebration with family and friends, making memories that last forever.'
  },
  {
    name: 'Wedding & Reception',
    image: 'https://i.pinimg.com/1200x/d1/a6/73/d1a6732c996fe5ccb2eb7ecfd2ac38fb.jpg',
    eventImage: weddingImage,
    quote: 'Two souls, one journey, endless love.',
    info: 'The grand wedding and reception, where we begin our new chapter together.'
  }
];

export const THE_COUPLE_INFO = {
  title: 'Couple',
  subtitle: '💍 Meet the Bride & Groom',
  couple_tagline: 'Two hearts, two personalities - perfectly balanced.',
  couple_description:
    "Yesha's calm, grounded nature and Vaibhav's thoughtful mind create a bond full of love, laughter, and understanding. Together, they make life beautifully complete.",
  logo: coupleLogo,
  groom: {
    name: VAIBHAV,
    age: 27,
    occupation: 'Senior Software Engineer',
    fatherName: 'Late. Mr. Chetan Dholakia',
    motherName: 'Mrs. Neela Dholakia',
    tagline: "He's the strength behind every smile and the warmth in every moment.",
    description:
      "Vaibhav is thoughtful, expressive, and endlessly caring. Known for overthinking every little detail (and making sure everything's just right!), he balances Yesha's calm with his lively curiosity. His big heart, sense of humor, and love for Yesha make him the perfect partner in every way."
  },
  bride: {
    name: YESHA,
    age: 27,
    occupation: 'HR Admin',
    fatherName: 'Mr. Bhadresh Shah',
    motherName: 'Mrs. Bela Shah',
    tagline: "She's the calm in every chaos and the joy in every heartbeat.",
    description:
      "Yesha is calm, kind, and full of warmth. Her gentle nature and easy smile bring peace wherever she goes. Always thoughtful and composed, she's the steady heartbeat in every storm — the kind of person who makes everyone feel at ease just by being around."
  }
};

export const GALLERY_IMAGES = [galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5];

export const ACCOMMODATION_INFO = [
  {
    id: '1',
    title: '📍 About the Destination',
    description:
      'Our wedding venue, Rajhans Abhinandan, Bhopal, M.P., beautifully blends charm, comfort, and elegance — the perfect place to celebrate the beginning of our forever. Surrounded by the warmth of the city and the joy of togetherness, it sets a stunning stage for our special day. Join us in this vibrant and graceful setting as we celebrate love, laughter, and new beginnings.'
  },
  {
    id: '2',
    title: '✈️ Travel',
    description:
      "Reaching Rajhans Abhinandan is simple and convenient. The venue is well-connected by road, rail, and air — just a short drive from Raja Bhoj Airport and Bhopal Junction Railway Station. Whether you're traveling from near or far, the journey to our celebration promises to be smooth, scenic, and filled with excitement."
  },
  {
    id: '3',
    title: '🏨 Accommodation',
    description:
      "We're thrilled to welcome you to Rajhans Abhinandan, Bhopal, for our wedding celebrations! To make your stay as delightful and memorable as the festivities themselves, we've arranged comfortable and elegant accommodations for our guests right at the venue. We can't wait to share this special occasion with you and create memories that will last a lifetime. Your presence will make our celebration truly complete. See you soon!"
  }
];

export const QUOTE_INFO = {
  text: 'You are my today and All of my tomorrows.',
  author: 'Leo Christopher'
};

export const MENU_ITEMS = [
  {
    title: 'Welcome',
    href: '/'
  },
  {
    title: 'People',
    href: '/people'
  },
  {
    title: 'Schedule',
    href: '/schedule'
  }
];
