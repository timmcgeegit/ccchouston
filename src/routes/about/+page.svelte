<!-- src/routes/about/+page.svelte -->
<script lang="ts">
  let pageTitle = "About Us";
  import * as Card from "$lib/components/ui/card";
  import { ArrowDown, Outdent } from 'lucide-svelte';
  import OurTeam from './OurTeam.svelte';
  import type { PageData } from './$types';
  import type { TeamMember } from "$lib/types/teammember";
  import * as Accordion from "$lib/components/ui/accordion";
  import { Separator } from "$lib/components/ui/separator";
  
  export let data: PageData;
  console.log('Team members data in +page.svelte:', data.teamMembers);

  function openBioModal(member: TeamMember) {
    // Implement the logic to open the bio modal here
    console.log('Opening bio modal for:', member);
  }
</script>

<main>
    <section class="container justify-center text-center mx-auto items-center content-center my-20">
        <h1 class="text-5xl uppercase lg:text-8xl font-black tracking-wide mb-4 font-sans">{pageTitle}</h1>
        <p class="text-xl max-w-xl mx-auto leading-relaxed mb-8">Calvary is a community of people making a journey with each other in following Jesus.</p>
        <a href="#next" class="transition-all duration-300"><ArrowDown class="mx-auto justify-center animate-bounce" /></a>
    </section>
    
    <section class="container mx-auto my-20">
        <div class="w-full aspect-[4/4] md:aspect-[8/4] lg:aspect-[10/4] bg-cover flex justify-center flex-row items-center align-middle bg-center overflow-clip rounded-lg transition-all duration-500" style="background-image: url('/ccchoustondrone.png');">
            <div class="w-full h-full text-center bg-cover flex justify-center flex-col align-middle bg-gradient-to-b from-muted/60 to-foreground/40"></div>
        </div>
    </section>
    <section id="next" class="container justify-between mx-auto my-32 flex flex-row gap-5">
    <div class="max-w-3xl text-lg space-y-4 ">
        <h2 class="text-5xl font-black mb-4">This is a page about us</h2>
        <div class="w-12 h-1 bg-primary mb-4"></div>
        <p class="text-lg">Calvary is a community of people making a journey with each other in following Jesus. That is the heart behind all we do– every ministry, every structure, every program, class, service, or event– we are here seeking to make a place where people can come and meet with God. May this be a place where you and I can encounter our Maker, praise our Father, surrender to our Master, and love the Lord our God with all our heart, and mind, and soul, and strength.</p> 
        <p class="text-lg">Calvary is a community of people making a journey with each other in following Jesus. That is the heart behind all we do– every ministry, every structure, every program, class, service, or event– we are here seeking to make a place where people can come and meet with God. May this be a place where you and I can encounter our Maker, praise our Father, surrender to our Master, and love the Lord our God with all our heart, and mind, and soul, and strength.</p> 
        <p class="text-lg">Have you found your place to help you in your journey? You are welcome to join us as we seek to follow God together.</p>
    </div>
    
    </section>
    <section class="my-32">
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div class="hidden lg:block">
            <img class="rounded-lg" src="https://images.unsplash.com/photo-1632846733217-44c338bf3135?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </div>
        <div class="mx-auto container col-span-2 my-5">
            <h2 class="text-5xl font-black my-4">Our Vision</h2>
            <div class="w-12 h-1 bg-primary mb-4"></div>
            <h3 class="text-xl my-4 max-w-xl">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</h3>
            <Accordion.Root value="item-1">
                <Accordion.Item value="item-1">
                  <Accordion.Trigger class="text-left md:text-xl lg:text-2xl">Intimacy: Establishing people in intimacy with God.</Accordion.Trigger>
                  <Accordion.Content class="text-md">
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="item-2">
                  <Accordion.Trigger class="text-left md:text-xl lg:text-2xl">Community: Expressing True Christian community.</Accordion.Trigger>
                  <Accordion.Content class="text-md">
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item value="item-3">
                  <Accordion.Trigger class="text-left md:text-xl lg:text-2xl">Kingdom: Extending the Kingdom of God in the earth.</Accordion.Trigger>
                  <Accordion.Content class="text-md">
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
        </div>
        </div>
    </section>
      
    <section id="our-team" class="z-10 relative">
      <OurTeam teamMembers={data.teamMembers} />
    </section>

</main>

<style>
    
</style>