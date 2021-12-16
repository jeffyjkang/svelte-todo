<script lang='ts'>
  import { createEventDispatcher } from 'svelte';

  export let id: string, text: string, completed: boolean;
  const dispatch = createEventDispatcher();

  const triggerUpdate = () => {
    dispatch('update', {id, text, completed});
  }
  const handleDoubleClick = () => {
    const yes = confirm('Are you sure you wish to delete item?');
    if (yes) {
      dispatch('delete', id);
    }
  }
</script>

<div
  class='item'
  class:completed
  on:dblclick={handleDoubleClick}    
>
  <input
    class='text-input'
    type='text'
    bind:value={text}
    readonly={completed}
    on:keyup={
      ({key, target}) => key === 'Enter' && target.blur()
    }
    on:blur={() => triggerUpdate()}
  />
  <input
    class='completed-checkbox'
    type='checkbox'
    bind:checked={completed}
    on:change={() => triggerUpdate()}
  />
</div>

<style>
  .item {
    display: flex;
    align-items: center;
    padding: 12px;
    background: #fff;
  }
  .item.completed {
    background: #ddd;
  }
  .item.completed .text-input {
    color: #555;
    text-decoration: line-through;
  }
  .item:focus-within {
    background: rgba(255,255,255,0.8);
  }
  .text-input {
    flex-grow: 1;
    background: none;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 1rem;
  }
  .completed-checkbox {
    margin-left: 16px;
  }
</style>

