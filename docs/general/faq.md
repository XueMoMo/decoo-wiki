---
title: ''
---

## Q: What is IPFS Pinning Service?
IPFS is basically a distributed file system made up with numerous nodes all over the world as to form a huge network. Pinning a file to IPFS means that you tell one or several IPFS node(s) to always keep the file in their long-term storage rather than keep it in the node cache, so that your file can always be accessed or retrieved from the IPFS network.
However, it is not reasonable to ask any remote IPFS node to pin some files for you with no economic inventive. You have to pay for it. This is why there are third-party pinning service providers, and there is Decoo.

## Q: What role does Crust play in IPFS pinning service?
Crust is a decentralized storage network and acts as an incentive layer. You can take it as a decentralized cloud storage infrastructure based on IPFS. Notice, Crust is totally IPFS-compatible, rather than a standalone, isolated storage network. Decoo uses Crust DSM (Decentralized Storage Market) to place storage orders that ask numbers of nodes to pin your files to guarantee very high-level availability and security.

## Q: How do I benefit from hosting my websites/DAPPs onto IPFS?
Generally, you can get more than 100 replicas of your websites/DAPPs on IPFS with Decoo Pinning Service, which highlights higher decentralization level, better anti single-point-fault ability, as well as faster content delivery.
Even more, with the help of ENS (Ethereum Name Service), you can construct a purely decentralized websites/DAPPs hosting approach that fundamentally eliminates the possibility of being attacked by domain hijacks.

## Q: Does Decoo provide an IPFS Gateway?
An IPFS Gateway acts as a bridge between the two protocols-HTTP and IPFS. In layman’s terms, with such an IPFS Gateway, you can surf the IPFS world from an HTTP-only web browser. And Yes, Decoo runs a stable, low-latency IPFS Gateway (ipfs.decoo.io), can you can find it on the list of IPFS Gateway Checker.

## Q: What is the Web Pinning Gadget, and explain me the working principle?
We place a very user-friendly IPFS Pinning Gadget on the homepage. This is basically a trail version and a demonstration of Decoo Pinning Service, and by doing this we want to show that pinning is such easy and intuitive as it should be. No matter who you are - a personal user, a business user or even a code repo hosted on GitHub, we are ready to guide you into the IPFS/Web3.0 world.
Now we can start from clicking the + button and choose a file from your local computer. Upload the file and then you get a link. You can go visit your file (which is already been put onto an IPFS node) via this link. The link contains the CID (Content ID), a seemingly nonsense combination of letters and numbers, which in fact is the unique identifier of your file defined by the IPFS protocol.
So, what happens behind it? First, we upload the file you choose onto an IPFS node and temporally keep it. Second, we place a storage order in Crust DSM to tell numbers of nodes to store this file so you can get many replicas and they are distributed globally. Of course, we have to pay for the service, but Decoo will cover the cost as this is only for a demonstration purpose. And the last to mention, when you come to visit your file via the link, you’re actually using our IPFS Gateway because you cannot visit contents on IPFS if your browser is not IPFS-compatible.
Notice: This Web Pinning Gadget is only for trial and demonstration purpose, not for business use or any other serious use cases. To ensure user experience, we ask file size≤500MiB and we guarantee the availability of your file for no more than 24h.