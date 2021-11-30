// Defines all text-based content in the app.
// eslint-disable-next-line
export default {
    title: 'phishEd',
    common: {
        source: 'Source',
        sources: 'Sources',
    },
    nav: {
        home: 'Home',
        back: 'Back',
        next: 'Next',
    },
    landingPage: {
        header: {
            about: 'Welcome to <b style="color: #F26721">phishEd</b> (Phishing Education) - a quick and easy way to learn about phishing. You will learn about <b style="color: #F26721">what phishing is</b>, the <b style="color: #F26721">stages of a phishing attack</b>, the <b style="color: #F26721">common types of phishing</b>, and <b style="color: #F26721">how to prevent phishing attacks</b>. Remember to test your understanding by taking the short quiz at the bottom of this page!',
        },
        content: {
            whatIsPhishing: {
                header: 'What Is Phishing?',
                text: 'Phishing is an <b style="color: #F26721">attack</b> carried out by criminals using deceptive tricks to gain your trust or the trust of an organization with the intent to <b style="color: #F26721">steal sensitive information</b>. For example, a criminal may target you by pretending to be the representative of your banking institution in an attempt to obtain your credit card information or social insurance number.',
            },
            stagesInAPhishingAttack: {
                header: 'Stages in a Phishing Attack',
                stages: [
                    {
                        text: 'An attacker sends you a <b style="color: #F26721">forged email</b> that looks like an email sent by your bank.',
                    },
                    {
                        text: 'The email states that your bank account password has been compromised and <b style="color: #F26721">contains a link</b> to update your password.',
                    },
                    {
                        text: "You the click the link and are brought to a <b style='color: #F26721'>fradulent website</b> on the attacker's web server that looks like your bank's website.",
                    },
                    {
                        text: 'The seemingly legitimate website asks you to log in with your <b style="color: #F26721">credit card details and password</b>.',
                    },
                    {
                        text: '<b style="color: #F26721">You log in</b> with your credit card details and password.',
                    },
                    {
                        text: 'Your information is <b style="color: #F26721">transmitted to the attacker</b>.',
                    },
                    {
                        text: 'The <b style="color: #F26721">attacker uses your credit card details and password</b> to log in to your bank account.',
                    },
                    {
                        text: 'The attacker <b style="color: #F26721">sends themself money</b> from your account via e-transfer.',
                    },
                    {
                        text: 'Your money is taken by <b style="color: #F26721">fraud</b>.',
                    },
                ],
                sources: {
                    sourcePrefix: 'For more information, visit',
                    sourceContent: [
                        {
                            name: 'Analysis of Phishing Attacks and Countermeasures on ResearchGate',
                            link: 'https://www.researchgate.net/figure/Stages-in-a-Phishing-attack_fig1_235947501',
                        },
                    ],
                },
            },
            commonTypesOfPhishing: {
                header: 'Common Types of Phishing',
                text: 'There are many types of phishing attacks. SecurityScorecard, a global leader in cybersecurity ratings, outlines 12 of the most common types of phishing attacks:',
                list: {
                    type: 'ul',
                    items: [
                        {
                            name: 'Email phishing',
                            description:
                                'a generic email that contains a link to a malicious website or a file attachment that installs malware onto your computer in an attempt to obtain your personal information.',
                            sources: {
                                sourceContent: [
                                    {
                                        name: 'SecurityScorecard',
                                        link: 'https://securityscorecard.com/blog/types-of-phishing-attacks-and-how-to-identify-them',
                                    },
                                ],
                            },
                        },
                        {
                            name: 'Spear phishing',
                            description:
                                'a type of email phishing that targets you by researching specific information about you or the organization you work for.',
                            sources: {
                                sourceContent: [
                                    {
                                        name: 'SecurityScorecard',
                                        link: 'https://securityscorecard.com/blog/types-of-phishing-attacks-and-how-to-identify-them',
                                    },
                                ],
                            },
                        },
                        {
                            name: 'Whaling',
                            description:
                                'a type of spear phishing impersonating the CEO of the organization you work for.',
                            sources: {
                                sourceContent: [
                                    {
                                        name: 'Rapid7',
                                        link: 'https://www.rapid7.com/fundamentals/whaling-phishing-attacks/',
                                    },
                                ],
                            },
                        },
                        {
                            name: 'Clone phishing',
                            description:
                                'an email with near-identical characteristics of a legitimate email you had previously received with the links or attachments replaced with malicious ones.',
                            sources: {
                                sourceContent: [
                                    {
                                        name: 'Cofense',
                                        link: 'https://cofense.com/project/phishing-vs-spear-phishing/',
                                    },
                                ],
                            },
                        },
                        {
                            name: 'Vishing (voice phishing)',
                            description:
                                'a phone call from an individual pretending to be from a well-known organization such as your government or bank institution in an attempt to steal your personal information.',
                            sources: {
                                sourceContent: [
                                    {
                                        name: 'Terranova Security',
                                        link: 'https://terranovasecurity.com/what-is-vishing/',
                                    },
                                ],
                            },
                        },
                        {
                            name: 'Smishing (SMS phishing)',
                            description:
                                'a text message that requires action similar to that of vishing.',
                        },
                        {
                            name: 'Angler phishing',
                            description:
                                'a customer service account on social media hoping to attract your attention and subsequently steal your personal information.',
                            sources: {
                                sourceContent: [
                                    {
                                        name: 'The CyberWire',
                                        link: 'https://thecyberwire.com/glossary/angler-phishing',
                                    },
                                ],
                            },
                        },
                        {
                            name: 'HTTPS phishing',
                            description:
                                'a link posing to be safe to click. HTTPS is used by most modern websites to encrypt information sent between you and it. This type of phishing attack increases the difficulty in verifying the authenticity of a malicious website.',
                            sources: {
                                sourceContent: [
                                    {
                                        name: 'PhishLabs',
                                        link: 'https://www.phishlabs.com/blog/more-than-half-of-phishing-sites-use-https/',
                                    },
                                ],
                            },
                        },
                        {
                            name: 'Pop-up phishing',
                            description:
                                'placement of malicious code within pop-up notification boxes on a website.',
                            sources: {
                                sourceContent: [
                                    {
                                        name: 'SecurityScorecard',
                                        link: 'https://securityscorecard.com/blog/types-of-phishing-attacks-and-how-to-identify-them',
                                    },
                                ],
                            },
                        },
                        {
                            name: 'Watering hole phishing',
                            description:
                                'frequently used websites within your organization that become compromised and download malware onto your device once visited.',
                            sources: {
                                sourceContent: [
                                    {
                                        name: 'NCSC',
                                        link: 'https://www.ncsc.gov.uk/collection/supply-chain-security/watering-hole-attacks',
                                    },
                                ],
                            },
                        },
                        {
                            name: 'Pharming',
                            description:
                                'installation of malicious code on your computer or a server that redirects you to fradulent websites without your knowledge or consent. This type of phishing attack is technical and difficult to detect.',
                            sources: {
                                sourceContent: [
                                    {
                                        name: 'SearchSecurity',
                                        link: 'https://searchsecurity.techtarget.com/definition/pharming',
                                    },
                                    {
                                        name: 'SecurityScorecard',
                                        link: 'https://securityscorecard.com/blog/types-of-phishing-attacks-and-how-to-identify-them',
                                    },
                                ],
                            },
                        },
                        {
                            name: 'Evil twin',
                            description:
                                'a fraudulent and insecure form of WiFi that is used to observe your online searches and can be used to steal your passwords.',
                            sources: {
                                sourceContent: [
                                    {
                                        name: 'Okta',
                                        link: 'https://www.okta.com/identity-101/evil-twin-attack/',
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
            facts: [
                {
                    header: '90%',
                    text: 'of <b style="color: #F26721">data breaches</b> are caused by phishing attacks.',
                    sources: {
                        sourceContent: [
                            {
                                name: 'Cisco Umbrella',
                                link: 'https://umbrella.cisco.com/info/2021-cyber-security-threat-trends-phishing-crypto-top-the-list?utm_medium=search-paid&utm_source=google&utm_campaign=UMB_22Q1_NA_EN_GS_Nonbrand_Threats&utm_term=pgm&utm_content=UMB-FY21-Q4-content-ebook-2021-cyber-security-threat-trends&_bt=531409955716&_bk=phishing&_bm=p&_bn=g&_bg=122023014712&gclid=Cj0KCQjwg7KJBhDyARIsAHrAXaGjI6x5DDM54ayYaSHTVBqjk8eEg2Q4Wp-7ZyVZXEPHI1L8DPp-FxIaAifAEALw_wcB',
                            },
                        ],
                    },
                },
                {
                    header: '667%',
                    text: 'increase in <b style="color: #F26721">spear phishing attacks</b> since the end of February 2021.',
                    sources: {
                        sourceContent: [
                            {
                                name: 'Barracuda Networks',
                                link: 'https://blog.barracuda.com/2020/03/26/threat-spotlight-coronavirus-related-phishing/',
                            },
                        ],
                    },
                },
                {
                    header: '$17,700',
                    text: 'per minute <b style="color: #F26721">lost by businesses</b> due to phishing attacks.',
                    sources: {
                        sourceContent: [
                            {
                                name: 'RiskIQ',
                                link: 'https://www.riskiq.com/resources/infographic/evil-internet-minute-2019/',
                            },
                        ],
                    },
                },
            ],
            howToPreventPhishingAttacks: {
                header: 'How to Prevent Phishing Attacks',
                text: 'It is important to be aware of how you can keep your data safe from phishing attacks. The Canadian Centre for Cyber Security (CCCS) identifies several ways to protect yourself from becoming a victim of a phishing attack:',
                list: {
                    items: [
                        {
                            name: '<b style="color: #F26721">Filter</b> spam emails',
                        },
                        {
                            name: '<b style="color: #F26721">Verify links</b> before clicking them',
                        },
                        {
                            name: 'Do not open <b style="color: #F26721">suspicious attachments</b>',
                        },
                        {
                            name: 'Keep up-to-date with <b style="color: #F26721">software updates</b> and <b style="color: #F26721">security patches</b>',
                        },
                        {
                            name: 'Avoid sending <b style="color: #F26721">sensitive information</b> (e.g., passwords) over email or text',
                        },
                        {
                            name: 'Use <b style="color: #F26721">anti-phishing software</b> that aligns with the Domain-based Message, Authentication, and Conformance (DMARC) policy',
                        },
                    ],
                },
                sources: {
                    sourcePrefix: 'For more information, visit',
                    sourceContent: [
                        {
                            name: "Don't Take the Bait: Recognize and Avoid Phishing Attacks on Canadian Centre for Cyber Security",
                            link: 'https://cyber.gc.ca/en/guidance/dont-take-bait-recognize-and-avoid-phishing-attacks',
                        },
                    ],
                },
            },
        },
        footer: {
            paragraph:
                'As you may have learned, emails are one of the most common sources of a phishing attack. It can sometimes be difficult to distinguish phishing emails from legitimate ones. Try your hand at identifying phishing emails by taking our quiz!',
            buttonLabel: 'Take Quiz',
        },
    },
    preface: {
        text: 'Before you begin, here are some things to watch out for when trying to identify a phishing email:',
        list: {
            items: [
                {
                    name: "Sender's <b style='color: #F26721'>email domain</b> is suspicious (e.g., public email domain such as gmail)",
                },
                {
                    name: '<b style="color: #F26721">Misspelling</b> within body of email',
                },
                {
                    name: 'Suspicious <b style="color: #F26721">attachments</b>',
                },
                {
                    name: 'External <b style="color: #F26721">links</b>',
                },
                {
                    name: 'Uses <b style="color: #F26721">logo</b> and <b style="color: #F26721">signature</b> from a trusted company',
                },
                {
                    name: 'Has a <b style="color: #F26721">generic greeting</b> (e.g., Hello, Dear user, etc.)',
                },
                {
                    name: 'Email expresses a <b style="color: #F26721">sense of urgency</b>',
                },
            ],
        },
        buttonLabel: 'Begin',
    },
    quiz: {
        completed: {
            text: 'Thanks for taking our quiz! Click review to review your answers or try again to reattempt the quiz.',
        },
        buttons: {
            labels: {
                next: 'Next',
                previous: 'Previous',
                phishing: 'Phishing',
                legitimate: 'Legitimate',
                finishQuiz: 'Finish Quiz',
                review: 'Review',
            },
        },
        review: {
            correct: 'Good job! You identified this one correctly.',
            incorrect: "It looks like you weren't able to identify this one.",
        },
    },
};
