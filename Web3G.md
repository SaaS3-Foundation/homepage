# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.

- **Project Name:** SaaS3
- **Team Name:** SaaS3 Lab 
- **Payment Address(USDT):** 0x8341e551B0AE5E5905C20A112b123b5F797612f3
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview
#### Dilemma of web3 Ecosystem - Few web3 applications regardless of rich abundant apps in web2. One of the major challenges for web3 is totally different development stacks. 
For instance, most of web2 projects and dependencies are based on Java, C++, PHP, etc., while web3 requires another totally different technical stacks such as Solidity, Motoku or Substrate on EVM / WASM which hinders web2 developers to build web3 applications. 


![image](https://user-images.githubusercontent.com/95557343/155807001-7050d842-d34b-490e-aa80-0cf5a9c4a929.png)



SaaS3 project aims to deliver a fully decentralized software as a service (SaaS) network with highly scalable, crypto token incentivized, and results in a solution which can serve as the application interface (API) and software service platform for web3. 
SaaS3 is devoted to transform traditional web2 projects to web3 services by decentralized docker runtime (dRuntime). 
Particularly, regardless of development stack difference, any linux-based Web2 projects can be deployed on our platform for providing web3 services. 
Essentially, SaaS3 is an off-chain scaling technique of layer-2 which utilizes cheap off-chain docker computation to replace high-priced on-chain WASM / EVM runtime, while still remains computation decentralization by delegated proof of stake (DPoS) consensus. 
Therefore, such layer-2 off-chain is not only for computation but technical development stacks. 
The SaaS3 can not only be utilized to decentralize computational providers but also used to mint patent-NFT to protect creator intellectual property.
The service creators could earn patent fee by holding those pNFT or sell it to the NFT marketplace.  
As a result, the SaaS3 project will bridge web2 projects to web3 services for flourishing ecosystem and achieving creator economy in a truly decentralized and trust-minimized way. 
This grant will allow us to develop several pallets to implement a parachain with substrate framework on Polkadot / Kusama. 

SaaS3 as a part of Polkadot / Kusama / web 3 Ecosystem and has Following Rich Properties:

  - Bridge - Patent and monetize abundant web2 projects as decentralized web3 software services in a very short time with extremely cost. 
  - No Middleman - Cheap fee for service users compare with centralized SaaS products.
  - Security - Improve the security for system by DPoS consensus where miners are backed by token stakers with a reward and punishment mechanism.
  - Reliability - Strengthen robustness for service by computation decentralization and dRuntime redundancy of miners.
  - Green - Save energy and reduce the service cost by making use of spare computation resource for mining.
  - Creator Economy - Protect intellectual properties by patent-NFT (pNFTs) for service creators.

  
### Project Details

#### Architecture
![image](https://user-images.githubusercontent.com/95557343/155807055-cbb7a56d-1e0a-4202-8ceb-8892860b1a57.png)

Decentralized docker runtime (dRuntime) is the middleware between three roles: web2 project dockers, computation power, and services user:

  - Users pay $SAAS to miners and creators to use web3 software services. 

  - Miners earn 95% user-paid $SAAS to execute the software on their hardware. Each miner can run multiple software services with dRuntime cache (dCache) to maximize their throughput. Such cross-miner redundancy delivers dRuntime to achieve decentralization for web3

  - Creators earn 5% users-paid $SAAS as patent fee, since they are web2 projects developers who write code to build softwares. 

![image](https://user-images.githubusercontent.com/95557343/155807122-8b4e241c-391e-490e-83ca-68c43d7ad54d.png)
##### Security & Off-chain Miner Consensus 
Similar to API3 insurance, we utilize Delegated Proof of Staking (DPoS). Particularly, the token stakers stake their coin to miners as the collateral which is same conception with that nominators nominate validators in Polkadot / Kusama. 
Such backs insurance services protect users from damages caused by miner's malfunctions. Besides, the user could raise a sue on SaaS3DAO or Kleros court to slash the miner's stake to compensate the user. 

###### User Sue Procedure
Once the service user notices a malfunction, they will assess damages and make an on-chain sue claim. 
The staked tokens or collaterals have a lock period to prevent stakers from front-running claims, i.e., withdrawing as soon as a miner malfunctions to evade claims.
On the other hand, the user is required to stake funds to be able to make a claim to disincentivize abuse.
The SaaS3DAO can escalate the sue claim to determine whether should pay out the claim to the user. Once claim is accepted by SaaS3DAO, the user-claimed amount tokens will be transferred to compensate the user.
This corresponds punishment on the malfunction miner will be applied to stakers to cause damages with proportion to the amount they have staked; For instance, a user who has staked tokens that make up $p\%$ of the entire pool will pay $p\%$ of an accepted claim.
Such reward and punishment mechanism cloud guarantee the miner's loyalty and decrease the risk of potential attacks much lower such as the Sybil attack.

##### Creator Economy with Patent NFT 
![image](https://user-images.githubusercontent.com/95557343/155807155-e0cf50d7-ab4b-46eb-ac1f-bca82838bb67.png)

##### Implementation Layers
![image](https://user-images.githubusercontent.com/95557343/155807244-b10e6228-edf9-479a-add9-b4c347f62e2e.png)

#### Technologies

1. Substrate
2. Docker
3. Virtualization Technology
4. Deep learning frameworks: Pytorch, Tensorflow, MxNet, Caffe
5. libp2p
6. IPFS
7. gRPC
8. Rust
9. Substrate front-end template
10. Go

#### Components

1. **Location Delegated Proof of Stake (LDPoS)**
We adopt a user location based optimization for DPoS consensus to improve network throughput for off-chain dRuntime execution. 
Specifically, the user's request will be sent to the geographical nearest 10 miners and each of them should have a good amount of stakes such as the top 100 in the overall stake rank list. 
Finally, only the most staked miner among those 10 nearest can execute the request and achieve rewards. In such a mechanism, the users not only cloud call the services with low net-latency and good experience but also DPoS consensus. 
It also could mitigate miner's congestion. Nevertheless, it sacrifices the tolerable security a little. 
[Picture]

2. **dRuntime**
dRuntime is decentralized docker runtime and aims to run any SaaS services on distributed miner network. Essentially, it is an off-chain scaling for on-chain WASM or EVM runtime for Polkadot or Ethereum. 

3. **dCach**
dRuntime cache is a 3-level caching mechanism to guarantee the high performance and large throughput for dRuntime.  
[Picture]

4. **SaaSDAO**
The governing body of the SaaS3 project consists of three parts: inventor proposal evaluation, user litigation trial, and SaaS3 development.
[Picture]

5. **pNFT** 
A tradable patent NFT is minted when a creator submits a docker proposal and get SaaS3DAO acceptance. pNFT represents the beneficial right of creator to earn patent fee.

6. **Miner Network**
It is implemented by pallet-dRuntime and consists of all the computational power providers to offer decentralized Software as a Service which undertake to execute dDocker to reply DeResponse for user's DeRequest. All the dDockers are deployed by Creators on each miner. Thus, one miner is crashed other miners could follow up to replace the old one. Miner level redundancy could guarantee the decentralized and robustness for SaaS3 network. 

### Ecosystem Fit

- Regardless of web2 library dependencies and technical stack, those web2 based projects can be patented and monetized to decentralized web3 software services through SaaS3 protocol.
- SaaS3 cloud potentially replace centralized SaaS/API providers such as [Salesforce](https://appexchange.salesforce.com), [Microsoft Azure](https://docs.microsoft.com/en-us/rest/api/azureml/) and [Google AI](https://cloud.google.com/products/ai).  
- SaaS3 combines millions of users, computational power providers with software creators in such a harmony way for offering extremely low costing and reliable services. SaaS3 aims to become the world largest decentralized SaaS platform based on Polkadot / Kusama to provide high-quality API services with extremely cheap prices. 
- Interaction with other parachain of Polkadot / Kusama is expected. For instance, our pNFT can be traded in any NFT marketplace which is connected with Relay chain.  

Similar Projects:

- **Livepeer** https://livepeer.org/ It provides video encoding service instead of general web3 SaaS. 
- **POKT** https://www.pokt.network/ Pocket provides RPC access to Ethereum, Polygon, and a dozen more blockchain networks which is a Platform as a Service (PaaS) rather than SaaS.
- **API3** https://api3.org/ It's a decentralized Oracle to provide off-chain data streaming for smart contract instead of on-chain computation things to offer a SaaS in web3. 
- **iExec** https://dapps.iex.ec/ iExec provides decentralized applications a secure, scalable and easy access to the computing resources they need. 


SaaS market in Dapp, web3.0, and Metaverse:

- **Software Services** For example, the softwares on [Salesforce](https://appexchange.salesforce.com). 
- **AI Services** Speech2Text, Voice2Text, Image Recognition, UGC-NFT Recognition, Marketing Analysis, Algorithm Recommendation, Bot-AI, Game-AI, Reinforcement Learning, and Behavior Analysis. 
- **Decentralized Data Provider** decentralized oracle such as API3.

### Designs / Mock-ups
![6742e6c196c0ec2354f3e65474c0dd7](https://user-images.githubusercontent.com/95557343/155807321-3d96b3a6-f6c1-4b64-9411-3d75bd7eceb5.png)
![a07096c685597b9faaa8de4bce9956c](https://user-images.githubusercontent.com/95557343/155807345-fd92a0aa-1d5f-44ea-a57a-4f1ec8a4f70c.png)


## Team :busts_in_silhouette:

### Team members
The core team members are top Ph.Ds in computer science who are technical and experienced.

- **Laekshan** was a software engineer in a world-leading company. He is also an expert in IoT
development. He has mined bitcoin since 2015. Therefore, he has a lot of experience in crypto mining and market analysis.

- **Rocky** is the CTO of SaaS3 undertakes SaaS3 protocol design. Currently, he is the presidential postdoctoral fellow in NTU and chief scientist in Singapore Smart City Project. Previously, he was an AI researcher at UCB. Besides, he is also a visiting lecture professor of NTU, NUS. He is also the winner of over 10 hackathons.

- **Nael** is the CPO of SaaS3 to guarantee the high-quality features of dRuntime. He also helps SaaS3 to find more partners to build communities. Besides, he is the founder of Chapa which is an online payment gateway with 30k customers that empowers small merchants and large businesses to accept digital payments from their customers via their APIs. Previously, he was the manager of crypto community manager and market researcher in world-leading companies.

- **Israel** is the core developer of SaaS3 and undertakes the development of the creator submission network. Besides, he is the CTO of Chapa. He is the founder of Colimo City. Previously, He was the AI researcher in Google Brain, MILA of Turing Award Winner Yoshua Bengio’s Lab. He has 4 years of experience in AI development.

- **Haruki** is a Ph.D. in artificial intelligence and vice president of SaaS3 to build dRuntime on p2p network and financing-related works. Currently, he is an AI researcher and blockchain developer. He has written computer programs since he was 14 and got many hackathon awards in the past. 


### Contact

- **Contact Name:** Rocky Yang (CTO)
- **Contact Email:** contact@deainet.io
- **website:** https://www.saas3.io

### Legal Structure

- **Registered Address:** 71 Nanyang Dr, NTU Innovation Center, Singapore 638
- **Registered Legal Entity:** Giant Whales Corporation

### Team Code Repos

- https://github.com/SaaS3DAO/
- https://github.com/SaaS3DAO/DeAIMainNet
- https://github.com/SaaS3DAO/non-api-nft
- https://github.com/SaaS3DAO/substrate-node-template
- https://github.com/SaaS3DAO/substrate

GitHub accounts of all team members.

- https://github.com/isrugeek
- https://github.com/Marsrocky
- https://github.com/ChinW
- https://github.com/qinwang-ai
- https://github.com/Deslate
- https://github.com/kkazuha
- https://github.com/hugoycj

### Team LinkedIn Profiles (if available)

- https://www.linkedin.cn/injobs/in/israel-goytom-66713011b
- https://www.linkedin.cn/injobs/in/jianfei-yang-55560386/
- https://www.linkedin.cn/injobs/in/haruki-shiraishi-3b015079/

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):**  4
- **Total Costs:** 45500 USDT

### Milestone 1 — SaaS3 Documentation, pallet-pNFT, pallet-user, Initial pNFT Offering

- **Estimated duration:** 2 month
- **FTE:**  4
- **Costs:** 24000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0|
| 0b. | Documentation | Documents containing the description of whole architecture design and technical implementation details for SaaS3 Network. |
| 0c. | Testing Guide | We will provide a full test suite and guide for pNFT mint and trade with pallet-pNFT. pallet-user will be tested for API usage and payment.|
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains (what was done/achieved as part of the grant). (Content, language and medium should reflect our target audience described above.)
| 1. | pallet-pNFT| The pNFT is implemented by pallet-pNFT and based on [RMRK core pallet](https://github.com/rmrk-team/rmrk-substrate/tree/main/pallets/rmrk-core) which is an extension of pallet-uniques. Thus, pallet-pNFT will be developed from pallet-rmrk-core and be an extension of it. In this milestone, all the pNFTs are PDF Patent files with pieces of code. Once the whole ecosystem is finished, the API earned fees from users will be sent to pNFT holders as patient fees. We will set up an NFT marketplace to trade those NFTs. For instance, the pNFTs could be sold and bought by everyone on the marketplaces such as [Singular](https://singular.rmrk.app), RMRK, and [Kodadot](https://kodadot.xyz). |
| 2. | pallet-user| This pallet mainly consists of two parts: user manager and application store. The first module implements user payment modes such as pay-as-you-go or subscription plan which sends earns to miners and creators. It also contains the requirements for a valid user such as token staking or reputation to prevent users from abusing the software/API. The application store contains the callable softwares in the application layer for users to send requests to miners and retrieve the responses based on a DPoS consensus on dRuntime beyond Polkadot/Kusama's native consensus to guarantee decentralization, endurance, and security. |
| 3. | Initial pNFT Offering | We will invite some notable AI scientists/developers to mint their typical academic research achievements as pNFTs on SaaS3 network as an NFT crowdsale. Those tradable NFTs will become functional as digital patents to earn patent fees for holders once the whole project is finished. |  
| 4. | UI & Frontend | This part is implemented by [substrate front-end template](https://github.com/substrate-developer-hub/substrate-front-end-template) The frontend and UI of NFT mint and trade will be finished in this milestone. |  


### Milestone 2 — SaaS3 Protocol, pallet-miner, pallet-SaaS3DAO, pallet-staker 

- **Estimated Duration:** 3 month
- **FTE:**  5
- **Costs:** 21500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0|
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains and guides to four roles: User, Miner, Creator, Stakers respectively with some finely detailed examples. For instance, how to set up machines and mine tokens for miners.|
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests for four pallets: pallet-user, pallet-miner, pallet-staker, and pallet-SaaS3DAO.|
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains (what was done/achieved as part of the grant). (Content, language and medium should reflect our target audience described above). |
| 1. | pallet-dRuntime | The computational power providers or miners in the network provide decentralized software services which aim to execute dDocker to reply DeResponse for user's DeRequest. Each dDocker is deployed by a Creator on multiple miners with runtime redundancy. The pallet contains logic with off-chain softwares/models executions. |
| 2. | pallet-SaaS3DAO | A DAO sub-project for Creators such as AI researchers and developers to submit their code and proposal to set up AI service APIs through DAO mechanism which is a decentralized App with a UI website interface. Only accepted proposals are deployed to miners to set up services for users. |
| 3. | pallet-staker | This pallet implements rewards and slashes functions for token stakers to stake their tokens to miners for DPoS consensus. [pallet-staking](https://marketplace-staging.substrate.dev/pallets/pallet-staking) will be utilized for initial implementation and we will finely package it into our pallet-staker. |
| 4. | UI & Frontend | This part is implemented by [substrate front-end template](https://github.com/substrate-developer-hub/substrate-front-end-template).The frontend user interface of three modules with four roles including dRuntime description for user access, and document website to guide miner dRuntime execution, Creator submission DAO project, and token staking. |  

## Future Plans

- Initially, the parathreads will be utilized to connect relay chain. Once the project goes well, we will participate slot auction. 
- Marketing the project to develop and prosper SaaS3 ecosystem to make the world in a better place with a fully decentralized SaaS computing platform.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

web3 Foundation website

**Related Files**

- PitchDeck: https://www.saas3.io/file/PitchDeck_SaaS3.pdf
- SaaS3 website: https://saas3.io
- pNFT Demo (move to RMRK standard soon): https://saas3.io/non-api-nft

**Other Grants**

- IPFS Open Grant (Accepted)
