<script lang='ts'>
  import { v4 as uuidv4 } from 'uuid';
  import { onMount } from 'svelte';
  import { items } from '../stores';
  import TodoApi from '../utility/TodoApi';
  import Item from './Item.svelte';
  import NewItem from './NewItem.svelte';
  
  let sortedItems = [];
  $: {
    sortedItems = [...$items].sort(
      (a,b) => {
        if (a.completed && b.completed) return 0;
        if (a.completed) return 1;
        if (b.completed) return -1;
      }
    );
    console.log(sortedItems);
  }
  const handleNewItem = (e) => {
    $items = [
      {
        id: uuidv4(),
        text: e.detail,
        completed: false
      },
      ...$items
    ];
    TodoApi.save($items);
  };
  const handleUpdate = (e) => {
    const index = $items.findIndex((item) => item.id === e.detail.id);
    $items[index] = e.detail;
    TodoApi.save($items);
  };
  const handleDelete = (e) => {
    // e.detail is the id of the item
    $items = $items.filter((item) => item.id !== e.detail);
    TodoApi.save($items);
  };
  onMount(async () => {
    $items = await TodoApi.getAll();
  });
</script>

<div class='list'>
  <NewItem on:newItem={handleNewItem} />
  {#each sortedItems as item (item.id)}
    <Item 
      {...item} 
      on:update={handleUpdate} 
      on:delete={handleDelete} 
    />
  {:else}
    <p class='list-status'>No Items Exist</p>
  {/each}
</div>

<style>
  .list {
    padding: 12px;
  }
  .list-status {
    margin: 0;    
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
  }
</style>

