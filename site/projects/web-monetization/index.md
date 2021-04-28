---
layout: article
meta_title: Web Monetization
body_class: report
title: Barriers to Adoption for Web Monetization
---

# Barriers to Adoption for Web Monetization


Karissa McKelvey and Ngọc Triệu, Simply Secure

<a class="link-reference" href="/files/DOTS-webmon-report.txt">Open as a text file</a>

_With funding support from Grant for the Web._

<div class="content">
  <a class="link-reference" href="/zines/web-monetization">Read full-sized in your browser</a>
  <br>
  <a class="link-reference" href="/zines/web-monetization/zine.pdf">Download as a printable PDF</a>
  <br>
  <iframe width="100%" height="600px" src="/zines/web-monetization"></iframe>

</div>


## Table of Contents

<span class="markdown-toc">

- [Project Overview](#1.-project-overview)
  - [Introduction](#1.1.-introduction)
  - [Research Objectives](#1.2.-research-objectives)
  - [Research Methodology](#1.3.-research-methodology)
  - [Who we are](#1.4.-who-we-are)
- [Understanding Web Monetization](#2.-understanding-web-monetization)
  - [Four Design Patterns](#2.1.-four-design-patterns)
  - [Case Studies](#2.2.-the-four-models)
- [Challenges](#3.-challenges)
  - [User Journey](#3.1.-user-journey)
  - [Centralized Financial Services](#3.2.-centralized-financial-services)
  - [Mental Models](#3.3.-mental-models)
- [Recommendations](#4.-recommendations)
  - [For Streaming Platforms](#4.1.-for-streaming-platforms)
  - [For Creators](#4.2.-for-creators)
  - [For Implementers](#4.3.-for-implementers)
- [Conclusion](#5.-conclusion)
- [Acknowledgments](#6.-acknowledgments)

</span>


## 1.  Project Overview 


### 1.1. Introduction

Businesses routinely use algorithmic insights into who a potential customer might be, and what they might be interested in purchasing, to increase purported ad relevance. From a corporate perspective, this intrusive approach has been a runaway success. The surveillance of users and the subsequent monetization of their data has powered the dramatic rise of many of Silicon Valley’s most profitable companies. Yet from a human-centered design perspective, the process of personalized advertising has been toxic. Users no longer simply consume products on the web -- they have become the product.

Mass targeted advertising has also created a series of societal and safety issues, ranging from coordinated misinformation campaigns to invasive mobile pop-ups. Despite these and other persistent problems, many users have continued to tolerate the current ad-based structure of the internet in an un-bargained-for and unequal exchange to access purportedly “free” information. But as these extractive practices continue to expand their scope, and users across the globe continue to gain awareness of these issues, attention has begun to shift towards finding a new way forward. How can websites continue to get paid for web traffic without employing targeted advertising? 

The [Web Monetization API](https://webmonetization.org/) is a new standard that proposes a technical answer to this complicated question. In doing so, it offers a piece of technology that has up to this point been absent in web browsers: the ability for users to transfer miniscule amounts of money as an ad-free means to compensate websites and their creators. Still, for many users, much remains unknown about this innovative technology.

This project, supported by the [Grant for the Web](https://www.grantfortheweb.org/), seeks to address this gap in knowledge by creating a better understanding of the current obstacles to the widespread adoption of decentralized identity and web monetization. In doing so, extensive research was conducted to reveal an in-depth depiction of the existing ecosystem from the user’s perspective. This document identifies several opportunities for expanding the adoption of web monetization.

### 1.2. Research Objectives

Our expert research and design team came into this project with little understanding about the specifics of Web Monetization. Although this semi-outsider's perspective ultimately helped us see new user adoption pain points with fresh insight, it also meant that to begin we first needed to understand the ecosystem at a deeper level. Therefore, over the course of three months (November 2020 to February 2021) we carried out the following research objectives:

<div class="take-aways">
*   **Learn more about design patterns** that already exist in the space; and
*   **Understand security threats**, privacy threats, and other risks to end-users.
*   **Recommend ways around the roadblocks** to adoption of decentralized identity and web monetization;
</div>


### 1.3. Research Methodology

Our research strategy was to first map the ecosystem of stakeholders, and then pinpoint key organizations with significant influence in the space. After completing this initial task, we chose to interview those who had already performed significant on-the-ground research themselves, in order to capture a high-level perspective of their various insights. This approach allowed us to leverage the deep-seated knowledge of these experts as we moved forward with our work. 

Next, we created a stakeholder map for Web Monetization as well as a slightly larger group more broadly defined -- including not only the existing Browser API, but also projects and products that are interested in or impacted by the monetization of websites. This important step allowed us to learn from various approaches in adjacent domains and apply lessons learned. 

Core stakeholders (i.e., those who have the most direct influence and control over web monetization) include web browsers, large platforms, and media companies, as well as those who are creating and consuming content on the web. The [Brave](https://brave.com/) web browser (which has tested a new form of payment directly through the browser), and [MetaMask](https://metamask.io/) (a web extension that manages cryptocurrencies and interfaces payments with websites) were included as direct stakeholders in this exercise. 


![](image_1.png)


After organizing the core, direct, and indirect stakeholders, we then mapped their relative interests against the power they have over the adoption of web monetization policies and practices. This methodology enabled us to better understand who we should focus on interviewing as part of our research process.

![](image_2.png)


The final phase of qualitative research involved interviewing 12 stakeholders, ranging from web monetization experts to end-user creators with no knowledge of web monetization. We also conducted a workshop for eight designers and product managers with experience in web monetization, decentralized technologies, and web extensions. The workshop focused on challenges that designers face when creating usable decentralized technologies, and the gap between user and developer mental models. This gap is a key challenge to the growth and adoption of the Web Monetization API. 


### 1.4. Who We Are

[Karissa McKelvey](https://simplysecure.org/who-we-are/karissa.html) and [Ngọc Triệu](https://simplysecure.org/who-we-are/ngoc.html) are core team members of [Simply Secure](https://simplysecure.org/), an international team of experts in research, design, software development, and product management with an emphasis on privacy, security, transparency, and design ethics. Through additional support from a diverse set of advisors and partners, Simply Secure helps practitioners design technology that centers and protects vulnerable populations by providing capacity-building, open research support, and community convening. 

 \
Karissa researches technical architecture design and its impact on usability, safety, and resilience. Her contributions to decentralized applications are relied on by at-risk users including human and environmental rights defenders, journalists, and civil society activists. Her background is in political sociology and data science. 

Ngọc sees design as an intervention to asymmetrical power relations. As a design researcher, she imagines the futures of the world through lenses such as decoloniality and decentralization. Ngọc is passionate about user advocacy, co-creation, and equal access to knowledge(s). Her background is in design management, history, and cultures. 

## 2.  Understanding Web Monetization


### 2.1. Four Design Patterns

There are four dominant design patterns for using web monetization today: (1) advertisement, (2) tips, (3) subscriptions, and (4) streaming. Each is discussed below.

**(1) Advertisement** is the traditional way to monetize a website. The benefits are considerable, as creators get a reasonable and stable expectation of payment over time and per pageview. As noted above, however, advertisement today is typically invasive from both user experience and privacy standpoints. 

* _In the future, we hope to see more websites offer a button that says “_Remove advertisements_” to enable Web Monetization. See more in the [recommendations section for creators](#4.2.-for-creators)._


![alt_text](image_3.png "image_tooltip")


**(2) Tips** are a common and effective method to solicit money in physical spaces. The tip jar concept is therefore one that many websites have incorporated into their  practice by using a service that makes it easy for users to make a donation. 

* _In the future, we hope to see more browsers implementing tip buttons directly. See more in the [recommendations section for implementers](#4.3.-for-implementers)._


![alt_text](image_4.png "image_tooltip")


**(3) Subscriptions** allow creators to predict a stable amount of income per cycle (typically monthly). Subscriptions also enable creators to benefit from a sustained creator-reader relationship, by which creators are better able to understand who their subscribers are and what their audience wants -- which helps websites grow and retain their subscription bases. Notably, subscription relationships can flourish when audience members can have the interactions they expect. For example, some people may be less likely to create a subscription if they are forced to give up personal information or receive too many emails; while others may be less likely to renew a subscription if they feel disconnected from the creator.

* _In the future, we hope to see subscriptions become easier to create as part of the Web Monetization API's developer documentation. See more in the [recommendations section for implementers](#4.3.-for-implementers)._


![alt_text](image_5.png "image_tooltip")


**(4) Streaming** is a new method enabled by the Web Monetization API that allows small quantities of money to be sent to a creator according to how much a user watches or interacts with their website. However, most web browsers do not yet support streaming payments over the Web Monetization API, so in order to utilize streaming services users need to download a web extension or one of the browsers that supports it. Although this innovative space remains largely unexplored, certain prototypes do currently exist that experiment with the method. [Coil](https://coil.com/), for example, is a 5$/mo subscription service that gives a percentage of that subscription fee to creators based on the amount of time users spend on each website. Though this process is likely different from what creators expect from a typical subscription service (under which an agreement is made directly between the producer of the content and the consumer at a predictable rate), it likely creates new streams of revenue from previously untapped sources such as users who would prefer -- due to level of use or privacy preferences -- to not sign-up for a direct subscription. 

* _In the future, we hope to see streaming platforms become more transparent about how much money is given to creators. See more in the [recommendations section for streaming platforms](#4.1.-for-streaming-platforms)._


![alt_text](image_6.png "image_tooltip")


### 2.2. Case Studies

Our team interviewed five new users of the Web Monetization API and tracked the progress of two organizations that attempted to integrate the technology into their existing web applications. Their experiences are documented in the case studies below.

**Case Study #1: COMPOST**

[COMPOST](https://compost.digital)is a magazine working towards forming a cooperative. It is now sharing the bank account of its Open Collective fiscal host. In addition to the editorial team, their magazine consists of contributors who all get paid upfront for creative contributions, and participate in further revenue sharing decisions where they may claim a portion of the total. All of the contributors to the magazine have their own personal bank accounts. They wanted to use the Web Monetization API for two particular purposes.

*   **Crowdfunding**: “We wanted to use it to be able to track the real-time balance and feed it back to magazine readers, but access to the account balance doesn't exist -- there is no way to show collective or historical balance. That's something we'd expect.”
*   **Distribute payments to multiple creators from a single website**: “Ideally each creator, each writer would get their own payment pointer. Then the money would go directly to them.” However, they found it time consuming for every contributor to sign up for a payment pointer individually, so they just have one payment pointer for the entire magazine and then manage the distribution of that money manually.

**Takeaways:** Managing money with multiple contributors on a single website is still not entirely straightforward with the Web Monetization API. Doing so requires extra effort on behalf of an organization’s IT manager or accountant to properly distribute payment to all contributors. The suggested [probabilistic revenue sharing pattern](https://webmonetization.org/docs/probabilistic-rev-sharing/) requires all contributors to sign up for a payment pointer and have separate bank accounts through a KYC process. Associating each payment pointer to a different bank/payment account isn't easy, and systems for invoice payout isn't in place. This approach is even yet more difficult to achieve when working with contributors of many different skill levels, time commitments, and abilities. Ideally in the future, Uphold will allow organizations to easily create and manage payment pointers, bank accounts, and invoicing.

**Case Study #2: Streetmix**

[Streetmix](https://streetmix.net/) is a collaborative civic engagement platform for urban design. They are developing a two-tiered freemium model, through which users can pay money to access premium features. Patreon is their target payment platform, but the team also wanted to integrate the Web Monetization API as an alternative way for users to pay for subscriptions. The Streetmix team encountered two main challenges in doing so:

* **Fixed subscription rates.** “Can we change the default rate people pay for a subscription? We haven't figured that out. Streetmix's model is not about being trapped in your site as long as possible.” The organization would benefit from a tutorial that provides guidance on how to ask users for a flat rate per month for access to premium content, rather per-visit payments.
* **Technical mental models.** “We figured that requiring a browser extension wouldn’t work for Streetmix users. If they have a Coil account they can set up a street mix account and connect them. But it's been a struggle to integrate. Developer friendliness is a more pragmatic priority. In our brains we haven't separated Coil and the protocol itself.” 

**Takeaways:** The Streetmix team would appreciate more developer-facing tutorials on how to integrate their platform with Web Monetization. They experienced confusion around the difference between the Interledger Protocol, Web Monetization API, and Coil. These difficulties could be an indication that the provided [introductory materials](https://webmonetization.org/docs) were unclear regarding which level of abstraction developers should be working with. Going forward, developers would benefit from the creation of an introductory checklist that offers insight into when they should, or should not, use an intermediary such as Coil in their platform.


## 3.  Challenges 

Overall, our research revealed that web monetization is still in an early innovation phase with significant barriers to adoption ahead. Although the ultimate goal of the process is for the end user is to pay the creator, and for the creator to get paid, we found numerous hurdles to accomplishing this goal for either group. These include the unknowns of the user journey, the in-depth identification requirements and variance of centralized financial services, and the incorporation of new mental models.

### 3.1. User Journey

Based on our research, we mapped out five key points for both creators (payees) and the audience (payers) in the user journey towards web monetization adoption. A conversion funnel for Web Monetization shows the rate at which users (i.e., a payee or payer) complete each step of the journey. The conversion rate for onboarding to the Web Monetization API could be monitored by the flagship products that are invested in the success of the technology. Below, we’ve listed key questions that should be readily answered while users are attempting to integrate the technology.



1. _Understand why._ A user first needs to understand why they should invest their time (and ultimately money) into web monetization. In particular, a creator needs to understand why they should spend time signing up, and how doing so could impact their audience and economic return. Relevant questions include:

<div class="aside">

  1. How much money does a creator expect to receive over time?
  2. How does it benefit me (or my users?)
  3. How does it compare to other payment methods?
  4. How easy will it be to correctly report my income for tax purposes?

</div>

2. _Create a wallet._ Once a user understands why they want to use web monetization, they next need to go through the process of creating a wallet. Most users will create a wallet on centralized services such as [Uphold](https://wallet.uphold.com/signup), as this is the [recommended method](https://webmonetization.org/docs/uphold/) on the Web Monetization website. At this point, relevant user questions include:

<div class="aside">

  5. What happens if I lose my password?
  6. Can I manage my own decentralized wallet (on a phone, laptop, web extension or all of the above)?
  7. How can I manage payment pointers for users of my platform?

</div>

3. _Enable web monetization._ To use web monetization, two sides of the relationship must be established: (1) the creator needs to integrate the payment pointer into their website, and (2) the reader needs to have a web monetization-enabled browser or web extension. For first-time users, this will involve installing and running the appropriate software, knowing how to finish the onboarding process, and then connecting their newly created wallet. In doing so, questions may include:

<div class="aside">

  8. How will the user experience change if web monetization is enabled?
  9. Will enabling web monetization slow down my website?

</div>

4. _Make a payment._ Once web monetization is enabled and a wallet is connected to the browser, the user will be able to send payments. The browser only allows allocation of payments with the amount and the intended recipient (also called a payment pointer).

<div class="aside">

  10. How much am I paying?
  11. When do I pay?
  12. How can I pay more or less?
  13. How can I refund a payment?

</div>

5. _Retention and sustainability._ Upon completion of the prior four steps, a user’s concern turns toward the future. For web monetization adoption to increase (and for existing users to be retained and sustained), users must have a general understanding of what using web monetization looks like long term. Unfortunately, however, we found a significant lack of attention to this detail in the existing ecosystem. It is not easy for users to find answer to important questions such as:

<div class="aside">

  14. How much money will a creator expect to receive over time?
  15. How much of my money is going to be spent at which websites?
  16. Is this worth my money, or should I allocate my resources in a different way (i.e., a subscription to the creator)?
  17. How can I further engage and retain my audience?

</div>

### 3.2. Centralized Financial Services

The designers and experts we interviewed as part of our research process
identified onboarding as the single most challenging obstacle for web
monetization adoption. Creators who want to collect money using Web
Monetization must sign up for an account with an approved financial services
company (at the time of research, two companies were available:
[Uphold](https://uphold.com/en-us) and [GateHub](https://gatehub.net/)).
Similar to PayPal, services like Uphold broker payments and allow users to
exchange between tokens and currencies. 

To deposit or withdraw money, users are required to provide verification of
their identity to the financial service. This includes an operational email and
phone number, as well as a photo of themselves and an identification document
such as a passport. These requirements are part of an industry standard
practice called KYC (Know your Customer), which has been implemented with the
goal of reducing fraud and abuse in these areas. Though important, this process
nonetheless introduces a significant number of hurdles for creators to get
their Web Monetization identification number and start collecting money from
their audience members.

Interestingly, we observed that the user experience between Uphold and GateHub
varied significantly enough that specialized tutorials and training may be
needed for each platform. This suggests that the widespread adoption of the Web
Monetization API is at least partially dependent upon the capabilities of these
third-party companies and their human-centered design practices. This level of
responsibility -- which is largely beyond the control of the API -- is
important to acknowledge as the maintenance of these services is subject to
instability over time. 

### 3.3. Mental Models

A mental model is an explanation or representation of an individual's thought process about how something works, which simplifies a complex topic into a more intuitive understanding. We found four key concepts that require users to create new mental models to use the Web Monetization API: web extensions, wallets, account recovery, and streaming.

**_Web Extensions_**. It is often unclear to users why downloading a web extension is necessary. In response, web browsers such as Brave and Puma removed this extra step by integrating the underlying technology directly into the browser itself. Although this improves adoption, one participant noted there is “skepticism that laggard browsers will adopt the right crypto support, especially on mobile.” If the Web Monetization API is to become more accessible, it needs support to be more directly integrated in popular browsers such as Firefox.

**_Wallets._** A wallet is a service that stores the public and/or private keys for cryptocurrency transactions. The concept of a “wallet” is common in adjacent and related products. For example, the Brave Browser has a feature which allows users to tip websites from a wallet that is integrated into their browser as a web extension. Nonetheless, as discussed above, creating a wallet is often a new experience (and potential obstacle) for many users. Users who are familiar with cryptocurrency may expect to be able to connect an existing browser wallet such as MetaMask, but that is also not directly possible with the Web Monetization API at this time.

**_Account recovery._** If you lose your password to a typical centralized account, the service provider can help you gain access anyway with identity verification methods, such as a phone number. As a participant noted, however, “if you lose the keys to your [decentralized] wallet, there isn't an analogue for a locksmith.” This limitation creates a tension between security and usability.

**_Streaming_**. Web Monetization allows streaming payments to be made through a browser via small incremental payments made over time. This breakthrough technology is not possible in traditional banking relationships. Such innovation, however, can be a hurdle for users seeking to understand when and how money is being sent and received. To better communicate these processes, Web Monetization-enabled web extensions should give users direct feedback about how much money they are sending to a website in real time. A major goal should be to prevent a situation in which a user is unaware that they are giving money to a website.  

## 4.  Recommendations

Our research revealed a myriad of opportunities that can help expand web monetization adoption. To summarize, we've organized these recommendations into three target groups. To get the most of out of this section, take a moment to recognize what user group you fall into. If you are:

  - [For Streaming Platforms](#4.1.-for-streaming-platforms) is for people who are part of an organization such as Coil, that provides an aggregation or streaming service using the Web Monetization API.
  - [For Creators](#4.2.-for-creators) is for people part of a small group or an independent creator looking for other forms of fundraising, look at the "For Creators" section. 
  - [For Implementers](#4.3.-for-implementers) is for people interested in implementing, maintaining, or contributing to the Web Monetization API and surrounding documentation.


### 4.1. For Streaming Platforms

*Automate the signup process*

Right now, integrating through the OAuth API in Coil is ad-hoc and manual.
Mature implementations of API integration would have a self-serve user
interface, with the ability to automatically enable OAuth and get a developer
key as part of a user interface. This has the power to change a weeks or
months-long process into hours or days.

*Better Wallet Support*

As noted in section 3.3, a "Wallet" is a new concept that requires new mental
models on the behalf of creators. Currently, streaming platforms require creators
to integrate with a wallet platform such as Uphold or GateHub before collecting
money.

Streaming platforms like Coil could make this easier by integrating the KYC
process directly into their creator platform, so that the streaming platform
users would not need to maintain multiple accounts. This could be achieved
through a direct partnership with these companies that allows a seamless user
experience.

Creators and platform developers who are familiar with cryptocurrency may
expect to be able to connect an existing browser wallet such as MetaMask, but
that is not directly possible in Coil. Supporting this as an option may also
grealy improve conversion rates for early adopters.

*Creator-friendly documentation*

Many of the existing explanatory resources about Web Monetization are targeted
towards end users or developers, resulting in a gap addressing how to integrate
the technology into existing creative platforms where creators are already
making money. This could be improved with step-by-step instructions, including
screen shots, on how to start making money quickly with existing
platforms (such as YouTube and Twitch).

*Web extension walkthrough*

Any web extension needs thorough in-app walkthroughs to orient users on how to
best use their service. It isn't entirely clear that the Coil web extension,
for example, is primarly targeted at audience members, rather than creators. It
could be made more clear why and how the web extension is needed immediately
after installing it.

*Subscription transparency*

In the user journey section and the accompanying zine, we outlined the many
unanswered questions that creators and audience members have when setting up
an account with a service such as Coil.  

<div class="aside">

  1. How much money does a creator expect to receive over time
  2. How much am I paying?
  3. When do I pay?
  4. How can I pay more or less? 
  5. How can I refund a payment? 
  6. How much money will a creator expect to receive over time? 
  7. How much of my money is going to be spent at which websites? 
  8. How can I further engage and retain my audience?

</div>

Streaming platforms should improve the transparency in the web extension and on
the creator's profile. Platforms should provide real-time feedback in the
streaming platform website (for creators) and in the web extension (for
audience members). This would help improve trust in the service as well as the Web
Monetization API. 

As we noted in 3.3., streaming is a new technology that requires new mental
models, and real-time tactile feedback can help improve understanding. To
better communicate these mental models, Web Monetization-enabled web extensions
should give users direct feedback about how much money they are sending to
a website in real time. A major goal should be to prevent a situation in which
a user is unaware that they are giving money to a website.

### 4.2. For Creators

*Add a payment pointer*

The most straightforward way to start collecting money immediately is to add
a payment pointer to your content. After signing up for Uphold or Gatehub, you
are provided a payment pointer (sometimes called a "Wallet URL") which is
a series of numbers and letters unique to you. If you add this payment pointer
to the HTML of your website, you can start collecting money from users. If you
are collecting money through an existing platform such as YouTube or Twitch,
you can enable this payment through a platform such as Coil.

*No ads?*

Offer users a button that says “_Remove advertisements_” in either a banner ad or
a blocking pop-up upon entering the website. After clicking the "_Remove advertisements_" button, users
would be sent to a screen that explains how to install the appropriate web
extension or browser that supports web monetization. Then, offer a button for
the user to return tothe page they were attempting to view. You can see an
example of how to integrate this technically in Web Monetization's official
Getting Started documentation.

*Inform your audience*

If you decide to adopt the Web Monetization, you can inform your users that
they must download a web extension or browser to properly enable it. This can
be done by providing a series of steps once the user has decided to opt-in to
paying you. 

For example, here is an [exerpt from COMPOST digital's
instructions](https://one.compost.digital/support-us/#web-monetization):

<div class="aside">

  1. Visit https://coil.com/signup and signup.
  2. Go to Settings and enter the "Membership" menu item.
  3. Add your credit card and subscribe. It's $5 a month.
  4. Download the extension for any browser of your choice.

</div>


### 4.3. For Implementers

*Developers Are Users*

A target user base for Web Monetization is developers who want to integrate web monetization into their platforms or applications. Yet because Web Monetization and the Interledger Protocol have not yet been adopted by mainstream browsers, the user base is currently limited to those products that incorporate these technologies. Going forward, mobile and desktop applications that support payee-payer relationships on their platforms could be potential early adoption partners. However, it is still difficult for developers to understand how to create and manage payment pointers programmatically. 

*Built-in tipping*

If the Web Monetization API is to become more accessible, it needs support to
be more directly integrated in popular browsers. The Web Monetization API could
enable tipping directly in the web browser itself by presenting a button that
would allow for a tip to be sent directly to the creator of the content
currently on the page. Notably, Brave Browser has
a [product](https://brave.com/tips/) like this that users can try today
(although not very many websites currently support Brave tips at this time).
Web Monetization has an opportunity to fill this gap by making tipping a part
of web browsers for any creator that includes a payment pointer in their
website.

*Quality assurance*

During the process of this research, we found that users had significant
challenges signing up for GateHub accounts. The maintainers of the Web
Monetization main website could create a process for monitoring the quality for
any of the services linked on the main webpage. Services that are unable to
complete user experience tests at a high standard should not be included as
recommended services. 

## 5.  Conclusion

Overall, our research shows that the Web Monetization API retains real interest and momentum throughout the community. The innovative tool has the potential to supplement (although not replace) advertising as a means for accessing content and paying creators on the web. In situations where this transition occurs, individual autonomy and agency will be strengthened as users -- not large corporations -- will be able to set their own privacy and payment preferences. Website developers will also benefit through an additional option by which they can monetize their content without relying on invasive surveillance practices. Yet despite this promising potential, significant barriers to adoption remain on behalf of both the sender and receiver of payments. Significant confusion also continues to surround the various contexts in which the Web Monetization API should or _should not_ be used. With time, however, it is our hope that these issues will be addressed through improved documentation, quality control, and increased buy-in from major browsers. 


### 6. Acknowledgments

Thanks to Grant for the Web and Simply Secure for financial and organizational support of this project. Our gratitude also goes out to all workshop participants and interviewees for sharing their expert analysis, insight, and experience.


