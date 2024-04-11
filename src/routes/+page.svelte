<script lang="ts">
    import { AspectRatio } from "$lib/components/ui/aspect-ratio";
    import { Input } from "$lib/components/ui/input/index";
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import Announcement from "$lib/components/Announcement.svelte";
    import type { Announcement as AnnouncementType } from "$lib/types/types";
  
    export let data: { featuredAnnouncements: AnnouncementType[] };
  </script>



<main>
    
<section class="bg-background-alt overflow-x-clip">
    <div class="w-full aspect-[4/4] md:aspect-[8/4] lg:aspect-[10/4] bg-cover flex justify-center flex-row items-center align-middle bg-center overflow-clip transition-all duration-500" style="background-image: url('/ccchoustondrone.png');">
        <div class="w-full h-full text-center bg-cover flex justify-center flex-col align-middle bg-gradient-to-b from-primary/60 to-foreground/50">
            <div class="container mx-auto flex justify-center flex-col items-center">
            <h1 class="text-5xl text-primary-foreground lg:text-7xl font-black tracking-wide mb-4 font-sans">Draw near to the Lord</h1>
            <p class="text-xl max-w-xl text-primary-foreground leading-relaxed mb-8">Join us as we draw near to the Lord through worship, prayer, and reflecting on God’s word togther!</p>
            <Button variant="outline" class="text-lg mb-0 transition-all duration-300 tracking-wide py-6 font-normal">Join Us Sunday</Button>

            </div>
        </div>
    </div>
      
</section>
<section>
    <div class="container my-32 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 align-middle">
        <div class="max-w-[50%] lg:max-w-[100%]">
            <AspectRatio ratio={4 / 4} class="relative rounded-lg z-10 object-cover bg-cover bg-primary">
                <img
                    src="/CCCWorship.jpg"
                    alt="Gray by Drew Beamer"
                    class="h-full w-full relative rounded-md shadow-2xl object-cover -bottom-8 -right-8"
                />
            </AspectRatio>
        </div>
        <div class="flex flex-col flex-inline justify-center">
            <h2 class="text-5xl font-black text-primary mb-4">Who We Are</h2>
            <p class="text-lg">We are a community of people on a journey with each other in following Jesus. That is the heart behind all we do– every ministry, every structure, every program, class, service, or event. May this be a place where you and I can encounter our Maker, praise our Father, surrender to our Master, and love the Lord our God with all our heart, and mind, and soul, and strength.</p>
            <Button class="text-lg mb-0 mt-5 transition-all duration-300 tracking-wide py-6 font-normal">Join Us Sunday</Button>
        </div>
    </div>
</section>

<section class="bg-muted py-24">
    <div class="container mx-auto">
    <h2 class="text-5xl font-black text-primary mb-4">Get Connected</h2>
    <p class="text-xl max-w-4xl leading-[1.5] mb-8">We are here seeking to make a place where people can come and meet with God. There are many ways that we serve the Lord and steward the influence he gives us. Click the links below to learn more about the different ways you can get connected. </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div>
          <Card.Root class="transition-all ease-in-out h-full duration-500 hover:-translate-y-3 hover:shadow-xl shadow-lg pb-3">
              <img src="https://images.unsplash.com/photo-1594913495702-0872744c6968?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Kids Ministry" class="mb-6 rounded">
              <Card.Header class=" mb-3 py-0">
              <Card.Title class="text-primary text-2xl tracking-wide">Kids Ministries</Card.Title>
              </Card.Header>
              <Card.Content class="">
              <p>Our firm provides comprehensive legal services for commercial property owners, including property tax appeals, lease negotiations, and dispute resolution.</p>
              </Card.Content>
              </Card.Root>
      </div>
      <div>
          <Card.Root class="transition-all h-full ease-in-out duration-500 hover:-translate-y-3 hover:shadow-xl shadow-lg pb-3">
              <img src="https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Student Ministry" class="mb-6 rounded">
              <Card.Header class=" mb-3 py-0">
              <Card.Title class="text-primary text-2xl tracking-wide">Youth Ministries</Card.Title>
              </Card.Header>
              <Card.Content class="">
              <p>We offer tailored legal solutions for multi-use properties, navigating the complex interplay of residential, commercial, and industrial regulations.</p>
              </Card.Content>
              </Card.Root>
      </div>
      <div>
          <Card.Root class="transition-all h-full ease-in-out duration-500 hover:-translate-y-3 hover:shadow-xl shadow-lg pb-3">
              <img src="https://images.unsplash.com/photo-1565813086292-604790c8a97b?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Adult Ministires" class="mb-6 rounded">
              <Card.Header class=" mb-3 py-0">
              <Card.Title class="text-primary text-2xl tracking-wide">Adult Ministires</Card.Title>
              </Card.Header>
              <Card.Content class="">
              <p>Our attorneys assist residential property owners with a range of legal matters, from property tax appeals to homeowners' association disputes and real estate transactions.</p>
              </Card.Content>
              </Card.Root>
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-center mt-24 gap-6">
    <Button class="text-lg mb-0 transition-all duration-300 tracking-wide py-6 font-normal">See what's happening</Button>
    </div>
    </div>
  </section>


<section>
    <div class="container my-32 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 align-middle">
        <div class="flex flex-col justify-center">
            <h2 class="text-5xl font-black text-primary mb-4">Special Event</h2>
            <p class="text-lg">Welcome to our exclusive annual event! Join us for an unforgettable experience filled with excitement, entertainment, and inspiration. Get ready to be part of something extraordinary and create lasting memories with us. Save the date and stay tuned for more details!</p>
            <div class="mt-8">
            <Button href="/contact" class="justify-start flex-inline text-lg mb-0 transition-all duration-300 tracking-wide py-6 font-normal" aria-label="Request a consultation button">Request Consultation</Button>
            </div>    
        </div>
        <div class="max-w-[50%] lg:max-w-[100%]">
            <AspectRatio ratio={4 / 4} class="relative rounded-lg z-10 object-cover bg-cover bg-primary">
                <img
                    src="/CCCWorship.jpg"
                    alt="Gray by Drew Beamer"
                    class="h-full w-full relative rounded-md shadow-2xl object-cover -bottom-8 -left-8"
                />
            </AspectRatio>
        </div>
    </div>
</section>

<section>
    <div class="container my-32 mx-auto max-w-6xl rounded-lg shadow-2xl  py-20 flex flex-row bg-primary justify-center align-middle content-center p-8 gap-24">
        <div class="max-w-lg">
            <h2 class="text-3xl font-bold text-primary-foreground mb-4">Subscribe to our newsletter</h2>
            <p class="text-lg text-primary-foreground">Keep up with everything happening at and around our church by signing up for our newsletter. It’s the best way to stay in touch and we promise not to spam you.</p>
        </div>
        <div class="flex align-middle justify-center">
            <form class="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" class="bg-primary-foreground" placeholder="email" />
                <Button variant="outline" type="submit">Subscribe</Button>
              </form>
        </div>
    </div>
</section>

  <section class="container mx-auto my-24">
    <h2 class="text-5xl font-black text-primary mb-4">Featured Announcements</h2>
    <p class="text-xl max-w-xl leading-relaxed mb-8">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
    <div class="grid grid-cols-1 md:min-h-32 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {#each data.featuredAnnouncements as announcement}
        <Announcement {announcement} />
      {/each}
    </div>
  </section>

</main>