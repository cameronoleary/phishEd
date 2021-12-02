// Phishing
import Amazon from '../images/phishing/amazon.png';
import AmazonMarked from '../images/phishing/marked/amazon-marked.png';
import CanImmunize from '../images/phishing/canimmunize.png';
import CanImmunizeMarked from '../images/phishing/marked/canimmunize-marked.png';
import DonnaFraser from '../images/phishing/donna-fraser.png';
import DonnaFraserMarked from '../images/phishing/marked/donna-fraser-marked.png';
import McGillUniversity from '../images/phishing/mcgill-university.png';
import McGillUniversityMarked from '../images/phishing/marked/mcgill-university-marked.png';
import FedEx from '../images/phishing/fedex.png';
import FedExMarked from '../images/phishing/marked/fedex-marked.png';
import HarryR from '../images/phishing/harry-r.png';
import HarryRMarked from '../images/phishing/marked/harry-r-marked.png';
import Instacart from '../images/phishing/instacart.png';
import InstacartMarked from '../images/phishing/marked/instacart-marked.png';
import Netflix from '../images/phishing/netflix.png';
import NetflixMarked from '../images/phishing/marked/netflix-marked.png';
import PayPal from '../images/phishing/paypal.png';
import PayPalMarked from '../images/phishing/marked/paypal-marked.png';
import Scotiabank from '../images/phishing/scotiabank.png';
import ScotiabankMarked from '../images/phishing/marked/scotiabank-marked.png';
import Strava from '../images/phishing/strava.png';
import StravaMarked from '../images/phishing/marked/strava-marked.png';
import TedGarcia from '../images/phishing/ted-garcia.png';
import TedGarciaMarked from '../images/phishing/marked/ted-garcia-marked.png';

// Legitimate
import Arcteryx from '../images/legitimate/arcteryx.png';
import ArcteryxMarked from '../images/legitimate/marked/arcteryx-marked.png';
import Cra from '../images/legitimate/cra.png';
import CraMarked from '../images/legitimate/marked/cra-marked.png';
import Dropbox from '../images/legitimate/dropbox.png';
import DropboxMarked from '../images/legitimate/marked/dropbox-marked.png';
import Ebay from '../images/legitimate/ebay.png';
import EbayMarked from '../images/legitimate/marked/ebay-marked.png';
import OneOfZero from '../images/legitimate/oneofzero.png';
import OneOfZeroMarked from '../images/legitimate/marked/oneofzero-marked.png';
import ServiceOntario from '../images/legitimate/serviceontario.png';
import ServiceOntarioMarked from '../images/legitimate/marked/serviceontario-marked.png';

export const PHISHING_IMAGES = [
    {
        name: 'Amazon',
        src: Amazon,
        srcMarked: AmazonMarked,
        phish: true,
        description:
            'Amazon is an ecommerce focused company. They sell books, video games, music, movies, electronics, and more. You have received an email that telling you that there was an error while attempting to refund your credit card. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a phishing email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #FFFF00">@amazon-us.com</span>: this is a fake email domain. The real email domain for Amazon is <b>@amazon.[top-level domain]</b> (e.g., @amazon.com (US), @amazon.ca (CA)).',
                },
                {
                    name: '<span style="background-color: #0000FF">Amazon logo</span>: this is the <b>real logo</b> for Amazon. This is used to trick you into thinking this is a legitimate email.',
                },
                {
                    name: '<span style="background-color: #FF00A8">Hello taylorfinley@gmail.com</span>: this is a <b>generic greeting</b>. A web scraper was used to get your public email address.',
                },
                {
                    name: '<span style="background-color: #00FF00">http://www.amazon--us.com/profile/address</span>: this is a malicious link. The web domain for legitimate links to Amazon\'s website is <b>amazon.[top-level domain]</b> (e.g., amazon.com (US), amazon.ca (CA)).',
                },
                {
                    name: '<span style="background-color: #00FF00">http://www.amazon--us.com/contact</span>: this is a malicious link. The web domain for legitimate links to Amazon\'s website is <b>amazon.[top-level domain]</b> (e.g., amazon.com (US), amazon.ca (CA)).',
                },
                {
                    name: '<span style="background-color: #0000FF">Amazon</span>: this is a fake name. The real name for Amazon is <b>Amazon.[top-level domain]</b> (e.g., Amazon.com (US), Amazon.ca (CA)).',
                },
            ],
        },
    },
    {
        name: 'CANImmunize',
        src: CanImmunize,
        srcMarked: CanImmunizeMarked,
        phish: true,
        description:
            'CANImmunize is a technology company. They focus on immunization software that allows Canadians to keep track of their vaccination records. You have received an email letting you know that you are eligible to book your second COVID-19 vaccination appointment. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a phishing email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #FFFF00">@canadaimmunize.ca</span>: this is a fake email domain. The real email domain for CANImmunize is <b>@canimmunize.ca</b>.',
                },
                {
                    name: '<span style="background-color: #FF00A8">Hello</span>: this is a <b>generic greeting</b>.',
                },
                {
                    name: '<span style="background-color: #00FF00">https://canadaimmunize.us-host.com/uid/a0c172f8-ff6c-4c29-9a08-572c2ffd7d1c</span>: this is a malicious (although HTTPS secure) link. The web domain for legitimate links to CANImmunize\'s website is <b>canimmunize.ca</b>.',
                },
            ],
        },
    },
    {
        name: 'Donna Fraser',
        src: DonnaFraser,
        srcMarked: DonnaFraserMarked,
        phish: true,
        description:
            'Donna Fraser is the receptionist and office manager at your workplace. She is in charge of the software subscription renewals for all employees. You have received an email that informs you to verify your Microsoft Office 365 account or else your account will be closed. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a phishing email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #00FF00">https://tinyurl.com/fd4743d999</span>: this is a <b>malicious (although HTTPS secure) link</b>. TinyURL is a URL shortener that doesn\'t reveal the target website address. Always verify the sender\'s email address before clicking on links like this.',
                },
            ],
        },
    },
    {
        name: 'McGill University',
        src: McGillUniversity,
        srcMarked: McGillUniversityMarked,
        phish: true,
        description:
            'McGill University is a university located in Montreal, Quebec, Canada. You are an undergraduate student at McGill University studying computer science. You have received an email informing you that there is a job opportunity offered by the university that pays $500 per week. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a phishing email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #FFFF00">@mcgill.edu</span>: this is a fake email domain. The real email domain for McGill University is <b>@mcgill.ca</b>.',
                },
                {
                    name: '<span style="background-color: #00FFFF">JOB OPPORTUNITY</span>: this creates a <b>sense of urgency</b>. Using all capital letters draws attention.',
                },
                {
                    name: '<span style="background-color: #00FF00">https://docs.google.com/forms/34de3df2a8ac11e6679de6e2/viewform</span>: this is a malicious (although HTTPS secure) link. This link takes you to a Google Doc where you are asked to enter sensitive information such as your student email address and password.',
                },
            ],
        },
    },
    {
        name: 'FedEx',
        src: FedEx,
        srcMarked: FedExMarked,
        phish: true,
        description:
            'FedEx is a delivery service company. They transport packages all around the world and among the top contractors of the United States government. You have received an email informing you that your package is on its way. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a phishing email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #FFFF00">@fedecks.com</span>: this is a fake email domain. The real email domain for FedEx is <b>@fedex.com</b>.',
                },
                {
                    name: '<span style="background-color: #00FFFF">A parcel was picked up by FedEx today</span>: the subject line <b>excludes any package details</b>. Typically, details about your package will be shown in the subject line such as the tracking number and sender\'s name.',
                },
                {
                    name: '<span style="background-color: #0000FF">FedEx logo</span>: this is the <b>real logo</b> for FedEx. This is used to trick you into thinking this is a legitimate email.',
                },
                {
                    name: '<span style="background-color: #FF00A8">Hi, taylorfinley@gmail.com</span>: this is a <b>generic greeting</b>. A web scraper was used to get your public email address.',
                },
                {
                    name: '<span style="background-color: #FF6600">Tomorrow</span>: there are <b>no other details</b> about your package. Typically, details about your package (e.g., from address, to (your) address, sender\'s name, etc.) are displayed.',
                },
                {
                    name: '<span style="background-color: #00FF00">http://fedex.com.delivery.co/man-del</span>: this is a malicious link. The web domain for legitimate links to FedEx\'s delivery management website is <b>fedex.com</b>.',
                },
                {
                    name: '<span style="background-color: #00FF00">http://fedex.com.delivery.co/928374982374</span>: this is a malicious link. The web domain for legitimate links to FedEx\'s delivery management website is <b>fedex.com</b>.',
                },
            ],
        },
    },
    {
        name: 'Harry R',
        src: HarryR,
        srcMarked: HarryRMarked,
        phish: true,
        description:
            'Franny and Peter are friends of yours who recently bought a new cottage. Harry R is an acquaintance of yours who recently visited Franny and Peter at their new cottage. You have received an email from Harry who wants to show you photos of the cottage. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a phishing email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #00FF00">http://bit.ly/c708e24d488a471d</span>: this is a <b>malicious link</b>. Bitly is a URL shortener that doesn\'t reveal the target website address. Always verify the sender\'s email address before clicking on links like this.',
                },
            ],
        },
    },
    {
        name: 'Instacart',
        src: Instacart,
        srcMarked: InstacartMarked,
        phish: true,
        description:
            'Instacart is a grocery delivery service company. You and your roommate share an Instacart account and order groceries very frequently. You have received an email informing you that a grocery order was placed and is to be delivered by 3:00 PM. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a phishing email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #FFFF00">@gmail.com</span>: this is a public email domain. The real email domain for Instacart is <b>@instacart.com</b>.',
                },
                {
                    name: '<span style="background-color: #00FFFF">Your grocery order is confirmed for today</span>: the subject line <b>excludes the order date</b>. Typically, the exact date of your grocery order will be shown in the subject line.',
                },
                {
                    name: '<span style="background-color: #0000FF">Instacart logo</span>: this is the <b>real logo</b> for Instacart. This is used to trick you into thinking this is a legitimate email.',
                },
                {
                    name: '<span style="background-color: #FF00A8">Hello</span>: this is a <b>generic greeting</b>.',
                },
                {
                    name: '<span style="background-color: #FF6600">Delivery time by 3:00 PM</span>: there are <b>no other details</b> about your grocery order. Typically, details about your grocery order also include your address and delivery time.',
                },
                {
                    name: '<span style="background-color: #FF6600">messeges</span>: this is a spelling mistake. The correct word is <b>messages</b>. Sometimes these are hard to catch!',
                },
                {
                    name: '<span style="background-color: #FF6600">repalcements</span>: this is another spelling mistake. The correct word is <b>replacements</b>.',
                },
                {
                    name: '<span style="background-color: #00FF00">https://www.instacart-grocery.com/order</span>: this is a malicious (although HTTPS secure) link. The web domain for legitimate links to Instacart\'s order tracking website is <b>instacart.ca</b>.',
                },
                {
                    name: '<span style="background-color: #0000FF">Instacart</span>: this is a fake signature. The real signature for Instacart is <b>The Instacart Team</b>.',
                },
            ],
        },
    },
    {
        name: 'Netflix',
        src: Netflix,
        srcMarked: NetflixMarked,
        phish: true,
        description:
            'Netflix is a subscription-based media service. They offer a wide variety of movies and TV shows. You have received an email to reset the password for your Netflix account. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a phishing email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #FFFF00">@password.netflix.com</span>: this is a fake email domain. The real email domain for Netflix is <b>@netflix.com</b>.',
                },
                {
                    name: '<span style="background-color: #00FFFF">Action required: Reset your password</span>: this creates a <b>sense of urgency</b>. "Action required" may encourage you to open the email.',
                },
                {
                    name: '<span style="background-color: #0000FF">Netflix logo</span>: this is the <b>real logo</b> for Netflix. This is used to trick you into thinking this is a legitimate email.',
                },
                {
                    name: '<span style="background-color: #FF00A8">Hello Taylor</span>: although not a generic greeting, an attacker <b>researched you</b> to get your name.',
                },
                {
                    name: '<span style="background-color: #FF6600">recent account access</span>: this <b>should be a link</b>. In Netflix\'s legitimate email for resetting your password, this embedded link would take you to your account activity.',
                },
                {
                    name: '<span style="background-color: #FF6600">Help Center</span>: this <b>should be a link</b>. In Netflix\'s legitimate email for resetting your password, this embedded link would take you to their help center resources such as frequently asked questions.',
                },
                {
                    name: '<span style="background-color: #FF6600">contacted us</span>: this is a spelling mistake and should be a link. The correct tense is <b>contact us</b>. In Netflix\'s legitimate email for resetting your password, this link gets you in contact with a representative.',
                },
                {
                    name: '<span style="background-color: #00FF00">http://netflix.com.resetpwds.net/38465fc7b10b</span>: this is a malicious link. The web domain for legitimate links to Netflix\'s reset password portal is <b>netflix.com</b>.',
                },
                {
                    name: '<span style="background-color: #0000FF">Your friends at Netflix</span>: this is a <b>real signature</b>. This is used to trick you into thinking this is a legitimate email.',
                },
            ],
        },
    },
    {
        name: 'PayPal',
        src: PayPal,
        srcMarked: PayPalMarked,
        phish: true,
        description:
            'PayPal  is a financial technology company. PayPal users can send and receive money, and make online payments securely. You have received a confirmation of payment email amounting to $300 CAD against your account. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a phishing email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #FFFF00">@mail.com</span>: this is a public email domain. The real email domain for PayPal is <b>@paypal.com</b>.',
                },
                {
                    name: '<span style="background-color: #0000FF">PayPal logo</span>: this is the <b>real logo</b> for PayPal. This is used to trick you into thinking this is a legitimate email.',
                },
                {
                    name: '<span style="background-color: #FF00A8">Dear User</span>: this is a <b>generic greeting</b>.',
                },
                {
                    name: '<span style="background-color: #FF6600">""</span>: all highlighted orange text includes <b>improper usage of tense and grammar errors</b>.',
                },
                {
                    name: '<span style="background-color: #00FF00">http://paypalbot.com/login</span>: this is a malicious link. The web domain for legitimate links to PayPal\'s login is <b>paypal.com/signin</b>.',
                },
            ],
        },
    },
    {
        name: 'Scotiabank',
        src: Scotiabank,
        srcMarked: ScotiabankMarked,
        phish: true,
        description:
            'Scotiabank is a Canadian banking and financial services provider. They are the third largest Canadian bank in Canada. You are a longtime customer of Scotiabank who sometimes makes purchases outside of Canada and have received an email informing you of such a transaction. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a phishing email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #FFFF00">@scotia.bank</span>: this is a fake email domain. The real email domain for Scotiabank is <b>@scotiabank.com</b>.',
                },
                {
                    name: '<span style="background-color: #00FFFF">Payment Authorization Outside of Country</span>: this is <b>incorrect subject line</b> for out-of-country payments. Typically, the subject line looks like "Authorization on your credit card outside of Canada".',
                },
                {
                    name: '<span style="background-color: #0000FF">Scotiabank logo</span>: this is an <b>outdated logo</b> for Scotiabank. This is used to trick you into thinking this is a legitimate email.',
                },
                {
                    name: '<span style="background-color: #FF00A8">Dear Scotiabank Customer</span>: this is a <b>generic greeting</b>.',
                },
                {
                    name: '<span style="background-color: #00FF00">http://www.scotia-bank.com/contact</span>: this is a malicious link. The web domain for legitimate links to Scotiabanks\'s website is <b>scotiabank.com</b>.',
                },
                {
                    name: '<span style="background-color: #0000FF">Scotiabank</span>: this is a <b>fake signature</b>. Scotiabank does not explicitly sign out-of-country payment notifications.',
                },
                {
                    name: '<span style="background-color: #FF6600">payment.pdf</span>: this is a <b>malicious attachment</b>. Always verify the sender\'s email address before opening attachments.',
                },
            ],
        },
    },
    {
        name: 'Strava',
        src: Strava,
        srcMarked: StravaMarked,
        phish: true,
        description:
            'Strava is a software-based company focused on tracking human exercise. It consists of a social network platform where users can follow other user profiles. You have received an email informing you of a new follower, Samantha X. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a phishing email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #FFFF00">@app-strava.com</span>: this is a fake email domain. The real email domain for Strava is <b>@strava.com</b>.',
                },
                {
                    name: '<span style="background-color: #0000FF">Strava logo</span>: this is the <b>real logo</b> for Strava. This is used to trick you into thinking this is a legitimate email.',
                },
                {
                    name: '<span style="background-color: #00FF00">https://www.app-strava.com/user/samantha-x</span>: this is a malicious (although HTTPS secure) link. The web domain for legitimate links to Strava\'s website is <b>strava.com</b>.',
                },
            ],
        },
    },
    {
        name: 'Ted Garcia',
        src: TedGarcia,
        srcMarked: TedGarciaMarked,
        phish: true,
        description:
            'Ted Garcia is your boss. You have received an urgent request email from Ted asking you for assistance. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a phishing email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #00FFFF">URGENT REQUEST</span>: this creates a <b>sense of urgency</b>. Using all capital letters draws attention.',
                },
                {
                    name: '<span style="background-color: #FF00A8">Hi</span>: this is a <b>generic greeting</b>.',
                },
                {
                    name: '<span style="background-color: #FF6600">""</span>: all highlighted orange text includes <b>spelling mistakes and grammar errors</b>.',
                },
            ],
        },
    },
];

export const LEGITIMATE_IMAGES = [
    {
        name: "ARC'TERYX",
        src: Arcteryx,
        srcMarked: ArcteryxMarked,
        phish: false,
        description:
            'Arc’teryx is an outdoor clothing and equipment company located in Vancouver, Canada. They are known for their fine quality and design of materials. You have received an email informing you that your order was cancelled due to a discrepancy in the billing information provided. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a legitimate email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #FFFF00">@arcteryx.com</span>: this is the <b>legitimate email domain</b> for ARC\'TERYX.',
                },
                {
                    name: '<span style="background-color: #00FF00">https://arcteryx.com/help/shipping?intcmp=shipping</span>: this is a legitimate and HTTPS secure link. The web domain for legitimate links to ARC\'TERYX\'s website is <b>arcteryx.com</b>.',
                },
                {
                    name: '<span style="background-color: #0000FF">Signature</span>: this is a <b>legitimate signature</b> from the ARC\'TERYX team.',
                },
                {
                    name: '<span style="background-color: #FF6600">Order # 9921873</span>: your order number is shown. It would be easy to <b>verify the authenticity</b> of this email by checking your records for the order associated with the item and this order number.',
                },
            ],
        },
    },
    {
        name: 'CRA',
        src: Cra,
        srcMarked: CraMarked,
        phish: false,
        description:
            'Canada Revenue Agency (CRA) administers tax laws for the Government of Canada. You are a Canadian citizen and therefore file taxes to the CRA. You have received an email informing you that there was an address change on your account. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a legitimate email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #FFFF00">@do_not_reply-ne_pas_repondre@cra-arc.gc.ca</span>: this is the <b>legitimate email domain</b> for the Canadian Revenue Agency.',
                },
                {
                    name: '<span style="background-color: #FF00A8">Dear TAYLOR FINLEY / Cher/Chère TAYLOR FINLEY</span>: this is a <b>non-generic greeting</b>. The sender knows your full name.',
                },
            ],
        },
    },
    {
        name: 'Dropbox',
        src: Dropbox,
        srcMarked: DropboxMarked,
        phish: false,
        description:
            'Dropbox is a cloud storage service for files. It allows you to sign in from any device and access your files. You have received an email asking you to confirm a recent sign in. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a legitimate email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #FFFF00">@dropbox.com</span>: this is the <b>legitimate email domain</b> for Dropbox.',
                },
                {
                    name: '<span style="background-color: #0000FF">Dropbox logo</span>: this is the <b>legitimate logo</b> for Dropbox.',
                },
                {
                    name: '<span style="background-color: #FF00A8">Hi Taylor</span>: this is a <b>non-generic greeting</b>. The sender knows your name.',
                },
                {
                    name: '<span style="background-color: #FF6600">When/What</span>: the date, time, and device type of the login is shown. It would be easy to <b>verify the authenticity</b> of this email by comparing your login records/device(s) with the snapshot of this email.',
                },
                {
                    name: '<span style="background-color: #00FF00">https://www.dropbox.com/l/...</span>: these are legitimate and HTTPS secure links. The web domain for legitimate links to Dropbox\'s website is <b>dropbox.com</b>.',
                },
                {
                    name: '<span style="background-color: #0000FF">The Dropbox Team</span>: this is a <b>legitimate signature</b> from the Dropbox team.',
                },
            ],
        },
    },
    {
        name: 'eBay',
        src: Ebay,
        srcMarked: EbayMarked,
        phish: false,
        description:
            'eBay is an ecommerce corporation. They focus on customer-to-customer and business-to-customer sales in over 100 markets. You are a frequent buyer and occasional seller on eBay. You have received an email encouraging you to protect your account by confirming your information. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a legitimate email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #FFFF00">@ebay.com</span>: this is the <b>legitimate email domain</b> for eBay.',
                },
                {
                    name: '<span style="background-color: #0000FF">eBay logo</span>: this is the <b>legitimate logo</b> for eBay.',
                },
                {
                    name: '<span style="background-color: #FF00A8">Hi tfinley88</span>: this is a <b>non-generic greeting</b>. The sender knows the name of your account.',
                },
                {
                    name: '<span style="background-color: #00FF00">https://rover.ebay.com/rover/...</span>: this is a legitimate and HTTPS secure link. The "rover" portion of the link is a tool used by eBay to track affiliate clicks and traffic. Also note that the web domain for legitimate links to eBays\'s website is <b>ebay.com</b>.',
                },
                {
                    name: '<span style="background-color: #0000FF">The eBay Accounts Team</span>: this is a <b>legitimate signature</b> from the eBay accounts team.',
                },
            ],
        },
    },
    {
        name: 'ONEofZERO',
        src: OneOfZero,
        srcMarked: OneOfZeroMarked,
        phish: false,
        description:
            'ONEofZERO is an ecommerce company focusing on computer keyboards and accessories, computer mice, headphones, and more. You are a frequent visitor of their website. You have received an email informing you that you have activated an account with them. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a legitimate email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #FFFF00">@oneofzero.net</span>: this is the <b>legitimate email domain</b> for ONEofZERO.',
                },
                {
                    name: '<span style="background-color: #0000FF">ONEofZERO logo</span>: this is the <b>legitimate logo</b> for ONEofZERO.',
                },
                {
                    name: '<span style="background-color: #00FF00">https://oneofzero.net/</span>: this is a legitimate and HTTPS secure link. The web domain for legitimate links to ONEofZERO\'s website is <b>oneofzero.net</b>.',
                },
            ],
        },
    },
    {
        name: 'ServiceOntario',
        src: ServiceOntario,
        srcMarked: ServiceOntarioMarked,
        phish: false,
        description:
            'ServiceOntario is an agency where Ontarians can get their driver’s license, license plate stickers, health cards, birth certificates, register a birth and more. You live in Ontario, Canada and are therefore an Ontarian. You have received an email with information about your recent purchase through ServiceOntario. Can you determine if this is a phishing or legitimate email?',
        descriptionMarked: 'This is a legitimate email.',
        list: {
            items: [
                {
                    name: '<span style="background-color: #FFFF00">@ontario.ca</span>: this is the <b>legitimate email domain</b> for ServiceOntario and a majority of the province\'s services.',
                },
                {
                    name: '<span style="background-color: #0000FF">Logos</span>: these are the <b>legitimate logos</b> for the province and ServiceOntario.',
                },
                {
                    name: '<span style="background-color: #FF6600">729461884100</span>: this is your order number. It would be easy to <b>verify the authenticity</b> of this email by comparing the order number on your records with this order number.',
                },
                {
                    name: '<span style="background-color: #00FF00">http://www.serviceontario.ca/</span>: this is a legitimate link. The web domain for legitimate links to ServiceOntario\'s website is <b>serviceontario.ca</b>.',
                },
                {
                    name: '<span style="background-color: #00FF00">https://www.ontario.ca/page/get-serviceontario-digital-reminders</span>: this is a legitimate and HTTPS secure link. The web domain for legitimate links to the province\'s website is <b>ontario.ca</b>.',
                },
                {
                    name: '<span style="background-color: #FF6600">AllProducts.pdf</span>: this is a <b>safe attachment</b>; however, always verify the sender\'s email address before opening attachments.',
                },
            ],
        },
    },
];
