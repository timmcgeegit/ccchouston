<!-- Footer.svelte -->
<script lang="ts">
  import { Twitter, Facebook, Instagram } from 'lucide-svelte';
</script>

<footer class="bg-background py-10">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">

      <div class="col-span-1 md:col-span-3 lg:col-span-6">
        <div class="flex justify-center space-x-4 mb-4">
          <a href="https://twitter.com/your-twitter" aria-label="Twitter" class="hover:text-primary transition-colors">
            <Twitter class="w-5 h-5" />
          </a>
          <a href="https://facebook.com/your-facebook" aria-label="Facebook" class="hover:text-primary transition-colors">
            <Facebook class="w-5 h-5" />
          </a>
          <a href="https://instagram.com/your-instagram" aria-label="Instagram" class="hover:text-primary transition-colors">
            <Instagram class="w-5 h-5" />
          </a>
        </div>
        <p class="text-center text-sm">&copy; 2024 Calvary Community Church | Website by Tim McGee</p>
        <div class="flex justify-center space-x-4 mt-4">
          <a href="/privacy-policy" class="text-sm">Privacy Policy</a>
          <a href="/terms-of-service" class="text-sm">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>