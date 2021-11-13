// Phishing
import Amazon from '../images/phishing/amazon.png';
import CanImmunize from '../images/phishing/canimmunize.png';
import DonnaFraser from '../images/phishing/donna-fraser.png';
import McGillUniversity from '../images/phishing/mcgill-university.png';
import FedEx from '../images/phishing/fedex.png';
import HarryR from '../images/phishing/harry-r.png';
import Instacart from '../images/phishing/instacart.png';
import Netflix from '../images/phishing/netflix.png';
import PayPal from '../images/phishing/paypal.png';
import Scotiabank from '../images/phishing/scotiabank.png';
import Strava from '../images/phishing/strava.png';
import TedGarcia from '../images/phishing/ted-garcia.png';

// Legitimate
import Arcteryx from '../images/legitimate/arcteryx.png';
import Cra from '../images/legitimate/cra.png';
import Dropbox from '../images/legitimate/dropbox.png';
import Ebay from '../images/legitimate/ebay.png';
import OneOfZero from '../images/legitimate/oneofzero.png';
import ServiceOntario from '../images/legitimate/serviceontario.png';

export const PHISHING_IMAGES = [
    {
        src: Amazon,
        phish: true,
        description:
            'Amazon is an ecommerce focused company. They sell books, video games, music, movies, electronics, and more. You have received an email that telling you that there was an error while attempting to refund your credit card. Can you determine if this is a phishing or legitimate email?',
    },
    {
        src: CanImmunize,
        phish: true,
        description:
            'CANImmunize is a technology company. They focus on immunization software that allows Canadians to keep track of their vaccination records. You have received an email letting you know that you are eligible to book your second COVID-19 vaccination appointment. Can you determine if this is a phishing or legitimate email?',
    },
    {
        src: DonnaFraser,
        phish: true,
        description:
            'Donna Fraser is the receptionist and office manager at your workplace. She is in charge of the software subscription renewals for all employees. You have received an email that informs you to verify your Microsoft Office 365 account or else your account will be closed. Can you determine if this is a phishing or legitimate email?',
    },
    {
        src: McGillUniversity,
        phish: true,
        description:
            'McGill University is a university located in Montreal, Quebec, Canada. You are an undergraduate student at McGill University studying computer science. You have received an email informing you that there is a job opportunity offered by the university that pays $500 per week. Can you determine if this is a phishing or legitimate email?',
    },
    {
        src: FedEx,
        phish: true,
        description:
            'FedEx is a delivery service company. They transport packages all around the world and among the top contractors of the United States government. You have received an email informing you that your package is on its way. Can you determine if this is a phishing or legitimate email?',
    },
    {
        src: HarryR,
        phish: true,
        description:
            'Franny and Peter are friends of yours who recently bought a new cottage. Harry R is an acquaintance of yours who recently visited Franny and Peter at their new cottage. You have received an email from Harry who wants to show you photos of the cottage. Can you determine if this is a phishing or legitimate email?',
    },
    {
        src: Instacart,
        phish: true,
        description:
            'Instacart is a grocery delivery service company. You and your roommate share an Instacart account and order groceries very frequently. You have received an email informing you that a grocery order was placed and is to be delivered by 3:00 PM. Can you determine if this is a phishing or legitimate email?',
    },
    {
        src: Netflix,
        phish: true,
        description:
            'Netflix is a subscription-based media service. They offer a wide variety of movies and TV shows. You have received an email to reset the password for your Netflix account. Can you determine if this is a phishing or legitimate email?',
    },
    {
        src: PayPal,
        phish: true,
        description:
            'PayPal  is a financial technology company. PayPal users can send and receive money, and make online payments securely. You have received a confirmation of payment email amounting to $300 CAD against your account. Can you determine if this is a phishing or legitimate email?',
    },
    {
        src: Scotiabank,
        phish: true,
        description:
            'Scotiabank is a Canadian banking and financial services provider. They are the third largest Canadian bank in Canada. You are a longtime customer of Scotiabank who sometimes makes purchases outside of Canada and have received an email informing you of such a transaction. Can you determine if this is a phishing or legitimate email?',
    },
    {
        src: Strava,
        phish: true,
        description:
            'Strava is a software-based company focused on tracking human exercise. It consists of a social network platform where users can follow other user profiles. You have received an email informing you of a new follower, Samantha X. Can you determine if this is a phishing or legitimate email?',
    },
    {
        src: TedGarcia,
        phish: true,
        description:
            'Ted Garcia is your boss. You have received an urgent request email from Ted asking you for assistance. Can you determine if this is a phishing or legitimate email?',
    },
];

export const LEGITIMATE_IMAGES = [
    {
        src: Arcteryx,
        phish: false,
        description:
            'Arc’teryx is an outdoor clothing and equipment company located in Vancouver, Canada. They are known for their fine quality and design of materials. You have received an email informing you that your order was cancelled due to a discrepancy in the billing information provided. Can you determine if this is a phishing or legitimate email?',
    },
    {
        src: Cra,
        phish: false,
        description:
            'Canada Revenue Agency (CRA) administers tax laws for the Government of Canada. You are a Canadian citizen and therefore file taxes to the CRA. You have received an email informing you that there was an address change on your account. Can you determine if this is a phishing or legitimate email?',
    },
    {
        src: Dropbox,
        phish: false,
        description:
            'Dropbox is a cloud storage service for files. It allows you to sign in from any device and access your files. You have received an email asking you to confirm a recent sign in. Can you determine if this is a phishing or legitimate email?',
    },
    {
        src: Ebay,
        phish: false,
        description:
            'eBay is an ecommerce corporation. They focus on customer-to-customer and business-to-customer sales in over 100 markets. You are a frequent buyer and occasional seller on eBay. You have received an email encouraging you to protect your account by confirming your information. Can you determine if this is a phishing or legitimate email?',
    },
    {
        src: OneOfZero,
        phish: false,
        description:
            'ONEofZERO is an ecommerce company focusing on computer keyboards and accessories, computer mice, headphones, and more. You are a frequent visitor of their website. You have received an email informing you that you have activated an account with them. Can you determine if this is a phishing or legitimate email?',
    },
    {
        src: ServiceOntario,
        phish: false,
        description:
            'ServiceOntario is an agency where Ontarians can get their driver’s license, license plate stickers, health cards, birth certificates, register a birth and more. You live in Ontario, Canada and are therefore an Ontarian. You have received an email with information about your recent purchase through ServiceOntario. Can you determine if this is a phishing or legitimate email?',
    },
];
