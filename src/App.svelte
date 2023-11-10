<script>
 import Chatterbox from "./lib/chatter.svelte";
 import { io } from 'socket.io-client';

function load_io() {
  console.log("1:hello from load_io in app025"); //STUBl
}

const SOCKET_URL = "localhost:8081";
</script>

<main>
<div class="level001-container">
  <div class="level001-display"><p on:click={load_io}>Login ?</p>
    <p if={loggedin} <BattleshipsGame />
  </div>
  <div class="level001-menu"> STUB --- get socket conection button to work
    <p>im a level 1 menu!</p>
  </div>
  <div class="level001-chatbar"> <Chatterbox /> STUB</div>
  <div class="level001-footer"> foooter </div>
</div>

</main>

<style>


</style>
