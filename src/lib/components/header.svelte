<!-- ccchouston/src/lib/components/header.svelte -->
<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Sheet from "$lib/components/ui/sheet";
    import { Menu } from 'lucide-svelte';
    import * as Popover from "$lib/components/ui/popover";
    
</script>

<header class="border-b-2">

<nav class="bg-background-alt text-foreground px-4 py-8">
  <div class="container mx-auto flex justify-between items-center">
    <div>
      <a href="/"><img src="/ccclogo.webp" class="max-w-[200px] h-auto" alt="Calvary Community Church in Copperfield Houston Texas Logo"></a>
    </div> 
    <div class="flex flex-row items-center gap-4 text-nowrap">
          <ul class=" hidden gap-8 lg:flex pt-1 flex-row">
            <li>
              <Popover.Root>
              <Popover.Trigger class="hover:text-primary">Join Us Sunday</Popover.Trigger>
              <Popover.Content class="translate-x-16 mt-3">
                <div class="flex container flex-col space-y-2 px-0">
                  <a href="/plan-visit" class="mx-4 text-foreground hover:text-primary active:text-primary">Plan your visit</a>
                  <a href="/connect-card" class="mx-4 text-foreground hover:text-primary active:text-primary">Connect Card</a>
                  <a href="/join-online" class="mx-4 text-foreground hover:text-primary active:text-primary">Join Online</a>  
                </div>
              </Popover.Content>
              </Popover.Root></li>
             <li><a href="/about" class="text-foreground hover:text-primary active:text-primary">About Us</a></li> 
             <li> <a href="#" class="text-foreground hover:text-primary active:text-primary">Get Involved</a>  </li> 
             <li> <a href="#" class="text-foreground hover:text-primary active:text-primary">Kids & Youth</a></li> 
             <li> <a href="/about" class="text-foreground hover:text-primary active:text-primary">Sermons</a></li> 
             <li> <a href="#" class="text-foreground hover:text-primary active:text-primary">Give</a></li> 
            </ul>
          <div class="ml-5">
            <Sheet.Root>
              <Sheet.Trigger class="items-center pt-3"><Menu aria-label="Open Mobile Navigation" /></Sheet.Trigger>
              <Sheet.Content>
                <Sheet.Header>
                  <Sheet.Title></Sheet.Title>
                  <Sheet.Description>
                    <ul class="text-lg space-y-3">
                      <li><a href="#" class="text-foreground hover:text-primary active:text-primary">About Us</a></li> 
                      <li> <a href="#" class="text-foreground hover:text-primary active:text-primary">Get Involved</a>  </li> 
                      <li> <a href="#" class="text-foreground hover:text-primary active:text-primary">Kids & Youth</a></li> 
                      <li> <a href="/about" class="text-foreground hover:text-primary active:text-primary">Sermons</a></li> 
                      <li> <a href="#" class="text-foreground hover:text-primary active:text-primary">Give</a></li> 
                    </ul>
                    <Button href="/contact" class="text transition-all duration-300 hover:shadow-xl tracking-wide my-6 py-6 font-normal">Request Consultation</Button>
                    
                  </Sheet.Description>
                </Sheet.Header>
              </Sheet.Content>
            </Sheet.Root>
          </div> 
  </div>
</nav>

</header>