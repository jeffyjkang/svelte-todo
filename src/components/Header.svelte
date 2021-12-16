<script lang='ts'>
  import { items } from '../stores';
  import type { ItemType } from '../stores';
  $:itemCount = $items.length;
  $:completedItemCount = $items.filter((item: ItemType) => item.completed).length;
</script>

<div class='header'>
  <span>To-Do List</span>
  <span>{completedItemCount}/{itemCount}</span>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 18px;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    background: rgba(0,0,0,0.1);
  }
</style>

