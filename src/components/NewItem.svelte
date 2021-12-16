<script lang='ts'>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let value: string = '';
  const handleKeyUp = ({key}) => {
    if (key !== 'Enter' || value.length === 0) return;
    dispatch('newItem', value);
    value = '';
  }
</script>

<input
  class='new-input'
  type='text'
  on:keyup={handleKeyUp}
  placeholder='+ Add Item'
  bind:value
/>

<style>
  .new-input {
    box-sizing: border-box;
    margin-bottom: 12px;
    padding: 12px;
    border: none;
    outline: none;
    width: 100%;
    background: rgba(0,0,0,0.25);
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
  }
  .new-input::placeholder {
    color: #fff;
  }
</style>

