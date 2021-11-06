export default {
    title: 'phishEd',
    landingPage: {
        header: {
            about: 'Welcome to phishEd (Phishing Education) - a quick and easy way to learn about phishing. You will learn about what phishing is, the stages of a phishing attack, the common types of phishing, and how to prevent phishing attacks. Remember to test your understanding by taking the short quiz at the bottom of this page!',
        },
        content: {
            whatIsPhishing: {
                header: 'What Is Phishing?',
                text: 'Phishing is an attack carried out by criminals using deceptive tricks in order to gain the trust of an individual or organization with the intent to steal their data. For example, a criminal may target an individual by pretending to be the representative of their banking institution in an attempt to obtain their credit card information or social insurance number.',
            },
            stagesInAPhishingAttack: {
                header: 'Stages in a Phishing Attack',
                image: {
                    alt: 'Diagram of the stages in a phishing attack',
                },
            },
            commonTypesOfPhishing: {
                header: 'Common Types of Phishing',
                list: {
                    type: 'ul',
                    items: [
                        {
                            name: 'Email phishing',
                            description:
                                'a generic email that typically contains a link to a malicious website or a file attachment that installs malware onto your computer.',
                        },
                        {
                            name: 'Spear phishing',
                            description:
                                'a type of email phishing that uses specific information about you or the organization you work for.',
                        },
                        {
                            name: 'HTTPS phishing',
                            description:
                                'a link posing to be safe to click. HTTPS is used by most modern websites which increases the difficulty in identifying its level of security.',
                        },
                        {
                            name: 'Vishing',
                            description:
                                'voice phishing; a call to an individual stressing urgency and panic in request of personal information or money.',
                        },
                        {
                            name: 'Smishing',
                            description:
                                'SMS phishing; a text message to an individual that requires action similar to that of vishing.',
                        },
                    ],
                },
            },
            facts: [
                {
                    header: '90%',
                    text: 'of data breaches are caused by phishing attacks.',
                },
                {
                    header: '667%',
                    text: 'increase in spear phishing attacks since the end of February 2021.',
                },
                {
                    header: '$17,700',
                    text: 'per minute lost by businesses due to phishing attacks.',
                },
            ],
            howToPreventPhishingAttacks: {
                header: 'How to Prevent Phishing Attacks',
                text: 'It is important to learn how to prevent phishing attacks in order to ensure data confidentiality. Phishing attacks target real people and people are fallible; therefore, it is important to understand how to better protect yourself when dealing with the possibility of an attack. The Canadian Centre for Cyber Security (CCCS) identifies several ways to protect oneself in order to prevent becoming a victim of a phishing attack.',
                list: {
                    items: [
                        { name: 'Filter spam emails' },
                        { name: 'Verify links before clicking them' },
                        { name: 'Do not open suspicious attachments' },
                        {
                            name: 'Keep up-to-date with software updates and security patches',
                        },
                        {
                            name: 'Avoid sending sensitive information (e.g., passwords) over email or texts',
                        },
                        {
                            name: 'Use anti-phishing software that aligns with the Domain-based Message, Authentication, and Conformance (DMARC) policy',
                        },
                    ],
                },
            },
        },
        footer: {
            paragraph:
                'Emails are one of the most common sources of a phishing attack. It can sometimes be difficult to distinguish phishing emails from legitimate ones. Try your hand at identifying phishing emails by taking a short quiz!',
            buttonLabel: 'Start Quiz',
        },
    },
    quiz: {
        buttons: {
            labels: {
                next: 'Next',
                phishing: 'Phishing',
                legitimate: 'Legitimate',
                finishQuiz: 'Finish Quiz',
            },
        },
    },
};
