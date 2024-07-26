<!-- The objective of this page is to cast vision for the purpose of adult ministries and to give people an overview of how to, as an adult, get involved at the church throughout the year. Not just right now but if a guest is trying to evaluate what it looks like to be involved throughout the year this page should give an idea of that. -->
<script lang="ts">
    let pageTitle = "Missions";
    import { ArrowDown, Outdent } from 'lucide-svelte';
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import * as Accordion from "$lib/components/ui/accordion";
    import Announcement from "$lib/components/Announcement.svelte";
    import type { Announcement as AnnouncementType } from "$lib/types/announcements";
    import { Separator } from "$lib/components/ui/separator";
  
    export let data: { featuredAnnouncements: AnnouncementType[] };
</script>

<main>
    <section class="container justify-center text-center mx-auto items-center content-center my-20">
        <h1 class="text-5xl uppercase lg:text-8xl font-black tracking-wide mb-4 font-sans">{pageTitle}</h1>
        <p class="text-xl max-w-xl mx-auto leading-relaxed mb-8">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
        <a href="#next" class="transition-all duration-300"><ArrowDown class="mx-auto justify-center animate-bounce" /></a>
    </section>

    <section class="container mx-auto mt-20 mb-12">
        <div class="w-full aspect-[4/4] md:aspect-[8/4] lg:aspect-[10/4] bg-cover flex justify-center flex-row items-center align-middle bg-center overflow-clip rounded-lg transition-all duration-500" style="background-image: url('https://plus.unsplash.com/premium_photo-1681493801796-b68b55740f91?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');">
            <div class="w-full h-full text-center bg-cover flex justify-center flex-col align-middle bg-gradient-to-b from-muted/60 to-foreground/40"></div>
        </div>
    </section>
    <section id="next" class="container justify-between mx-auto my-32 flex flex-row gap-5">
    <div class="max-w-4xl text-lg">
        <h2 class="text-5xl font-black mb-4">About Calvary Missions</h2>
        <div class="w-12 h-1 bg-primary mb-4"></div>
        <h3 class="text-3xl mb-3">Extending the Kingdom</h3>
        <p class="text-lg mb-4">
        Calvary seeks to actively demonstrate kingdom principles beyond our walls to our community and the world. We desire to proclaim and demonstrate God’s kingdom through varying arenas including intercession, spiritual warfare, evangelism, missions, and an expression of apostolic and power ministries. Our desire is to know the heart of God, declare his kingdom on earth, and actively prepare for Christ to rule and reign.
        </p>
        <h3 class="text-3xl mb-3">On Mission</h3>
        <p class="text-lg mb-4">
        God wants us to get in on what he is doing, to bless what he is doing. He is moving in the earth. Christ first calls us to draw near to him, to follow him, and to cooperate with his working in and through our lives (Matthew 4:19, 9:35-39; Philippians 2:12-13). Then, the love of Jesus propels us into the harvest fields of our neighborhood, city, region, nation, and world (Matthew 9:35-38, 10:1-8; Luke 9:1-2, 10:1-2; Acts 1:8). Out of intimacy with Jesus, we are moved to touch others. Under the empowering of God’s Spirit, we are enabled to serve God’s purposes in the earth.
        </p>
        <!-- <h3 class="text-3xl mb-2">How can you get involved?</h3>
        <p class="text-lg">
        God wants us to support his cross-cultural work, including ministry to the nations overseas. What can you do to see the desire of Christ fulfilled in the earth?
        </p> -->
       
    </div>
    </section>

    <section class="max-w-6xl mx-auto">
        <div class="container my-32 mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 align-middle">
            <div class="bg-primary md:col-span-1 relative -top-5 -left-5 overflow-visible rounded-lg">
                <div class="w-full h-full relative top-5 left-5 aspect-[6/4] lg:aspect-[4/4] bg-cover flex justify-center flex-row items-center align-middle bg-center overflow-clip rounded-lg transition-all duration-500" style="background-image: url('https://plus.unsplash.com/premium_photo-1681493801796-b68b55740f91?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');">
                        <div class="w-full h-full bg-cover z-1 justify-center flex-col align-middle bg-gradient-to-bl from-muted-darker/60 to-foreground/20"></div>
                </div>
            </div> 
            <div class="flex  md:col-span-2 flex-col justify-center">
                <h2 class="text-4xl font-black mb-4">How can you get involved?</h2>
                <div class="w-12 h-1 bg-primary mb-4"></div>
                <p class="text-lg">God wants us to support his cross-cultural work, including ministry to the nations overseas. What can you do to see the desire of Christ fulfilled in the earth?</p>
                <div class="mt-8">
                <Button href="/contact" class="justify-start flex-inline text-lg mb-0 transition-all duration-300 tracking-wide py-6 font-normal" aria-label="Register for an event">Register Here</Button>
                </div>    
            </div>
            
        </div>
    </section>

    <section class="max-w-6xl mx-auto">
        <div class="container my-32 max-w-4xl">
            <h2 class="text-5xl font-black mb-4">How To Get Involved</h2>
            <div class="w-12 h-1 bg-primary mb-4"></div>
            <p class="text-xl max-w-4xl leading-[1.5] mb-8">We are here seeking to make a place where people can come and meet with God. There are many ways that we serve the Lord and steward the influence he gives us. Click the links below to learn more about the different ways you can get connected. </p>
            <Accordion.Root>
                <Accordion.Item value="item-1">
                <Accordion.Trigger class="text-left md:text-xl lg:text-2xl hover:no-underline">Missionaries</Accordion.Trigger>
                <Accordion.Content class="text-md max-w-3xl">
                <p>Calvary Missions supports various ministries and missionaries who serve to reach people groups throughout the earth. They need your prayer and financial support. If you would like to financially or prayerfully support one of the missionaries below, please <a href="https://calvaryhouston.com/give/"><strong>click here</strong></a> for our online giving page.  You may also give at one of our worship services. Please make your check payable to Calvary Missions, place it in a giving envelope, indicate which team member or mission trip you wish to bless, and place it in the offering basket. Or, you can print out the <strong><a href="https://calvaryhouston.com/wp-content/uploads/2021/11/Calvary-Missions-Supporter-Response-Box-REVISED-2021-1-pg-112321.pdf">Calvary Missions Supporter Response card</a></strong>, fill in the information, use a credit card or enclose a check, and mail it back to Calvary.</p>
                </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="hargrove">
                <Accordion.Trigger class="text-left md:text-xl lg:text-2xl hover:no-underline">Hairgrove Partnership</Accordion.Trigger>
                <Accordion.Content class="text-md max-w-3xl">
                <div class="space-y-2">
                <p>Calvary has joined with Copperfield Church in a partnership to serve Hairgrove Elementary. Our efforts reflect the Whole and Healthy Children Emphasis for Greater Houston. Caring adults can make a difference in the lives of staff and students in the public arena through mentoring, volunteering, praying, and giving. We long to see transformation in our community. Changing the lives of children, equipping mentors to become change agents, and doing acts of Christ-centered goodness (Acts 10:38) will help us toward our goal of personal and community transformation.</p>
                <p>Our vision is to demonstrate the love of Jesus to students, staff, and families of Hairgrove Elementary through service, support, encouragement, and prayer in order to restore our community to God’s design and to impact the lives of children positively for the future.</p>
                <Button class="mt-4">Learn More</Button>
                </div>
                </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="poverty">
                <Accordion.Trigger class="text-left md:text-xl lg:text-2xl hover:no-underline">Touching the Poor</Accordion.Trigger>
                <Accordion.Content class="text-md max-w-3xl">
                <div class="space-y-2">
                <p>God's heart is towards the poor. Jesus declared that he had come to proclaim good news to the poor (Luke 4:18). In Deuteronomy, God declares that "there will always be poor people in the land. Therefore I command you to be openhanded toward your brothers and toward the poor and needy in your land." Touching the poor is a necessary precursor to revival, according to Isaiah 58.</p>
                <p>Calvary Missions sows into the ministry of touching the poor in many tangible ways. We partner with <a href="https://somebodycares.org/">Somebody Cares Houston</a> (Doug Stringer), <a href="https://www.cypressassistance.org/">Cypress Assistance Ministries</a>, <a href="https://www.cyfairhelpinghands.org/">Cy-Fair Helping Hands</a>, and other organizations, which are involved in compassion ministry as a way to transform lives. <a href="https://www.prisonfellowship.org/about/reentry/ifi/">InnerChange Freedom Initiative</a> is a discipleship program and aftercare ministry targeted to prisoners. IFI touches and changes lives through the power of Jesus Christ.</p>
                <p>Calvary is also involved globally in touching the poor through our relationships and partnerships with different ministries. Activities which Calvary Missions supports would include helping the poor through disaster relief, touching the lives of orphans and children in Guatemala and Latvia, and supporting, encouraging, and training church leaders and pastors.</p>
                </div>
                </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="israel">
                <Accordion.Trigger class="text-left md:text-xl lg:text-2xl hover:no-underline">Ministry to Israel</Accordion.Trigger>
                <Accordion.Content class="text-md max-w-3xl">
                <div class="space-y-2">
                <p>God, in His infinite wisdom, love, and desire for eternal fellowship with man, chose Abram to birth a nation through whom all the nations of the earth would be blessed. The national assignment of the nation of Israel was that they would have a primary role in bringing the nations of the earth to a knowledge of God and the good news of the gospel. The Messiah of the world, Jesus, came from this Jewish nation. He is a Son of David, a Root of Jesse, a descendant of Abraham, Isaac, Jacob, Judah, and on down to Solomon, Jehoshaphat, Josiah, Zerubbabel, and Zadok. Yes, the Savior of all the nations was, is, and forever will be, a Jewish Man.</p>
                <p>There is a promised blessing upon a people who bless the nation of Israel. God wants us to walk in the blessing as a people who love His people. We should love the nation of Israel and the Jewish people, not because it is some sort of political platform, but because we love Jesus, and love what He loves, and want to walk in His blessings. This issue is not one of politics, but of passion.  To support and bless Israel and the Jewish people means that we come into agreement with God's heart – loving what He loves; it means that we honor her, serve her, pray for her, intercede on her behalf, and keep our hearts tender towards her (Genesis 12:1-4; Deuteronomy 7:6-8)</p>
                <p>Calvary supports short-term missionaries as well as missionaries living in Israel ministering to many people including Jews and Gentiles.  These missionaries serve anonymously due to the nature of their work in the country.  We also support <a href="https://succathallel.com/">Succat Hallel</a> in Jerusalem, a house of prayer that stands as watchmen on the wall to minister first unto the Lord, to pray for the peace of Jerusalem, and intercede for Israel and the nations. </p>
                </div>
                </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="item-4">
                <Accordion.Trigger class="text-left md:text-xl lg:text-2xl hover:no-underline">Mission Trips</Accordion.Trigger>
                <Accordion.Content class="text-md max-w-3xl">
                    <div class="space-y-2">
                <p>Part of our assignment at Calvary Missions is to help people get to the mission field via short-term trips. Occasionally, Calvary Missions will sponsor such a trip. We also recommend other ministries like Teen Mania, and YWAM, for example, as avenues for participating in short-term missions trips.</p>
                <p>In order to participate on a trip with other ministries, please contact that ministry directly or check their website.</p>
                <p>To go on a missions trip with Calvary, the best advice is to "be prepared." Although each trip demands special preparation (which will be announced with the trip promotional packet), the following guidelines will help you to lay a general foundation of preparedness for going on a trip with Calvary Missions, so that you can respond quickly as the Lord opens doors of opportunities:</p>
                <ul class="list-disc list-outside ml-5 space-y-1">
                    <li>Get your passport as soon as possible.</li>
                    <li><a href="http://calvaryhouston.com/ministry-team-training/">Complete<i> Foundations for Power Ministry and Ministry Team Training Part One</i>.</a></li>
                    <li>Pray about where the Lord would have you to go on a trip.</li>
                    <li>Start saving now in order to have funds to travel with or to invest in others. Remember that giving for missions is over and above your regular tithe. Also, along the way, we will equip you in how to raise financial and prayer support to supplement your own resources.</li>
                    <li>Stay abreast of trip announcements via Calvary's web site, announcement sheet, missions updates, etc.</li>
                    <li>Let Calvary's <a href="mailto:jtm@calvaryhouston.com"><strong>Missions Coordinator</strong></a>, know that you are interested in going on a trip.</li>
                    <li>Complete a trip application packet as soon as the trip is announced.</li>
                </ul>
                <p>Some of our trips come together rather quickly, so following these steps will prepare you to enter the process for being considered as a potential missions team member.</p>
                </div>
                </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="item-5">
                <Accordion.Trigger class="text-left md:text-xl lg:text-2xl hover:no-underline">Calvary Missionaries</Accordion.Trigger>
                <Accordion.Content class="text-md max-w-3xl">
                <ul class="list-disc list-outside ml-5 space-y-1">
                <li><a href="https://calvaryhouston.com/david-carter/">David Carter: Release the Kingdom</a></li>
                <li><a href="https://calvaryhouston.com/angela-petry/">Angela Petry: International House of Prayer, Kansas City</a></li>
                <li><a href="https://calvaryhouston.com/daniel-dejesus/">Daniel DeJesus: Prison Ministry</a></li>
                <li><a href="https://calvaryhouston.com/gene-and-rene-haub/">Gene and René Haub: Family Life Ministries</a></li>
                <li><a href="https://calvaryhouston.com/eric-wendy/">Eric and Wendy: Beyond</a></li>
                <li><a href="https://calvaryhouston.com/ana/">Ana: Ministering Cross Culturally in Europe</a></li>
                </ul>
                </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="item-6">
                <Accordion.Trigger class="text-left md:text-xl lg:text-2xl hover:no-underline">Local and Global Mission Partners</Accordion.Trigger>
                <Accordion.Content class="text-md max-w-3xl">
                <ul class="list-outside ml-5 list-disc space-y-2">
                <li><a href="https://crosswalkcenter.org/"><strong>CrossWalk Center</strong></a>, Kathy Vosburg: Houston's hopeful and seamless re-entry discipleship process from the inside out for those who have been imprisoned</li>
                <li><a href="http://somebodycares.org"><strong>Somebody Cares</strong></a>, Doug Stringer: The Somebody Cares mission is to let people know that Somebody Cares. Because Jesus cares, we the Church care. As a result, through grassroots efforts, communities are being transformed and the Church is uniting. This is unity with a purpose. We mobilize Christians into evangelism, thereby transforming communities. We seek to identify ministries that empower people to reach their full potential and become all that God envisioned when He created them. The foundational ministries of SCA include prayer initiatives, compassion evangelism, disaster response, and leadership development.</li>
                <li><a href="https://ghpc.us"><strong>Greater Houston Prayer Council</strong></a>: seeking to facilitate perpetual prayer across Greater Houston. The Greater Houston Prayer Council is a Christ-centered and Christ-dependent collaborative existing to unite the Body of Christ in effectual, perpetual prayer and action so that all may come to know in their hearts the love of Jesus poured out through the Holy Spirit unto the glory of God, our Father.</li>
                <li><a href="https://ubahouston.org"><strong>Union Baptist Association</strong></a>: sending pathways; church planting; church renewal through replanting, and revitalization. UBA is a collaborative network of churches focused on the strategic advance of the gospel of Jesus Christ.</li>
                <li><a href="https://indiago.org"><strong>India Gospel Outreach</strong></a>, Valson Abraham: seeking to plant churches in each of India's 28,000+ postal codes.</li>
                <li><a href="https://faithwalking.us"><strong>Faithwalking</strong></a>: making wholeness possible. Faithwalking is a spiritual formation process where people are increasingly following the way of Jesus, experiencing ongoing transformation, and developing effective practices for missional living: serving the poor, the marginalized, and those in need; working for the common good; and restoring individuals, social systems, communities, and nations to God's intended design.</li>
                <li><a href="https://lovinghouston.net"><strong>Loving Houston</strong></a>: advancing community transformation by helping churches serve local schools.</li>
                <li><a href="https://www.ihopkc.org/"><strong>International House of Prayer</strong></a> (IHOPKC): The IHOPKC community exists to partner in the Great Commission by advancing 24/7 prayer with worship and proclaiming the beauty of Jesus and His glorious return.</li>
                <li><a href="https://ministersprayernetwork.net/"><strong>Ministers Prayer Network</strong></a> International. Apostle Mosy Madugba is a lifelong friend and international coordinator of MPN, which is an apostolic and prophetic network impacting the nations through prayer, equipping, evangelism, and missions.</li>
                <li><strong>Northwest Pastors in Prayer</strong>, our Senior Pastors' Prayer Group. This group has met since 1998 to pray and share together in order to promote unity, celebrate diversity, and create harmony among the churches in NW Houston.</li>
                </ul>
                <p class="my-4">And, we have the privilege of networking with many other missionaries, ministries, and organizations locally and globally, like the following:</p>
                <ul class="list-outside list-disc ml-5 space-y-2">
                <li><a href="https://houstonpregnancy.com/Home.aspx" target="_blank" rel="noreferrer noopener"><strong>CareNet Pregnancy Assistance Ministry</strong></a></li>
                <li><a href="https://www.cyfairhelpinghands.org/"><strong>Cy-Fair Helping Hands</strong></a></li>
                <li><a href="https://www.cy-hope.org/" target="_blank" rel="noreferrer noopener"><strong>Cy-Hope</strong></a></li>
                <li><a href="https://www.cypressassistance.org/"><strong>Cypress Assistance Ministries</strong></a></li>
                <li><a href="https://www.hopedrtx.org/" target="_blank" rel="noreferrer noopener"><strong>Hope Disaster Recovery</strong></a></li>
                <li><a href="https://www.houstonresponds.org/" target="_blank" rel="noreferrer noopener"><strong>Houston Responds</strong></a></li>
                <li><strong>And others…</strong></li>
                </ul>
                </Accordion.Content>
                </Accordion.Item>
                </Accordion.Root>
        </div>

        
    </section>





</main>