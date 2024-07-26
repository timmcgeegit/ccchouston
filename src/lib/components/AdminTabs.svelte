<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs";
  
    export let activeTab: string;
    
  </script>
  
  <Tabs.Root bind:value={activeTab}>
    <Tabs.List class="grid grid-cols-4">
      <Tabs.Trigger value="announcements">Announcements</Tabs.Trigger>
      <Tabs.Trigger value="sermons">Sermons</Tabs.Trigger>
      <Tabs.Trigger value="blogPosts">Blog Posts</Tabs.Trigger>
      <Tabs.Trigger value="config">Site Config</Tabs.Trigger>
    </Tabs.List>
  </Tabs.Root>
  
  <style>
    /* Add your AdminTabs styles here */
  </style>
