<!-- The objective of this page is to cast vision for the purpose of adult ministries and to give people an overview of how to, as an adult, get involved at the church throughout the year. Not just right now but if a guest is trying to evaluate what it looks like to be involved throughout the year this page should give an idea of that. -->
<script lang="ts">
    let pageTitle = "Serve";
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
        <div class="w-full aspect-[4/4] md:aspect-[8/4] lg:aspect-[10/4] bg-cover flex justify-center flex-row items-center align-middle bg-center overflow-clip rounded-lg transition-all duration-500" style="background-image: url('https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');">
            <div class="w-full h-full text-center bg-cover flex justify-center flex-col align-middle bg-gradient-to-b from-muted/60 to-foreground/40"></div>
        </div>
    </section>
    <section id="next" class="container justify-between mx-auto my-32 flex flex-row gap-5">
    <div class="max-w-3xl text-lg space-y-4 ">
        <h2 class="text-5xl font-black mb-4">This is a page for kids</h2>
        <div class="w-12 h-1 bg-primary mb-4"></div>
        <p class="text-lg">Calvary is a community of people making a journey with each other in following Jesus. That is the heart behind all we do– every ministry, every structure, every program, class, service, or event– we are here seeking to make a place where people can come and meet with God. May this be a place where you and I can encounter our Maker, praise our Father, surrender to our Master, and love the Lord our God with all our heart, and mind, and soul, and strength.</p> 
        <p class="text-lg">Have you found your place to help you in your journey? You are welcome to join us as we seek to follow God together.</p>
    </div>
    </section>

    <section class="max-w-6xl mx-auto">
        <div class="container my-32 mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 align-middle">
            <div class="bg-primary md:col-span-1 relative -top-5 -left-5 overflow-visible rounded-lg">
                <div class="w-full h-full relative top-5 left-5 aspect-[6/4] lg:aspect-[4/4] bg-cover flex justify-center flex-row items-center align-middle bg-center overflow-clip rounded-lg transition-all duration-500" style="background-image: url('https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');">
                        <div class="w-full h-full bg-cover z-1 justify-center flex-col align-middle bg-gradient-to-bl from-muted-darker/60 to-foreground/20"></div>
                </div>
            </div> 
            <div class="flex  md:col-span-2 flex-col justify-center">
                <h2 class="text-5xl font-black mb-4">Special Event</h2>
                <div class="w-12 h-1 bg-primary mb-4"></div>
                <p class="text-lg">Welcome to our exclusive annual event! Join us for an unforgettable experience filled with excitement, entertainment, and inspiration. Get ready to be part of something extraordinary and create lasting memories with us. Save the date and stay tuned for more details!</p>
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
            <Accordion.Trigger class="text-left md:text-xl lg:text-2xl hover:no-underline">Discover Calvary Classes</Accordion.Trigger>
            <Accordion.Content class="text-md max-w-3xl">
            Discover Calvary is a six-week class, offered three times a year, which chronicles our journey with the Lord. This course explores our vision and values, our practices and philosophies, and our calling and destiny in the Lord. We are a people on mission with Jesus.
            These classes are a great way to find out about Calvary and explore what it means to be a part of this faith community. Discover Calvary is one part of the process of becoming a member at Calvary.
            </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-2">
            <Accordion.Trigger class="text-left md:text-xl lg:text-2xl hover:no-underline">Journey Groups</Accordion.Trigger>
            <Accordion.Content class="text-md max-w-3xl">
            Journey Groups are the heartbeat of Calvary. Our vision calls us to express true Christian community. What does that mean?
            First, God is building us into a place where He dwells (Ephesians 2:19-22). We want God to feel at home in us. 
            Second, we want to grow in our capacity for authenticity (1 John 1:7). That means we are growing in our ability to be open and honest with others in a safe place. 
            Third, we want to practice being a community where our attachment with the Lord and others fuels our joy, which empowers godly living (Numbers 6:22-26; John 15:9-12). 
            Fourth, Journey Groups are one of the primary places where we minister to and care for one another as a body (James 5:16).
            </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-3">
            <Accordion.Trigger class="text-left md:text-xl lg:text-2xl hover:no-underline">Adult Bible Study</Accordion.Trigger>
            <Accordion.Content class="text-md max-w-3xl">
            Whether you are just getting started with the Bible or have read it for decades, our Bible Studies create opportunities of fellowship, focused conversation, and life application. These studies are also intended to help understand who God is and what God is doing in our lives, which equips us for godly service to one another and the world.
            </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-4">
            <Accordion.Trigger class="text-left md:text-xl lg:text-2xl hover:no-underline">His Delight Ladies' Ministry</Accordion.Trigger>
            <Accordion.Content class="text-md max-w-3xl">
            This is an invitation for the Calvary ladies to come as we creatively communicate Jesus' heart. As women of Calvary, we are called to partner with Jesus in the restoration of things lost in people's lives. Ezekiel 36:25-27 shows us that God makes us holy. The ladies' ministry provides a meeting night, prayer room, Bible studies, annual conference, retreats and more.
            </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-5">
            <Accordion.Trigger class="text-left md:text-xl lg:text-2xl hover:no-underline">Serve Locally & Globally</Accordion.Trigger>
            <Accordion.Content class="text-md max-w-3xl">
            God used Calvary to plant many churches - feeding children, training up leaders, giving Bibles, bringing hope to widows, prisoners, and orphanages. Calvary continues to serve globally through partnerships with ministries in India, Middle East, Africa, Central and South America. Locally, we partner with and serve organizations as the Lord leads and guides us.
            </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-6">
            <Accordion.Trigger class="text-left md:text-xl lg:text-2xl hover:no-underline">Prayer Room</Accordion.Trigger>
            <Accordion.Content class="text-md max-w-3xl">
            Prayer transforms the life of a believer. At the Prayer Room of Calvary, we want to bring to you opportunities for you to experience the presence of God, renew your mind, be empowered by His Spirit. The Prayer Room at Calvary is open for all who desire to pray and encounter Jesus. Calvary continues to pursue the Lord through 24/7 prayer in our Prayer Room. Come and join the symphony of prayer with God that is springing forth from the heart of Calvary.
            </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-7">
            <Accordion.Trigger class="text-left md:text-xl lg:text-2xl hover:no-underline">Ministry Team Training</Accordion.Trigger>
            <Accordion.Content class="text-md max-w-3xl">
            This specific six-month Academy builds with intensive group interaction. We believe God has called us to equip the saints for the work of the ministry. We are confident that by His wisdom and Spirit we can release a generation of ministers filled with His love who will exercise their God-given calling in power - no matter if God has placed you in the workplace, a university, arts and entertainment, the church or on the mission field.
            </Accordion.Content>
            </Accordion.Item>
            </Accordion.Root>
        </div>

        
    </section>

    <section class="container mx-auto my-24">
        <h2 class="text-5xl font-black mb-4">Adult Ministry Announcements</h2>
        <div class="w-12 h-1 bg-primary mb-4"></div>
        <p class="text-xl max-w-xl leading-relaxed mb-8">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
        <div class="grid grid-cols-1 md:min-h-32 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {#each data.featuredAnnouncements as announcement}
            <Announcement {announcement} />
          {/each}
        </div>
      </section>





</main>