import logo from '@assets/logo/vy-logo-blue-bg-t.svg';
import loaderLogo from '@assets/logo/loader-logo.svg';
import haldiMainImg from '@assets/events/haldi-main-1.svg';
import haldiEventImg from '@assets/events/haldi-event-1.svg';
import garbaMainImg from '@assets/events/garba-main-1.svg';
import weddingEventImg from '@assets/events/wedding-event-1.svg';
import weddingMainImg from '@assets/events/wedding-main-1.svg';
import garbaEventImg from '@assets/events/garba-event-1.svg';
import coupleLogo from '@assets/couple/couple-info-2.svg';
import galleryImg1 from '@assets/couple/left-1.jpg';
import galleryImg2 from '@assets/couple/mid-1.jpg';
import galleryImg3 from '@assets/couple/mid-2.jpeg';
import galleryImg4 from '@assets/couple/mid-3.jpg';
import galleryImg5 from '@assets/couple/right-1.jpg';

export const WEDDING_DATE = import.meta.env.VITE_WEDDING_DATE || '08-Feb-2026 06:00:00';
// export const WEDDING_DATE = '08-Feb-2025 06:00:00';

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
    name: '✨ Haldi Ceremony',
    image: haldiMainImg,
    eventImage: haldiEventImg,
    quote: 'Let the yellow shine and the love bloom.',
    info: 'Haldi ceremony marks the beginning of the wedding festivities, bringing joy and blessings.',
    date: '7th February 2026',
    time: '1 PM onwards (followed by lunch)',
    dressCode: 'Bright yellow & floral',
    description:
      "Let's kick off the celebrations with sunshine, smiles, and a splash of color. Join us for a joyful afternoon as we celebrate love and laughter amidst the glow of haldi and blooming hues."
  },
  {
    name: '💍 Ring Ceremony & Garba Night',
    image: garbaMainImg,
    eventImage: garbaEventImg,
    quote: 'Dance to the rhythm of love and tradition.',
    info: 'A night of music, dance, and celebration with family and friends, making memories that last forever.',
    date: '7th February 2026',
    time: '7 PM onwards — Ring Ceremony, followed by Garba Night and Dinner',
    dressCode: 'Indo-Western multicolor glam',
    description:
      'An evening of sparkle and celebration awaits! Celebrate love and tradition as we exchange rings and dance the night away in vibrant hues and festive beats.'
  },
  {
    name: '💫 Wedding & Reception',
    image: weddingMainImg,
    eventImage: weddingEventImg,
    quote: 'Two souls, one journey, endless love.',
    info: 'The grand wedding and reception, where we begin our new chapter together.',
    date: '8th February 2026',
    time: '11 AM - Baarat Aagman\n12 PM - Wedding Ceremony\n1:30 PM - Reception\n',
    dressCode: 'Elegant & pastel shades of Indian attire',
    description:
      'A day of love, vows, and togetherness. Join us as we tie the knot in an elegant wedding ceremony, followed by a graceful reception to celebrate the start of our forever.'
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
      'Our wedding venue, Rajhans Abhinandan, Bhopal, beautifully blends charm, comfort, and elegance — the perfect place to begin our forever. Surrounded by warmth and joy, it sets the ideal stage for our special day.'
  },
  {
    id: '2',
    title: '✈️ Travel',
    description:
      'Conveniently connected by road, rail, and air, Rajhans Abhinandan is just a short drive from Raja Bhoj Airport and Bhopal Junction. Your journey to our celebration will be smooth and scenic.'
  },
  {
    id: '3',
    title: '🏨 Accommodation',
    description:
      "We're excited to welcome you to Rajhans Abhinandan! Comfortable stay arrangements have been made at the venue so you can relax and enjoy every moment. Your presence will make our celebration truly special. See you there!"
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
