import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    pageLink: {
      home: `Home`,
      applications: `Applications`,
      nodeplan: `Nodes`,
      bsn: `BSN`,
      team: `Team`,
      community: `Community`,
      whitepaper: `Whitepaper`,
      join: `Join`,
      contact: `Contact`,
      explorer: `Explorer`,
      road: `ROAD`,
      disclaimer: `Disclaimer`,
      riskstatement: `Risk Statement`,
      wallet: `Wallet`,
      consensus: `Consensus`,
      grant: `Grant`,
      nft: `NFT`
    },
    pages: {
      home: {
        launchTitle: `We are working hard to launch the 4.0 new mainnet`,
        welcomeMsg: `An Ecosystem of the Internet of Things`,
        welcomeNote: `INT is the world's first bottom up new-generation blockchain of things (BoT) communication standard and base application platform.`,
        watchVideo: `Watch Video`,
        header1: `What INT Solves and Provides`,
        subheader1: `Designed for easy integration with any IoT protocol.`,
        gridIcons: {
          header1: `Use case driven approach`,
          desc1: `Aligning network functions with real-world applications. Ensuring design and innovation of INT public chain architecture evolves to meet new and current IOT application scenarios.`,
          header2: `Innovative "double-chain" network architecture`,
          desc2: `Separation of block validation, consensus, and transactions between the main chain and subchains for better efficiency.`,
          header3: `Optimized P2P protocol`,
          desc3: `The non-centralized SuperNode design supports multiple operators and IPv6.  It has a better P2P connection success rate, high broadcast efficiency, good redundancy, and transmission performance is better than TCP.`,
          header4: `Token economics and incentives`,
          desc4: `Effective tokenomics and incentives to drive network governance, community activities, and IOT data and device management.`,
          header5: `Developer-friendly smart contracts`,
          desc5: `Developer friendly. INT is compatible with EVM, WASM, and supports solidity and multi-language writing smart contracts. Developers can use familiar tools to develop DAPP on INT at a very low cost.`,
          header6: `Leading application development framework`,
          desc6: `INT provides an integrated and optimized SDN, blockchain, and fog computing technologies that follow the "cycle progressive application" model. INT uses these development techniques in the implementation of applications for its partners.`
        },
        bsnHeader: `Certified Developer on China's Blockchain Service Network (BSN)`,
        bsnDesc: `INT became a certified developer on the Blockchain Service Network in May 2020. The Blockchain-based Service Network is a cross-cloud, cross-portal, cross-framework global public infrastructure network used to deploy and operate different types of blockchain applications.`,
        bsnViewMore: `Find out more`,
        header2: `Application Solutions`,
        subheader2: `Most applicable BoT architecture and solutions.`,
        viewMore2: `View more application solutions`,
        latestNews: `Latest News`,
        viewMoreNews: `View more latest news`,
        tendermintTitle: `Tendermint`,
        tendermintSubTitle: `The IPBFT consensus protocol adopted by INT is a brand-new consensus protocol improved based on PBFT (Practical Byzantine Algorithm). The efficiency has been greatly improved and online governance has been further optimized.  At the same time, the most advanced method-based on the verifiable random function (VRF) password tossing lottery is used to randomly elect verifiers, which guarantees a greater degree of security and fairness.`,
        partners: `Our partners`,
        partnersSubheader: `Who we collaborate with to generate ideas and solutions for a stronger blockchain ecosystem.`,
        partnersViewMore: `View our team`,
        mentionIn: `Mentioned in`,
        toConsensusBtn: `Learn More`
      },
      applications: {
        pageTitle: `Applications`,
        pageSubTitle: `Designed for DApps. Building a new ecosystem of the Internet of Things.`,
        intro: `The business layout is oriented around ITS (Intelligent Transportation) and IOV (Internet of Vehicle). We will gradually implement application scenarios related to the vehicle industry such as purchasing, driving, and city management, etc., and serve the comprehensive business ecology of car owners, enterprises, and governments.`,
        routerTitle: `Esurfing Blockchain Router - INT's First Use Case Product`,
        routerSubTitle: `Home Networking Device | Private and Encrypted Storage | Mining`,
        routerBannerTitle: `Safe and efficient network storage - home NAS (Network Attached Storage) backup`,
        routerBannerSubTitle: `Seamlessly back up files, photos, and videos from your mobile device to the INT router as a NAS device over the network with a simple to use app. Users can share network bandwidth, storage space and other resources to earn tokens.`,
        routerListTitle: `Intelligence in a compact package - the genuine smart router`,
        routerListItems: [
          `Supports PPPOE, dynamic IP, and static IP to access broadband.`,
          `Supports TCP/IP, PPPOE, DHCP, ICMP, NAT and other protocols.`,
          `Built-in firewall supporting IP addresses, MAC addresses, domain address filtering, flexibly control Internet access rights and time.`,
          `Supporting Upnp, static routing.`,
          `Supporting standard functions of mainstream smart routers.`
        ],
        routerTitle2: `Safe and reliable resource sharing through the INT router - profitable blockchain smart gateway`,
        routerSubTitle2: `Users share their network bandwidth, storage space and other resources through the router to earn tokens. The router provides CDN, edge storage, and edge computing. The incentive tokens generated in the shared network ecosystem are used to measure, register, and prove the provision and consumption of sharing resources. The profit is settled daily based on hardware performance of the device, size of the upstream bandwidth, size of the shared storage, and online duration.`,
        OBDTitle: `INT blockchain-powered driver-assistance OBD device`,
        OBDSubTitle: `Distributed Internet of Vehicles economic system with an auto-ledger.`,
        OBDIntro: ``,
        OBDBannerTitle: `Blockchain secured data`,
        OBDBannerSubTitle: `The auto-ledger is an interaction and accounting system for the full life-cycle of the automobile. A masking algorithm keeps personal user data private, while the blockchain keeps vital data accurate and immutable. We believe it will become a part of the infrastructure for the automobile industry in the 5G and AI era.`,
        OBDTitle2: ``,
        OBDSubTitle2: ``,
        OBDTitle3: `IOV Future`,
        OBDSubTitle3: `The ecosystem is oriented around ITS (Intelligent Transportation) and IOV (Internet of Vehicle). We will gradually implement application scenarios related to the vehicle industry. The system will benefit vehicle owners, enterprises, and governments.`,
        OBDTitle4: `Intelligent driver-assistance`,
        OBDSubTitle4: `An intelligent driver-assistance device covers vehicle condition monitoring, driving assistance, driving safety, and self-service maintenance.`,
        OBDTitle5: `Unique masking algorithm`,
        OBDSubTitle5: `Adopt INT Chain’s masking algorithm for developing an intelligent driving system without sensitive data.`,
        coreFunctions: `Core Functions`,
        coreFunctionsItems: {
          title1: `Remote Diagnostics`,
          subTitle1: `The device can send diagnostic trouble codes (DTC) to auto repair shops through smart contract and guide service engineers to support on-site.`,
          title2: `Security Alert`,
          subTitle2: `Alerts when an abnormal situation occurs, such as flameout, displacement, vibration, collision, rollover, overspeed, drive over fence, and engine coolant temperature.`,
          title3: `Position Tracking`,
          subTitle3: `BDS (Beidou Navigation Satellite System), GPS (Global Positioning System) and BSS (Base Station Subsystem) are used to track car positioning.`,
          title4: `Driving Analysis`,
          subTitle4: `Analyze driving behavior, such as speed, distance, gear changes, turning, and fuel consumption.`,
          title5: `Community Help`,
          subTitle5: `Users can seek help from community members nearby.`
        }
      },
      nodeplan: {
        pageTitle: `INT Nodes`,
        pageSubTitle1: `INT is an IPBFT blockchain with a DPoS+dBFT consensus protocol maintained by elected Validator Nodes and Candidate Nodes. Validator nodes are run by the INT community.`,
        pageSubTitle2: `The nodes provide INT with networking, storage, and computing tasks, and collectively keeps the blockchain running smoothly while maintaining transparency, immutability, stability, and security.`,
        pageSubTitle3: `INT encourages each Validator Node to build and develop their own communities and so the global community can cooperate and grow the INT global ecosystem.`,
        panelsTitle: `Mainnet`,
        panelsSubTitle1: `Mainnet 3.0 - Live`,
        panelsDesc1: [
          `13 Validator Nodes`,
          `87 Reward Nodes`,
          `Candidate Nodes`,
          `2000 TPS`
        ],
        panelsLink1: `Mainnet 3.0 node setup guide`,
        panelsSubTitle2: `Mainnet 4.0 - Upcoming`,
        panelsDesc2: [`25 Validator Nodes`, `Candidate Nodes`, `2000 TPS`],
        panelsLink2: `Mainnet 4.0 node setup guide`,
        nodeRequestTitle: `INT 4.0 Validator Recruitment Plan`,
        nodeRequestDesc: `INT is recruiting Mainnet 4.0 network validators on a long-term basis. Organizations and individuals who meet the requirements can apply and become INT 4.0 Validator to jointly participate in the maintenance and governance of the blockchain network and receive node rewards.`,
        nodeRequestBtn: `Learn More`,
        incentivesTitle: `Node Incentives`,
        incentivesDesc: `INT Foundation will spend 20 million INT per year as node rewards. The rewards will be all paid out of the INT Foundation's dedicated wallet. Rewards are tiered and is dependent on type of node and amount staked.`,
        incentivesListItems: [
          `The Thearchy Node will receive 30% of the rewards mentioned above.`,
          `The Reward Node will receive 50% of the rewards according to the number of votes every time a block is generated.`,
          `20% of the reward will be distributed to all voters.`
        ],
        intTokenTitle: `INT Token`,
        intTokenSubTitle: `INT is the native token on the INT blockchain network.`,
        intTokenDesc: `The INT token is used to stake on the network to passively earn more INT, as well as used to vote in community proposals. The token is also used to pay transaction fees on both the INT main network and subchains.`,
        nodeMapTitle: `Node Distribution Map`,
        nodeMapSubTitle: `To maintain our ethos of decentralisation and security, INT nodes are spread across the globe in several continents and countries. We have a range of technical and business expertise within our global community to keep the network running reliably and securely.`
      },
      bsn: {
        pageTitle: `Certified for the Blockchain Service Network`,
        pageIntro: `In May 2020, INT successfully became a Certified Developer on the Blockchain Service Network (BSN). The BSN was launched in collaboration with large enterprises such as China UnionPay and China Mobile, and is planned to be a high-availability, multi-cloud,  'Internet of Blockchains' network.`,
        pageDesc1: `The BSN network is to be cross-platform and support the most popular Western frameworks like Hyperledger Fabric, and Ethereum. Smart contracts and DApps that already exist can be easily ported on BSN.`,
        pageDesc2: `We are at the dawn of BSN and excited to be a part of it. Stay up to date on INT's involvement with BSN here and on our social media channels.`,
        bsnGlobalLink: `Visit BSN global website`
      },
      team: {
        pageTitle: `Team`,
        pageSubTitle: `The INT team have previously worked in leading technology companies on high profile projects, and bring a wealth of experience to the INT project. Previous companies include EastCOM, Huawei, and Alibaba.`,
        pageIntro: ``,
        executiveManagementTeam: `Executive Management Team`,
        primaryTeam: [
          {
            name: `Yin Xiangyu`,
            role: `Head of INT China`,
            desc: `An enthusiast of Internet of Things. A domestic IoT research and development practitioner in the earliest period, Internet serial entrepreneur, Apache Mynewt code contributor. Mr. Yin has participated in the design and development of wearable remote life test instrument based on GPRS, anesthesia depth tester, early diabetic neuropathy tester, smart home and power carrier system. Later, he began his business in Internet industry. By 2013, he has completed the R&D and promotion of the first domestic WeChat IoT device named "Yinmeitu".`
          },
          {
            name: `Chen Guanghui`,
            role: `Chief development engineer of INT Dapp`,
            desc: `Graduated from Fudan as a Computer Software major. He worked for EastCOM and Huawei successively with rich experience in communication underlying technologies, system architecture, R&D project management, software development, mobile Internet and other fields. From 1993 to 2005, he worked as a R&D engineer in the CDMA Switch Development Department, Head of the Testing Department and Vice General Manager in EastCOM. In 2005, he served as Head of the Enterprise Communications MKT Department in Huawei and Head of the Railway Signal Architecture Design Department. In 2012, he started his own business in mobile phone taxi service market.`
          },
          {
            name: `Wang Hongwei`,
            role: `Master of Sichuan University`,
            desc: `10 years of technology research in the field of IOT, early platform architect of "Truck Gang". Leader of HUAWEI's first industrial route AR531 device, inventor of the high speed iron signal 3oo3 combination fault and safety system, inventor of intelligent packaging.`
          },
          {
            name: `Michael Zhang`,
            role: `MBA from National University of Singapore`,
            desc: `Mr. Zhang has over 20 years of experience in IT management and operation in Asia. He is a leading expert in cross-border trade and supply chain management.`
          },
          {
            name: `Liu Zhicong`,
            role: `Founder of Bucky Cloud, Former Chief Engineer of Thunder`,
            desc: `Technical VP, the local leading talent in Shenzhen; won the second prize of National Science and Technology Progress Award in 2015 with the project of “Key Supporting Technology for Large-scale Network Streaming Media Service”; during the work in Thunder, he led the development of Thunderbolt interface engine and a new generation of P2P framework of Thunder, helping promote the evolution and upgrading of many core technology architectures of Thunder.`
          }
        ],
        advisorAndInvestmentTeam: `Advisor and Investment Team`,
        secondaryTeam: [
          {
            name: `Kong Huawei`,
            desc: `Director of Shanghai Institute of Computing Technology, CAS; Chief Scientist for Zhangjiang Hi-Tech Venture.`
          },
          {
            name: `Tan Lei`,
            desc: `Celebrated blockchain and big data expert, North American Blockchain Association co-founder, 13 years of Microsoft experience.`
          },
          {
            name: `Wang Dou`,
            desc: `Founder of Geek Capital, Co-founder of LinkVC, blockchain robot inventor,blockchain robot inventor, Technical Geek.`
          },
          {
            name: `Roy Li`,
            desc: `Celebrated security and IoT expert.`
          }
        ],
        tertiaryTeam: [
          {
            name: `Huang Zhiyi`,
            desc: `Co-founder of Sino-US Venture Capital.`
          },
          {
            name: `Zhou You`,
            desc: `Director of Hangzhou Shunwang Technology Co Ltd, Chairman of Fuyun Technology.`
          },
          {
            name: `Liang Junzhang`,
            desc: `Co-founder of Kinzon Capital.`
          },
          {
            name: `Li Jiaxuan`,
            desc: `Co-founder of Future Fund.`
          },
          {
            name: `Luo Wen`,
            desc: `Chairman of iwali Technology`
          },
          {
            name: `Ramble`,
            desc: `Chairman of the North American blockchain Association, architect for the Guiyang blockchain financial Supervision Sandbox, Chairman of Guiyang blockchain financial incubator, founder of GooCoin and SwftCoin.`
          },
          {
            name: `Zhao Yafu`,
            desc: `Director of risk management in Guangdong Zhuo Tai Ci Capital Ltd.`
          },
          {
            name: `Liu Jinhua`,
            desc: `CPA, CTA, Co-partner of Shandong Shixin certified public accounting firm, An accountant and tax consultant for several listed companies, Former Shandong state tax official.`
          },
          {
            name: `Lin Shirong`,
            desc: `Founder of Enhou Investment.`
          },
          {
            name: `Zhen Zhiping`,
            desc: `Founder of aizhan.com`
          }
        ],
        partnersTitle: `Our Partners`,
        partnersSubTitle: `Who we collaborate with to generate ideas and solutions for a stronger blockchain ecosystem`,
        exchanges: `Exchanges`,
        explorers: `Explorers`
      },
      community: {
        pageTitle: `Community`,
        pageSubTitle: `Community is central to INT. We collaborate, adapt, build, and support. The community has been growing steadily, and include developers, designers, tech writers, community leaders, and tech companies. Join our network and be part of the IOT blockchain community.`,
        pageIntro: ``,
        ecosystemTitle: `INT Ecosystem`,
        ecosystemIntro: `How the community fits together.`,
        developerCommunityTitle: `Developer Community`,
        developerCommunitySubTitle: `With Mainnet 4.0, INT will have a new developer API available for tool and DApp development. Hone your skills and innovate with others.`,
        developerPortalTitle: `Developer Community Portal`,
        developerPortalDesc: `A portal to collaborate with ideas and participate in community activities. Coming soon.`,
        developerPortalLink: `Visit Developer Portal`,
        sdkTitle: `Compatible with JavaScript, EVM, and WASM`,
        sdkDesc: `Open APIs and flexible multi-chain architecture of INT Mainnet 4.0 will enable DApp development for a wide range of applications. INT will be compatible with JavaScript, the Ethereum Virtual Machine (EVM), and WebAssembly Standard (WASM), making application development accessible to more developers.`
      },
      contact: {
        pageTitle: `Contact`,
        pageSubTitle: `The INT team can be contacted by email directly. Alternatively, our community admins, community partners, and ambassadors can be reached on social media channels, such as Telegram. `,
        pageIntro: ``,
        technicalSupportTitle: `Technical Exchange and Support`,
        technicalSupportDesc: `For any technical queries, you could either contact a community admin in the official Telegram channels or send an email to the address below. `,
        technicalSupportLink: `E-mail: tech@intchain.io`,
        cooperationTitle: `Business Cooperation`,
        cooperationDesc: `We are open to new business opportunities and welcome innovative teams, companies, social organizations, and expert individuals from all disciplines around the world to chat with us.`,
        cooperationLink: `E-mail: int@intchain.io`,
        cooperationLinkTwo: `E-mail: intchainint@gmail.com`
      },
      wallet: {
        pageTitle: `Wallet`,
        pageSubTitle: `INT Official Wallet. Smart, safe, and reliable.`,
        webWalletTitle: `Web Wallet`,
        webWalletDesc: `The simplest method to access your INT wallet. Safe and secure over https. Check your balance, transfer tokens, stake, and vote.`,
        webWalletLink3: `Visit INT Chain 3.0 Web Wallet`,
        webWalletLink4: `Visit INT Chain 4.0 Web Wallet`,
        webWalletLink4Test: `Visit INT Chain 4.0 Testnet Web Wallet`,
        iosWalletTitle: `INT Chain 3.0 Smart Wallet for iOS`,
        iosWalletDesc: `Includes all the functionality of the web wallet plus access to the INT staking service. Clean, simple, and secure. Compatible with iOS phones only.`,
        iosWalletLink: `Download Smart Wallet for iOS`,
        smartWalletTitle: `INT Chain 3.0 Smart Wallet for Android`,
        smartWalletDesc: `Includes all the functionality of the web wallet plus access to the INT staking service. Clean, simple, and secure. Compatible with Android phones only.`,
        smartWalletLink: `Download Smart Wallet for Android`
      },
      disclaimer: {
        pageTitle: `Disclaimer`,
        listItems: [
          `This document/website/portal is used only for the purpose of conveying information and does not constitute an opinion on the trading of shares or securities of INT company. Any such proposal shall be carried out under a trustworthy term and with the permission of the applicable securities law and other relevant laws. The above information or analysis shall not constitute investment decisions or specific recommendations.`,
          `This document/website/portal does not constitute any investment advice on the form of securities, investment intent or abetting investment.`,
          `This document/website/portal is not composed nor construed as providing any transaction or any invitation to buy or sell, nor any form of securities or any form of contract or commitment.`,
          `INT expressly expresses the intention that the user has a clear understanding of the risk of the INT platform. Once the investor participates in the investment, he / she will understand and accept the risk of the project and be willing to bear all the corresponding results or consequences.`,
          `INT expressly disclaims that INT will not bear any direct or indirect damages resulting from any participation in the INT project, including:
          (i) This document/website/portal provides the reliability of all third party information
          (ii) any errors, omissions or inaccurate information resulting therefrom
          (iii) or any act resulting therefrom`
        ]
      },
      riskstatement: {
        pageTitle: `Risk Statement`,
        listItems: [
          {
            title: `The risk associated with the ethernet core agreement`,
            desc: `INT is based on the ethernet protocol development, any failure, unpredictable functional problems, or attacks that occur in any ethernet core protocol can cause INT or INT applications to stop working or functionally in an unpredictable manner. Additional information about the ethernet Agreement, please view www.ethereum.org.`
          },
          {
            title: `The risk associated with the Vendor voucher`,
            desc: `Any third party obtains the purchaser's login certificate or private key will be possible to directly control the buyer's INT. In order to minimize the risk, the purchaser must protect its electronic device to prevent unauthorized access requests from accessing and accessing the device content.`
          },
          {
            title: `INT application risk associated with the lacks of attention`,
            desc: `INT applications are not likely to be used by a large number of individuals or organizations, which means that the public does not have enough interest to explore and develop these related distributed applications, such a lack of interest may have a negative impact on the INT application.`
          },
          {
            title: `The risk that INT associated application or product may not meet the expectations of INT itself or the purchaser`,
            desc: `The INT application is currently in the development phase and may be subject to major changes before the release of the official version. The INT itself and purchaser’s expectations or imagine pertaining to the INT application, the function or form of the INT (including the behavior of the participant) may not be satisfied. Any erroneous analysis or changes in the underlying design may lead to the occurrence of this situation.`
          },
          {
            title: `Hacker or theft risk`,
            desc: `Hackers or other organizations or countries have the potential to attempt to interrupt INT applications or INT function in any way, including service attacks, Sybil attacks, malware attacks, or consistent attacks.`
          },
          {
            title: `The risk of uninsured loss`,
            desc: `Unlike accounts with bank accounts or other financial institutions, it is usually not insured to store in an INT account or an ethernet network. There are no public organization or person will insure for your loss caused in any case.`
          },
          {
            title: `The risk of the presence of application failure`,
            desc: `INT platform may break down due to various reasons, which indicated that it could not provide the normal services in such situation.`
          }
        ]
      },
      consensus: {
        pageTitle: `What is IPBFT?`,
        pageSubTitle: `IPBFT is the consensus algorithm for INT4.0. If you compare a blockchain to a car, the consensus mechanism is the engine that powers the car.\nIPBFT is a faster, more scalable and more secure algorithm`,
        t1: `Improving IPBFT is based on PBFT (Practical Byzantine Algorithm):`,
        li1: `Linear communication: IPBFT achieves linear worst-case communication volume, in contract to PBFT’s O(n4)`,
        li2: `Random leader selection: the leader for each round in IPBFT is selected by a verifiable random function (VRF), which protects the leader from predictable attacks`,
        q1T: `What is consensus?`,
        q1A: [
          `The consensus mechanism is the core of distributed technology. In a decentralized environment where there is no central entity to verify transactions, the consensus protocol ensures that all participants of the network reach agreement. The entire network verifies transactions in a completely trustless manner.`
        ],
        q2T: `What PBFT (Practical Byzantine Algorithm)?`,
        q2A: [
          `Practical Byzantine Fault Tolerance is a model for reaching consensus by making multiple computers behave consistently, a technique known as state machine replication.`,
          `Nodes reach a consensus on the decision by passing messages about the decision between each other-such as the validity of the block in the blockchain. In this system, security increases with the number of honest nodes. Honest nodes agree to correct decisions and reject wrong decisions made by malicious nodes, as long as the number of malicious nodes is less than one-third of the total.`,
          `pBFT systems are energy efficient; they do not require high computing resources or a lot of energy to operate. In addition, pBFTs can reach consensus quickly because all nodes are constantly communicating with each other and do not require multiple confirmations. Once the nodes agree on a decision, the transaction is complete.`,
          `This process can be simplified to four steps.`,
          `pBFT uses a voting mechanism to elect a leader node in a round-robin format.`,
          `The leader initiates the decision and broadcasts it to the secondary nodes.`,
          `All nodes, including the leader node and the auxiliary nodes, send responses.`,
          `A response is considered valid when ⅔ + 1 node sends the same response.`,
          `If the leader act maliciously, it can be removed by most nodes.`
        ],
        q3T: `IPBFT consensus versus PBFT consensus`,
        q3A: [
          `First of all, in terms of the conditions for block production, the traditional PBFT protocol generally requires more than 2/3 of the validators to agree before the block can be produced. To ensure the consistency of the weight of stake and voting rights, IPBFT changed the block generation condition from more than 2/3 of the number of validators to 2/3 of the total number of votes to improve the speed of block generation to a certain extent. If a validator fails to produce a block, it will vote for the next round according to a certain algorithm, while the block production conditions will be relaxed, that is, the total number of votes exceeds (2/3-1/3*R/30)*V , where R is the number of rounds of the block, the maximum value of 15, V is the current total number of votes, so the number of rounds of a block if it reaches 15 rounds, the total number of votes only needs to be greater than 50% to complete the block, which greatly increase the robustness of the INT network.`,
          `Secondly, in terms of voting message broadcasting, the communication complexity of ordinary PBFT will increase with the square of the number of nodes. When the number of nodes increases to more, the communication pressure on the network will become very large. To alleviate this problem, IPBFT establishes a leader for each round of voting, collects votes from all verifiers, and uses aggregate signatures to achieve linear communication, which greatly reduces the complexity of network communication in the case of multiple nodes and laying the foundation for further decentralization of the network.`,
          `In addition, in the selection of block producers, ordinary PBFT usually adopts the way of out of blocks, while the block producers in each round of IPBFT are randomly selected by VRF. VRF is a pseudo-random generator whose output is verifiable, random and unpredictable in advance. At the same time, the overall probability of a node being selected will be positively related to its own vote weight. Therefore, the leader of each round is unpredictable, and the opponent cannot attack the leader in advance, so that the entire network will be more fair and safe.`
        ],
        q4T: `How does IPBFT work?`,
        q4A: [
          `IPBFT uses a verifiable random function (VRF)-based password tossing lottery to randomly elect verifiers, while the node with the higher vote weight ratio will have a higher chance of getting out of the block, which will ensure greater security and fairness. In terms of on-chain governance, multiple governance parameters are introduced and a punishment mechanism for misbehaviour is added. The governance parameters can be dynamically adjusted on the chain through a referendum, making the community governance process more efficient and fair.The specific operation process is as follows:`,
          `1.Firstly, the system elects the outgoing node for each round through VRF, then the outgoing node will first propose the block and broadcast it to the other gods nodes, then the consensus among the gods nodes will be conducted through IPBFT consensus algorithm, and it needs to meet more than 2/3 of the total votes to agree in order for the block to come out properly.`,
          `2.Every other cycle, the gods nodes will be re-elected based on the number of votes they have obtained, and the node with the top 25 votes will be the new round of block producers.`,
          `3.Every normal block will get a certain block reward. The block reward includes a fixed block reward and half of the handling fee. The other half of the handling fee will be directly destroyed. The gods node can set a reward percentage, each block reward will be divided proportionally between the block producer and the INT holders who voted for that node.`,
          `4.Every INT holder can participate or propose a system referendum to decide the main affairs and development of INT, each referendum will be led by the INT Foundation after the vote is completed, and will be promoted together with the community.`
        ]
      },
      grant: {
        pageTitle: `INT powers every potential value application`,
        pageSubTitle: `#INT Grant - Born for value applications, making all DAPPs truly useful`,
        headerLabel: `We value every good idea and application, If you share the same vision as us, you will have the opportunity to get a development fund of $10K - 100K(loT applications are not subject to the upper limit of this fund)`,
        grantFormLink: `https://forms.gle/wNwtR4dyCLuqaBjP8`,
        grantFormLinkLabel: `APPLY NOW`,
        strengths: {
          title: `WHAT YOU GET`,
          items: [
            {
              id: `strengthsItem1`,
              imgUrl: `../assets/images/grant/2.png`,
              labelStr: `Fund Support`,
              spanStr: `Multiple funding available to help projects launched`
            },
            {
              id: `strengthsItem2`,
              imgUrl: `../assets/images/grant/3.png`,
              labelStr: `Financing Opportunity`,
              spanStr: `More opportunities to get the leading capital in the industry`
            },
            {
              id: `strengthsItem3`,
              imgUrl: `../assets/images/grant/4.png`,
              labelStr: `Resources Sharing`,
              spanStr: `Enjoy multi-dimensional brand exposure with INT `
            },
            {
              id: `strengthsItem4`,
              imgUrl: `../assets/images/grant/5.png`,
              labelStr: `Traffic Support`,
              spanStr: `Access to INT traffic support`
            },
            {
              id: `strengthsItem5`,
              imgUrl: `../assets/images/grant/6.png`,
              labelStr: `Technical Support`,
              spanStr: `Access to INT technical support`
            },
            {
              id: `strengthsItem6`,
              imgUrl: `../assets/images/grant/7.png`,
              labelStr: `Eco-Bonus`,
              spanStr: `Sharing of dividends for projects within the ecology`
            }
          ]
        },
        expectations: {
          title: `WHAT WE EXPECT`,
          items: [
            { id: `expectationsItem1`, label: `Internet of Things` },
            { id: `expectationsItem2`, label: `DEX` },
            { id: `expectationsItem3`, label: `Lending` },
            { id: `expectationsItem4`, label: `Derivatives` },
            { id: `expectationsItem5`, label: `Aggregate Revenue` },
            { id: `expectationsItem6`, label: `Asset cross-chain ` },
            { id: `expectationsItem7`, label: `Oracle` }
          ],
          desc: `For developer's projects, we do not limit the scope or type of projects. Because diversity is vital to the ecology. `
        },
        global: {
          title: `Join us to build a blockchain developer's utopia together`,
          int: ``,
          imgUrl: `/images/grant/9-en.png`
        }
      },
      noderequest: {
        pageTitle: `INT 4.0 Validator Recruitment Plan`,
        pageSubTitle: `As INT 4.0 is gradually improved and officially launched, INT 4.0 will start the recruitment of  validator. Any subject and individual who meets the selection requirements can participate in the node election and obtain node rewards. `,
        requestBtn: `Apply Now`,
        requestLink: `https://forms.gle/sp91t7QtxHJv4A9F9`,
        guidance: {
          title: `Recruitment Guidance`,
          li1: `INT 4.0 validator recruitment plan launched on September 2, 2021, which will be open for long-term;`,
          li2: `Organizations and individuals who meet the requirements can submit their applications immediately.`,
          li3: `All submitted node information will be reviewed by INT one by one to prevent malicious nodes from being created.`
        },
        conditions: {
          title: `Validator Conditions`,
          li1: `(Organization and individual) have basic knowledge and understanding of blockchain technology (e.g. public and private keys, signatures, etc.);`,
          li2: `(Individual) have their own fully controllable server resources with access to the public network;`,
          li3: `(Individual) has a certain technical foundation and can independently carry out server maintenance and management operations;`,
          li4: `(Organization) has servers to run the nodes and node operation and maintenance technicians;`,
          li5: `Those who participate in the INT 4.0 test network mining competition will be priority;`,
          li6: `Node software, hardware and network environment requirements.`,
          table: [
            { label: `System`, value: `CentOS 7.5 64-bit` },
            { label: `CPU`, value: `4 core` },
            { label: `RAM`, value: `8 G` },
            { label: `Storage`, value: `512GB SSD` },
            { label: `Bandwidth`, value: `20 Mbps` }
          ]
        },
        reward: {
          title: `Node Reward`,
          li1: `The profits of node are mainly from block production reward and transaction fees and the block production reward is limited to 20 million INT.`,
          li2: `Block reward = the number of blocks produced by the node * the reward for each block, the more the number of blocks, the more rewards. `,
          li3: `Annual node reward = node dynamic weight ratio * annual block reward`,
          li4: ` Node weight, that is, the percentage of votes obtained by nodes in total votes. Because the total amount of votes and the amount of votes obtained by a single node are constantly changing, here we use the dynamic weight ratio to list the calculation formula, which help users better understand it.`,
          li5: `For more details, please check here:  `
        },
        process: {
          title: `Participation Process`,
          li1: `1. Fill in the application form`,
          li2: `2. Official review and feedback (within 3 working days)`,
          li3: `3. 1 million INT 4.0 tokens for the register node`,
          li4: `4. Register to run the node according to the document: https://titansdocs.intchain.io/`,
          li5: `5. Announce new node information and get voting`
        },
        resources: {
          title: `Resources`,
          links: [
            {
              label: `Blockchain browser:`,
              link: `https://titansexplorer.intchain.io/`
            },
            {
              label: `Node deployment documentation:`,
              link: `https://titansdocs.intchain.io/`
            },
            {
              label: `Voting tutorial:`,
              link: `https://www.youtube.com/watch?v=yt9aLx7KHgI`
            }
          ]
        },
        faq: {
          title: `FAQ`,
          faqs: [
            {
              q: `1.When will the validator be rewarded?`,
              a: `The validator will receive node rewards in real-time after the block is produced;`
            },
            {
              q: `2.How often is the number of votes counted for a node?`,
              a: `Voting is real-time and candidate nodes can see real-time changes in the number of votes. The replacement cycle of the validators is about 2 hours, and the new votes of the validation node will take effect in the next cycle.`
            },
            {
              q: `3.What is the voting reward for voters?`,
              a: `The percentage of the reward given to voters is set by the node itself (i.e. the voting reward may not be the same for each node) and ranges from 0% to 100%.`
            },
            {
              q: `4.Can a node withdraw its own votes after it has received enough votes from other people?`,
              a: `No. For security reasons, nodes are required to stake their votes as collateral to prevent malpractice from occurring, so they cannot withdraw their votes. If in extreme cases you need to withdraw your vote, you can withdraw all your votes by cancelling the node.`
            }
          ]
        }
      }
    },
    components: {
      applicationsGrid: {
        listItems: [
          {
            title: `Smart Home`,
            desc: `Embracing a new lifestyle for the future`
          },
          {
            title: `Internet of Things`,
            desc: `Various IoT terminals collect and upload the data to the chain and control IoT terminals using smart contracts`
          },
          {
            title: `Supply chain management`,
            desc: `Blockchain optimization including procurement, production, warehousing, logistics, and sales`
          },
          {
            title: `Internet of Vehicle OBD Device`,
            desc: `Intelligent driver-assistance device lifecycle management`
          },
          {
            title: `Supply chain finance`,
            desc: `Providing supply chain financial service using blockchain`
          },
          {
            title: `5G`,
            desc: `Combining 5G, IoT, and blockchain for a faster and safer network protocol`
          },
          {
            title: `Traceability and anti-counterfeiting`,
            desc: `Achieving traceability and anti-counterfeiting with the immutable nature of blockchain`
          },
          {
            title: `Charity`,
            desc: `Realizing the openness and transparency of charity financial information`
          },
          {
            title: `NFT`,
            desc: `Digital art, games, digital art market and physical assets (certificates, bonds) on the chain, confirmation and circulation`
          },
          {
            title: `DeFi`,
            desc: `Diversified decentralized financial products enrich product ecology`
          }
        ]
      }
    },
    footer: {
      about: `About`,
      resources: `Resources`,
      getInvolved: `Get Involved`,
      intVideo: `INT video`,
      blog: `Blog`,
      explorer3: `3.0 Explorer`,
      testExplorer4: `4.0 Test Explorer`,
      mainExplorer4: `4.0 Explorer`,
      mainExplorer4Blockscout: `4.0 Blockscout Explorer`,
      webWallet3: `3.0 Web Wallet`,
      testWebWallet4: `4.0 Test Web Wallet`,
      mainWebWallet4: `4.0 Web Wallet`,
      whitepaper: `Whitepaper`,
      whitepaperLink: `https://intchain.io/whitepaper/INT-White-Paper-3.0-EN.pdf`,
      bsnLink: `BSN global website`,
      gitHub: `GitHub`,
      crossBridge: `Cross-Chain Bridge`,
      intForum: `INT Forum`,
      copyright: `All rights reserved`,
      guidelinesV4: `4.0 Related Guidelines`,
      guidelinesLabel: {
        mappingGuide: `Mapping Guide`,
        metaMask: `MetaMask Wallet Usage Guide`,
        imtoken: `Imtoken Wallet Usage Guide`,
        nodeMigration: `Guide to Node Migration`,
        voting: `INT 4.0 Staking and voting demonstration`
      },
      guidelinesLinks: {
        mappingGuide: `https://intchain.io/guidelines/INT-mapping-guide-4.0-EN-20220419.pdf`,
        metaMask: `https://intchain.io/guidelines/INT-version-MetaMask-user-guide-EN.pdf`,
        imtoken: `https://intchain.io/guidelines/INT-version-imtoken-wallet-usage-guide-EN.pdf`,
        nodeMigration: `https://intchain.io/guidelines/Guide-to-Node-Migration-from-INT-3.0-to-INT-4.0-EN.pdf`,
        voting: `https://youtu.be/yt9aLx7KHgI`
      }
    }
  },
  zhCN: {
    pageLink: {
      home: `首页`,
      applications: `行业应用`,
      nodeplan: `节点计划`,
      bsn: `BSN`,
      team: `团队介绍`,
      community: `技术开发社区`,
      whitepaper: `白皮书`,
      join: `工作机会`,
      contact: `联系我们`,
      explorer: `区块浏览器`,
      road: `ROAD`,
      disclaimer: `免责声明`,
      riskstatement: `风险声明`,
      wallet: `钱包`,
      consensus: `共识`,
      grant: `开发基金`,
      nft: `NFT`
    },
    pages: {
      home: {
        launchTitle: `We are working hard to launch the 4.0 new mainnet`,
        welcomeMsg: `物联网的生态系统`,
        welcomeNote: `INT是全球首个从物联网结构体系演进的角度，自下而上打造而成的新一代物联网区块链交互标准和基础应用平台。`,
        watchVideo: `观看视频`,
        header1: `INT解决的问题和提供的服务`,
        subheader1: `专为轻松集成任何物联网协议而设计`,
        gridIcons: {
          header1: `务实的用例驱动原则`,
          desc1: `用例驱动（use case driven）作为INT公链开发的核心原则是将所有的功能都对应关联的用例需求，以实际应用场景的可用性验证来指导INT公链架构的设计与演进。`,
          header2: `创新的“双链”网络架构`,
          desc2: `创新的“双链”架构，将meta节点互联而成的“众神链”，与miner节点互联而成的“矿工链”完美融合，提供更稳定可靠的网络广播，同时将计算与记录完美分离，高效实现共识。`,
          header3: `优化版P2P协议`,
          desc3: `无中心的SuperNode设计，对多运营商和IPv6的支持，具有更好的P2P连接成功率，广播效率高，冗余度好，传输性能优于TCP。`,
          header4: `有效的通证经济激励`,
          desc4: `采用有效的通证经济和激励措施，以推动网络治理，社区活动以及物联网数据和设备管理。`,
          header5: `开发者友好智能合约`,
          desc5: `开发人员友好，INT兼容EVM，WASM，支持solidity及多语言编写智能合约，开发者使用熟悉的工具，极低的代价即可在INT上开发DAPP。`,
          header6: `真实的应用落地演进`,
          desc6: `提供一套整合优化SDN、区块链和雾计算等技术的解决方案，以“应用验证-研发优化-落地实施-迭代验证”的“循环渐进式落地”模式，不断与中国电信、中兴、湖北工建等企业不断推进场景应用落地实现。`
        },
        bsnHeader: `中国区块链服务网络（BSN）认证开发者`,
        bsnDesc: `INT于2020年5月成为区块链服务网络（BSN）的认证开发者。基于区块链的服务网络（BSN）是一个跨云、跨门户、跨框架的全球公共基础设施网络，用于部署和运营不同类型的区块链应用。`,
        bsnViewMore: `查看详情`,
        header2: `应用解决方案`,
        subheader2: `最适用的BoT架构和解决方案。`,
        viewMore2: `查看更多应用解决方案`,
        latestNews: `最新消息`,
        viewMoreNews: `查看最新消息`,
        tendermintTitle: `Tendermint`,
        tendermintSubTitle: `INT采用的IPBFT共识协议，是基于PBFT（实用拜占庭算法）改进的全新的的共识协议，效率得到大幅提升，进一步优化了线上治理。同时采用当下最先进的方法——基于可验证随机函数（VRF）的密码掷签来随机选举验证者，更大程度的保障了安全与公平。`,
        partners: `合作伙伴`,
        partnersSubheader: `我们的合作伙伴。`,
        partnersViewMore: `查看我们的团队`,
        mentionIn: `媒体报道`,
        toConsensusBtn: `了解更多`
      },
      applications: {
        pageTitle: `行业应用`,
        pageSubTitle: `专为DApps设计，构建物联网新生态体系。`,
        intro: `围绕ITS（智能交通）和IOV（车联网）进行业务布局。逐步实现购车、行车、城市管理等与汽车行业相关的应用场景，服务于车主、企业、政府的综合商业生态。`,
        routerTitle: `天翼链路由器 —— INT首款落地应用硬件产品`,
        routerSubTitle: `家庭设备联网 | 私人加密存储 | 挖矿获取收益`,
        routerBannerTitle: `安全高效的网络存储 —— 一键备份的家用NAS`,
        routerBannerSubTitle: ` NAS (Network Attached Storage)：（网络附属存储）就是连接在网络上，具备资料存储功能的装置，因此也称为“网络存储器”。家用NAS是适用与家庭环境的网络存储器，具又家庭信息数据是备份/容灾的作用。将移动设备上的数据通过网络备份到NAS中。具有一键备份功能，在APP中按一下备份按钮就能把移动设备上的图片、视频、音频备份到NAS中。`,
        routerListTitle: `小身材，大智慧 —— 真正的智能路由器 `,
        routerListItems: [
          `支持PPPOE、动态IP、静态IP等宽带接入方式。`,
          `支持TCP/IP、PPPOE、DHCP、ICMP、NAT等协议。`,
          `内建防火墙，支持IP地址、MAC地址、域名地址过滤，可灵活控制上网权限与时间。`,
          `支持Upnp、静态路由器。`,
          `支持其他主流智能路由器常规功能。`
        ],
        routerTitle2: `安全可靠的资源共享 —— 可挖矿的区块链智能网关`,
        routerSubTitle2: `用户通过INT路由器分享网络带宽、存储空间等资源获得收益，INT路由器提供CDN、边缘存储、边缘计算等商业场景，在此共享网络生态中产生的激励积分，用于公平地计量、登记并证明共享资源的提供与消耗。收益基于设备硬件性能、上行带宽大小、共享存储大小、有效在线时长的贡献进行每日结算。`,
        OBDTitle: `INT区块链驱动的行车辅助OBD设备`,
        OBDSubTitle: `基于汽车账本的分布式车联网经济系统`,
        OBDIntro: ``,
        OBDBannerTitle: `区块链保障数据安全`,
        OBDBannerSubTitle: `汽车账本是汽车全生命周期的交互和记账系统。屏蔽算法保证了用户个人数据的私密性，而区块链则保证了重要数据的准确性和不可更改性。我们相信在5G和AI时代，它将成为汽车行业基础设施的一部分。`,
        OBDTitle2: ``,
        OBDSubTitle2: ``,
        OBDTitle3: `车联网未来`,
        OBDSubTitle3: `生态系统围绕ITS（智能交通）和IOV（车联网）展开。我们将逐步实现与汽车行业相关的应用场景。该系统将惠及车主、企业和政府。`,
        OBDTitle4: `智能行车助手`,
        OBDSubTitle4: `集车况监测、驾驶辅助、行车安全、自助维修于一体的全生命周期用车智能助手。`,
        OBDTitle5: `独特的遮罩算法`,
        OBDSubTitle5: `采用INT Chain的屏蔽算法开发无敏感数据的智能驾驶系统。`,
        coreFunctions: `核心功能`,
        coreFunctionsItems: {
          title1: `远程诊断`,
          subTitle1: `该设备可通过智能合约将故障码等信息发送至维修节点，指引维修人员现场支持。`,
          title2: `安全报警`,
          subTitle2: `驶出围栏、熄火位移、异常震动、碰撞、侧翻、超速、水温等异常状态警报。`,
          title3: `定位追踪`,
          subTitle3: `北斗、GPS卫星定位与信号基站定位综合计算，位置精准。可追踪、回放、一键寻车。`,
          title4: `驾驶分析`,
          subTitle4: `通过收集急加速、急减速、急弯、怠速、超速、油耗等情况综合分析驾驶习惯，提升驾驶技巧。`,
          title5: `条友互助`,
          subTitle5: `同城设备将进入路友社区，当遇到问题时(如搭电)可获得就近条友帮助。`
        }
      },
      nodeplan: {
        pageTitle: `INT 节点`,
        pageSubTitle1: `INT是具有DPoS + dBFT共识协议的 IPBFT 区块链，由选定的验证节点和候选节点维护。验证节点由INT社区运行。`,
        pageSubTitle2: `节点为INT提供网络、存储和计算任务，共同维持区块链的平稳运行，同时保持透明度、不变性、稳定性和安全性。`,
        pageSubTitle3: `INT鼓励每个验证者节点建立和发展自己的社区，这样全球社区就可以合作和发展INT全球生态系统。`,
        panelsTitle: `主网`,
        panelsSubTitle1: `主网 3.0 - 正在运行`,
        panelsDesc1: [`13个验证节点`, `87个奖励节点`, `候选节点`, `2000 TPS`],
        panelsLink1: `主网 3.0 节点设置指南`,
        panelsSubTitle2: `主网 4.0 - 即将上线`,
        panelsDesc2: [`25个验证节点`, `候选节点`, `2000 TPS`],
        panelsLink2: `主网 4.0 节点设置指南`,
        nodeRequestTitle: `INT 4.0 验证节点招募计划`,
        nodeRequestDesc: `INT长期招募4.0网络验证节点， 符合参与要求的组织和个人，可提出节点申请，成为INT 4.0 验证节点，参与区块链网络维护与共治，获得节点奖励。`,
        nodeRequestBtn: `了解更多`,
        incentivesTitle: `节点计划激励机制`,
        incentivesDesc: `INT基金会每年预计支出2000万个INT作为节点计划奖励，奖励均从INT基金会的专属钱包支出。奖励数量取决于节点类型和质押数量。`,
        incentivesListItems: [
          `30%的INT奖励分配给众神节点。`,
          `50%的INT奖励按照奖励节点在每生成一个区块时获得的票数权重比进行分配。`,
          `20%的INT奖励将分配给所有参与投票的投票人。`
        ],
        intTokenTitle: `INT Token`,
        intTokenSubTitle: `INT是INT Chain主网的价值流通和媒介，同时也是线上治理和交易手续费的唯一通证。`,
        intTokenDesc: `INT Token可用于主网质押、社区投票、以及交易手续费。`,
        nodeMapTitle: `节点分布图`,
        nodeMapSubTitle: `为了保障去中心化和安全性，INT的节点分布在全球多个大洲和国家。我们在全球社区内拥有一系列技术和业务专业知识，以保持网络安全可靠地运行。。`
      },
      bsn: {
        pageTitle: `区块链服务网络认证`,
        pageIntro: `2020年5月，INT成功入选区块链服务网络（BSN）的合格开发者。BSN是由国家信息中心、中国银联、中国移动等大型企业共同发起的合作组织，旨在推动区块链服务网络发展。`,
        pageDesc1: `BSN网络可跨平台支持绝大部分底层架构，例如Hyperledger Fabric和以太坊。现有的智能合约和DApps可轻松部署到BSN上。`,
        pageDesc2: `有幸成为BSN的一员，我们为此感到兴奋。您可以在我们的社交媒体上了解INT与BSN的最新动态。`,
        bsnGlobalLink: `访问BSN官网`
      },
      team: {
        pageTitle: `团队介绍`,
        pageSubTitle: ` INT团队曾与Eastcom、华为、阿里巴巴等领先的技术公司合作项目，为INT项目积累了丰富的经验。`,
        pageIntro: ``,
        executiveManagementTeam: `执行管理团队`,
        primaryTeam: [
          {
            name: `殷相玉`,
            role: `INT中国区负责人`,
            desc: `物联网深度爱好者，国内最早期物联网研发从业者，互联网连续创业者，Apache Mynewt代码贡献者，参与GPRS穿戴式远程单兵生命状态测试仪、麻醉深度测试仪、糖尿病早期神经病变测试仪、智能家居、电力载波等系统的设计研发，后从事互联网创业，2013年完成国内首台微信物联网设备“印美图”的研发与应用推广。`
          },
          {
            name: `陈光辉`,
            role: `INT DApp 应用开发总工程师`,
            desc: ` 复旦计算机软件专业，先后就职于东方通信、华为等企业，在通信底层技术、系统架构、研发项目管理、软件开发、移动互联网等领域具有丰富经验，1993年至2005年东方通信工作，历任CDMA交换机开发部研发工程师、测试部长、副总经理，2005年加入华为，历任企业通信MKT部长，铁路信号架构设计部部长，2012年创业，方向为手机打车服务市场。`
          },
          {
            name: `王红伟`,
            role: `四川大学硕士`,
            desc: `从事10年物联网领域技术研究；“货车帮”早期平台架构人；华为首款工业路由AR531设备领军人物；高铁信号 3oo3组合故障-安全系统发明者，智能包装发明者。`
          },
          {
            name: `Michael Zhang`,
            role: `新加坡国立大学MBA，复旦大学本科`,
            desc: `在亚洲有超过20年IT管理和运营经验，是跨境贸易和供应链管理领域顶尖的专家。`
          },
          {
            name: `刘智聪`,
            role: `巴克云创始人,前迅雷首席工程师`,
            desc: ` 技术VP，深圳市地方级领军人才；凭借“大规模网络流媒体服务关键支撑技术”项目，荣获2015年度国家科学技术进步二等奖；在迅雷工作期间，主导开发了迅雷Bolt界面引擎和迅雷新一代P2P框架，推动了迅雷多个核心技术架构的演进升级。`
          }
        ],
        advisorAndInvestmentTeam: `顾问和投资团队`,
        secondaryTeam: [
          {
            name: `孔华威`,
            desc: `中科院计算技术研究所上海分所所长，张江高科创投首席科学家。`
          },
          {
            name: `谭 磊`,
            desc: `区块链和大数据挖掘专家，北美区块链协会 NABA 发起人、微软总部工作13年，美国杜克大学硕士，《区块链 2.0》等著作。`
          },
          {
            name: `王 斗`,
            desc: `极客资本创始人，LinkVC合伙人，区块链机器人发明人。技术极客，社区运营专家。`
          },
          {
            name: `Roy Li`,
            desc: `知名网络安全专家，物联网专家。`
          }
        ],
        tertiaryTeam: [
          {
            name: `黄智毅`,
            desc: `中美创投创始合伙人。`
          },
          {
            name: `周 游`,
            desc: `顺网科技董事, 浮云科技董事长。`
          },
          {
            name: `梁俊樟`,
            desc: `昆仲资本创始合伙人。`
          },
          {
            name: `李佳轩`,
            desc: `未来基金创始合伙人。`
          },
          {
            name: `罗 文`,
            desc: `爱瓦力科技董事长。`
          },
          {
            name: `Ramble`,
            desc: ` 北美区块链协会 NABA 主席，贵阳区块链金融监管沙盒总架构师，贵阳区块链金融孵化器董事长，谷壳币、SWFT创始人。`
          },
          {
            name: `赵亚甫`,
            desc: `广东卓泰投资管理有限公司风控总监。`
          },
          {
            name: `刘金华`,
            desc: `注册会计师、注册税务师，山东实信会计师事物所合伙人，多家上市公司会计税务顾问，前山东国税公职人员。`
          },
          {
            name: `林世荣`,
            desc: `恩厚投资创始人。`
          },
          {
            name: `郑志平`,
            desc: `爱站网创始人。`
          }
        ],
        partnersTitle: `合作伙伴`,
        partnersSubTitle: `我们的合作伙伴。`,
        exchanges: `交易所`,
        explorers: `Explorers`
      },
      community: {
        pageTitle: `社区`,
        pageSubTitle: `社区是INT的核心。社区成员相互合作，适应，建设和支持INT。目前INT社区稳定增长，其中包括开发人员，技术写作人员，设计师，社区负责人和技术公司等。快加入我们成为物联网区块链社区的一员。`,
        pageIntro: ``,
        ecosystemTitle: `INT 生态系统`,
        ecosystemIntro: `社区紧密结合`,
        developerCommunityTitle: `技术开发社区`,
        developerCommunitySubTitle: `随着主网4.0的推出，INT将拥有一个新的开发人员API，可用于工具和DApp开发。快加入我们一起进行技术磨炼和创新。`,
        developerPortalTitle: `开发者社区`,
        developerPortalDesc: `思想交流和活动参与的交流平台。正在升级中，敬请期待。`,
        developerPortalLink: `访问技术开发社区`,
        sdkTitle: `与JavaScript，EVM和WASM兼容`,
        sdkDesc: `INT 主网4.0的开放API和灵活的多链架构将使DApp开发适用于广泛的应用程序。INT将与JavaScript，以太坊虚拟机（EVM）和WebAssembly Standard（WASM）兼容，从而使更多开发人员可以进行应用程序开发。`
      },
      contact: {
        pageTitle: `联系我们`,
        pageSubTitle: `您可以通过电子邮件或官方社交媒体联系INT团队，例如联系我们官方客服、管理员、社区合伙人以及落地大使。 `,
        pageIntro: ``,

        technicalSupportTitle: `技术交流与支持`,
        technicalSupportDesc: `我们欢迎您将技术方面的想法和建议，邮件给我们技术团队或联系官方客服，以获得更加深入的交流。`,
        technicalSupportLink: `邮箱地址: tech@intchain.io`,
        cooperationTitle: `商务合作`,
        cooperationDesc: `我们欢迎全球范围内各学科创新团队、行业企业、社会机构及个人与我们联系，共同开展技术及商业领域交流合作，开辟全新市场空间。`,
        cooperationLink: `邮箱地址: int@intchain.io`,
        cooperationLinkTwo: `邮箱地址: intchainint@gmail.com`
      },
      wallet: {
        pageTitle: `钱包`,
        pageSubTitle: `INT 官方钱包 智能、安全、可靠`,
        webWalletTitle: `Web 钱包`,
        webWalletDesc: ` 通过https访问INT钱包，简单、安全、可靠。您可以使用钱包查看余额、转账、质押、投票。`,
        webWalletLink3: `访问 INT Chain 3.0 Web钱包`,
        webWalletLink4: `访问 INT Chain 4.0 Web钱包`,
        webWalletLink4Test: `访问 INT Chain 4.0 测试网Web钱包`,
        iosWalletTitle: `INT Chain 3.0 iOS Smart Wallet`,
        iosWalletDesc: ` 包括Web钱包的所有功能以及INT抵押服务。干净、简单、安全。`,
        iosWalletLink: `下载Smart Wallet`,
        smartWalletTitle: `INT Chain 3.0 Android Smart Wallet`,
        smartWalletDesc: `包括Web钱包的所有功能以及INT抵押服务。干净、简单、安全。`,
        smartWalletLink: `下载Smart Wallet`
      },
      disclaimer: {
        pageTitle: `免责声明`,
        listItems: [
          `本文档/网站/门户网站只用于传达信息之用途，并不构成买卖INT公司股份或证券的相关意见。任何类似的提议将在一个可信任的条款下并在可应用的证券法和其它相关法律允许下进行，以上信息或分析不构成投资决策或具体建议。`,
          `本文档/网站/门户网站不构成任何关于证券形式、投资意向或教唆投资的投资建议。`,
          `本文档/网站/门户网站不构成也不被理解为提供任何买卖行为，或任何邀请买卖、任何形式证券的行为，也不是任何形式上的合约或者承诺。`,
          `INT明确表示希望用户对INT平台的风险有清晰的认识。投资人一旦参与投资，即表示理解并接受项目的风险，并愿意承担一切相应的结果或后果。`,
          `INT明确表示不承担因参与INT项目而导致的任何直接或间接损失，包括：
          (i) 本文档/网站/门户网站提供所有第三方信息的可靠性
          (ii) 由此产生的任何错误，遗漏或不准确信息
          (iii) 或由此导致的任何行为`
        ]
      },
      riskstatement: {
        pageTitle: `风险声明`,
        listItems: [
          {
            title: `与以太网核心协议相关的风险`,
            desc: `INT是基于以太网协议开发的，任何在以太网核心协议中发生的不可预测功能故障、攻击都可能导致INT或INT应用程序以无法预测的方式停止工作或功能缺失。 有关以太网协议的其他信息，请访问www.ethereum.org。`
          },
          {
            title: `与投资者凭证相关的风险`,
            desc: `任何第三方获取投资者的登录证书或私钥将有可能直接控制投资者INT资产。为了风险最小化，投资者必须保护其电子设备以防未认证的访问请求通过并访问设备内容。`
          },
          {
            title: `INT应用缺少关注度的风险`,
            desc: `INT应用存在没有被个人或组织大量使用的可能性，意味着公众没有足够的兴趣去开发和发展相关分布式应用，这样一种缺少兴趣的现象可能对INT应用造成负面影响。`
          },
          {
            title: `INT相关应用或产品不符合INT本身或投资者期望的风险`,
            desc: ` INT应用程序目前正处于开发阶段，在正式版本发布之前可能会有较大的变化。INT本身和购买者对INT应用、INT的功能或形式（包括参与者的行为）的期望或想象可能无法满足。任何错误地分析或者底层设计的改变等均有可能导致这种情况的发生。`
          },
          {
            title: `黑客或盗窃风险`,
            desc: `黑客或其他组织或国家有可能以任何方式尝试中断INT应用程序或INT功能，包括服务攻击，Sybil攻击，恶意软件攻击或持续攻击等。`
          },
          {
            title: `未投保损失的风险`,
            desc: `与银行账户或其他金融机构的账户不同，存储在 INT 账户或以太坊网络上通常没有保险。任何情况下的损失，将不会有任何公开的组织或者个人为你的损失承保。`
          },
          {
            title: `应用程序存在的故障风险`,
            desc: `INT平台可能会因为各种原因出现故障，无法正常提供服务。`
          }
        ]
      },
      consensus: {
        pageTitle: `什么是IPBFT？`,
        pageSubTitle: `IPBFT是INT4.0的共识算法，如果把区块链比作一辆车，那么共识机制就是为汽车提供动力的引擎。\nIPBFT是一种更快、更具可扩展性和更安全的选择。`,
        t1: `IPBFT 基于PBFT（实用拜占庭算法）改进了：`,
        li1: `线性通信:IPBFT实现线性最坏情况下的通信量，与PBFT的O(n4)收缩`,
        li2: `随机领导者选择：IPBFT中每一轮的领导者都是通过一个可验证的随机函数(VRF)来选择的，这样可以防止领导者受到可预测的攻击`,
        q1T: `什么是共识？`,
        q1A: [
          `共识机制是分布式技术的核心，在没有中央实体验证交易的去中心化环境中，共识协议确保网络的所有参与者达成一致：整个网络以完全去信任的方式验证交易。`
        ],
        q2T: `什么PBFT（实用拜占庭算法）？`,
        q2A: [
          `实用拜占庭容错是一种通过使多台计算机表现一致来达成共识的模型，这种技术称为状态机复制。`,
          `节点通过在彼此之间传递有关决策的消息来就决策达成共识——例如区块链中区块的有效性。在这个系统中，安全性随着诚实节点的数量而增加。诚实节点同意正确的决策，拒绝恶意节点提出的错误决策，只要恶意节点的数量少于总数的三分之一。`,
          `pBFT 系统节能；它们不需要高计算资源或大量能量来运行。此外，pBFT 可以快速达成共识，因为所有节点都在不断地相互通信，不需要多次确认。一旦节点就决定达成一致，交易就完成了。`,
          `达成共识可以简化为四步：`,
          `pBFT 使用投票机制以循环方式选举领导节点。`,
          `领导者发起决策并将其广播给辅助节点。`,
          `所有节点，包括领导节点和辅助节点，都发送响应。`,
          `当 ⅔ + 1 个节点发送相同的响应时，该响应被认为是有效的。`,
          `如果领导者有恶意行为，它可以被大多数节点删除。`
        ],
        q3T: `IPBFT共识与PBFT共识对比`,
        q3A: [
          `首先在出块的条件上，传统的PBFT协议一般均需要2/3以上的验证接节点同意才可以出块，IPBFT为了保证stake的权重和投票权利的一致性，将出块条件由多于2/3的验证节点数修改为2/3的总票数，从一定的程度上提高出块的速度，另外如果某一个验证节点出块失败，将会按照一定的算法进行下一轮投票出块，同时出块的条件会有一定放宽，即总票数超过(2/3-1/3*R/30)*V，其中R为出块的轮数，最大值为15，V为当前的总票数，所以某一个区块出块如果达到15轮的话，投票的总票数只需要大于50%即可完成出块，极大的增加了INT网络的健壮性。`,
          `其次在投票消息广播层面，普通的PBFT的通信复杂度会随着节点数的平方而增长，在节点数量增加到较多的情况下，网络的通讯压力会变地很大。为了减缓这种问题，IPBFT为每一轮投票建立一个领导者，从所有验证者那里收集选票，同时采用聚合签名实现线性通讯，从而极大的降低了多节点情况下网络通讯的复杂度，为网络的进一步去中心化打好了基础。`,
          `另外在出块节点的选择方面，普通的PBFT通常采用轮流出块的方式，而IPBFT每一轮的出块者则由VRF随机选择出来，VRF是一个伪随机发生器，它的输出是可验证的、随机的的和事先不可预测的。同时节点被选中的总体概率会和自身的票数权重正相关。因此每一轮的领导者是不可预测的，对手不能提前攻击领导者，这样整个网络会更加的公平和安全。`
        ],
        q4T: `IPBFT是如何运作的？`,
        q4A: [
          `IPBFT采用基于可验证随机函数（VRF）的密码掷签来随机选举验证者，同时票数权重比例越大的节点获得出块的几率也会更大，可以更大程度的保证安全与公平。在链上治理方面，引入多个治理参数，加入了作恶惩罚机制，治理参数可以在链上通过公投进行动态调整，社区治理过程将会更加高效和公正，具体的运行流程如下：`,
          `1.首先系统通过VRF选出每轮的出块节点，然后出块节点会首先提议区块并广播给其他的众神节点，然后众神节点间通过IPBFT共识算法进行共识，需要满足超过2/3的总票数同意，区块才能正常出来。`,
          `2.每隔一个周期，众神节点会根据自身的获得票数进行重新选举，票数排在前25名的节点将是新一轮的出块节点。`,
          `3.每出来一个正常的区块都会获得一定的区块奖励，区块奖励包含固定区块奖励和手续费的一半两部分，手续费的另一半将被直接销毁，众神节点可以设定一个的佣金比例，每个区块奖励将按比例分给出块节点和投票给该节点的INT持币者。`,
          `4.每一个INT的持币用户都可以参与或者提议系统公投，来决议INT的主要事务和发展，每一个公投在表决结束后，将由INT基金会牵头，协同社区共同推进完成。`
        ]
      },
      grant: {
        pageTitle: `INT 助力每一个可能的价值应用`,
        pageSubTitle: `#INT Grant ———— 为价值应用而生，让所有DAPP都真实有用!`,
        headerLabel: `我们将重视每一个好的创意，每一个好的应用，如果您与我们志同道合，那么您将有机会获得$10K - 100K 的开发基金(物联网应用不受此基金上限的限制)`,
        grantFormLink: `https://forms.gle/ivs92Kx7uKnnYvFD7`,
        grantFormLinkLabel: `立即申请`,
        strengths: {
          title: `你将获得`,
          items: [
            {
              id: `strengthsItem1`,
              imgUrl: `../assets/images/grant/2.png`,
              labelStr: `基金支持`,
              spanStr: `提供多重基金，助力项目真实落地`
            },
            {
              id: `strengthsItem2`,
              imgUrl: `../assets/images/grant/3.png`,
              labelStr: `融资机会`,
              spanStr: `更有机会获得行业内领先资本的青睐`
            },
            {
              id: `strengthsItem3`,
              imgUrl: `../assets/images/grant/4.png`,
              labelStr: `资源共享`,
              spanStr: `享受INT多维度品牌曝光`
            },
            {
              id: `strengthsItem4`,
              imgUrl: `../assets/images/grant/5.png`,
              labelStr: `流量支持`,
              spanStr: `获得INT生态流量支持`
            },
            {
              id: `strengthsItem5`,
              imgUrl: `../assets/images/grant/6.png`,
              labelStr: `技术支持`,
              spanStr: `获得INT团队技术支持`
            },
            {
              id: `strengthsItem6`,
              imgUrl: `../assets/images/grant/7.png`,
              labelStr: `生态红利`,
              spanStr: `生态内项目共享红利`
            }
          ]
        },
        expectations: {
          title: `我们的期望`,
          items: [
            { id: `expectationsItem1`, label: `物联网` },
            { id: `expectationsItem1`, label: `DEX` },
            { id: `expectationsItem2`, label: `借贷` },
            { id: `expectationsItem3`, label: `衍生品` },
            { id: `expectationsItem4`, label: `收益聚合` },
            { id: `expectationsItem5`, label: `资产跨链` },
            { id: `expectationsItem6`, label: `预言机` }
          ],
          desc: `对于开发者的项目，我们不限定项目的范围和类型。因为我们深知的多样性对于生态来说至关重要。`
        },
        global: {
          title: `加入我们，一起打造区块链开发者的乌托邦`,
          int: `INT Chain`,
          imgUrl: `/images/grant/9.png`
        }
      },
      noderequest: {
        pageTitle: `INT 4.0节点招募`,
        pageSubTitle: `随着INT 4.0的逐渐完善，正式网上线，INT 4.0将开启共识节点的招募，任何符合入选条件的主体和个人都可以参与节点竞选，并获得节点的收益。`,
        requestBtn: `立即申请`,
        requestLink: `https://forms.gle/GXprfXMkWBzGnEWs8`,
        guidance: {
          title: `招募指引`,
          li1: `INT 4.0 节点招募计划2021年09月02日启动，长期开放；`,
          li2: `符合参与要求的组织和个人，可即刻提出节点申请；`,
          li3: `所有提交的节点信息INT将会逐一核实筛选，防止恶意节点产生。`
        },
        conditions: {
          title: `参与要求`,
          li1: `(组织及个人)对区块链技术有基础的认知和了解（如公私钥、签名等等）；`,
          li2: `(个人)拥有自己完全可控的，可接入公网的服务器资源；`,
          li3: `(个人)拥有一定技术基础，能够独立进行服务器维护和管理操作；`,
          li4: `(组织)拥有可运行节点的服务器和节点运维技术人员;`,
          li5: `参与过INT 4.0 测试网挖矿大赛的节点运行者可优先考虑；`,
          li6: `节点软硬件和网络环境要求`,
          table: [
            { label: `系统`, value: `CentOS 7.5 64-bit` },
            { label: `CPU`, value: `4 core` },
            { label: `内存`, value: `8 G` },
            { label: `本地存储`, value: `512GB SSD` },
            { label: `带宽`, value: `20 Mbps` }
          ]
        },
        reward: {
          title: `节点奖励`,
          li1: `节点的收益主要来自出块奖励和Tx手续费，每年出块奖励上限约为2000万个INT。`,
          li2: `出块奖励 = 节点出块数量 * 每个块奖励，出块数量越多，奖励越多。`,
          li3: `节点年收益=节点动态权重比*年出块奖励`,
          li4: `节点权重，即节点获得投票占总投票的百分比，因投票总量和单个节点所获得投票量是在不断变化中的，因此，在此处我们使用动态权重比列出计算公式，仅作帮助理解使用。`,
          li5: `详细节点奖励说明请查看： `
        },
        process: {
          title: `参与流程`,
          li1: `1.填写节点申请表`,
          li2: `2.等待INT人员的信息审核及回复（3个工作日内）`,
          li3: `3.准备好注册节点的100万INT 4.0 代币`,
          li4: `4.根据文档注册运行节点：https://titansdocs.intchain.io/`,
          li5: `5.公告新增节点信息，获取投票`
        },
        resources: {
          title: `相关资源`,
          links: [
            {
              label: `区块链浏览器:`,
              link: `https://titansexplorer.intchain.io/`
            },
            {
              label: `节点部署文档:`,
              link: `https://titansdocs.intchain.io/`
            },
            {
              label: `投票教程:`,
              link: `https://www.youtube.com/watch?v=yt9aLx7KHgI`
            }
          ]
        },
        faq: {
          title: `FAQ`,
          faqs: [
            {
              q: `1.验证节点多长时间能拿到奖励？`,
              a: `在出块后，可以实时领取奖励`
            },
            {
              q: `2.多长时间统计一次节点的投票数量？`,
              a: `投票是实时，候选节点可以实时看到投票数量的新增。验证节点的替换周期约为2个小时，验证节点的新增投票会在下一个周期生效。`
            },
            {
              q: `3.投票人的投票奖励是多少？`,
              a: `给投票人的投票奖励的百分比由节点自行设定（即每个节点的投票奖励可能不一致），范围在0%—100%。`
            },
            {
              q: `4.当一个节点获得的足够的其他人的投票后，能否撤出自己给自己的投得的票数？`,
              a: `不能，基于安全性考虑，节点需要将自己的投票作为保证金抵押，防止作恶行为的发生，所以节点无法撤出对自己的投票。如果极端情况下需要撤回投票，则可以通过注销节点撤回自己的所有投票。`
            }
          ]
        }
      }
    },
    components: {
      applicationsGrid: {
        listItems: [
          {
            title: `智能家居`,
            desc: `拥抱未来的生活方式`
          },
          {
            title: `物联网`,
            desc: `各类物联网终端采集数据上链和利用智能合约触发物联网终端控制`
          },
          {
            title: `供应链管理`,
            desc: `包含采购、生产、仓储、物流、销售的全过程区块链优化改造`
          },
          {
            title: `车联网OBD设备`,
            desc: `全生命周期智能行车助手`
          },
          {
            title: `供应链金融`,
            desc: `利用区块链技术提供供应链金融服务`
          },
          {
            title: `5G`,
            desc: `将5G，IoT和区块链结合，实现更快更安全的网络协议`
          },
          {
            title: `防伪溯源`,
            desc: `利用区块链的不可篡改和数据可追溯实现防伪溯源`
          },
          {
            title: `慈善公益`,
            desc: `实现慈善公益类财务信息的公开透明`
          },
          {
            title: `NFT`,
            desc: `数字艺术品、游戏、数字艺术品市场以及物理资产（证件、债券）上链、确权、流转`
          },
          {
            title: `去中心化金融`,
            desc: `多样化的去中心化金融产品丰富产品生态`
          }
        ]
      }
    },
    footer: {
      about: `关于我们`,
      resources: `资源`,
      getInvolved: `加入我们`,
      intVideo: `INT宣传片`,
      blog: `博客`,
      explorer3: `3.0 区块浏览器`,
      testExplorer4: `4.0 测试网区块浏览器`,
      mainExplorer4: `4.0 区块浏览器`,
      mainExplorer4Blockscout: `4.0 Blockscout浏览器`,
      webWallet3: `3.0 Web钱包`,
      testWebWallet4: `4.0 测试网Web钱包`,
      mainWebWallet4: `4.0 Web钱包`,
      webWallet: `Web钱包`,
      whitepaper: `白皮书`,
      whitepaperLink: `https://intchain.io/whitepaper/INT-White-Paper-3.0-CN.pdf`,

      bsnLink: `BSN 官网`,
      gitHub: `GitHub`,
      crossBridge: `跨链桥`,
      intForum: `INT 论坛`,
      copyright: `All rights reserved`,
      guidelinesV4: `4.0 相关指南`,
      guidelinesLabel: {
        mappingGuide: `映射指南`,
        metaMask: `小狐狸钱包使用指南`,
        imtoken: `移动端钱包使用指南`,
        nodeMigration: `节点迁移指南`,
        voting: `INT 4.0 节点投票演示`
      },
      guidelinesLinks: {
        mappingGuide: `https://intchain.io/guidelines/INT-mapping-guide-4.0-CN-20220419.pdf`,
        metaMask: `https://intchain.io/guidelines/INT-version-MetaMask-user-guide-CN.pdf`,
        imtoken: `https://intchain.io/guidelines/INT-version-imtoken-wallet-usage-guide-CN.pdf`,
        nodeMigration: `https://intchain.io/guidelines/Guide-to-Node-Migration-from-INT-3.0-to-INT-4.0-CN.pdf`,
        voting: `https://v.qq.com/x/page/c3261ezzuvt.html`
      }
    }
  }
};

const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages
});

export default i18n;
