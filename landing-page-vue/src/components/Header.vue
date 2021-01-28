<template>
  <div class="header">
    <h1 class="head1">Solution-Navigator</h1>
    <div class="head2">
      <div class="h2row1" >
        <button class="hB" id="e1">Übung 1</button>
        <button class="hB" id="e2">Übung 2</button>
        <button class="hB" id="e3">Übung 3</button>
        <button class="hB" id="e4">Übung 4</button>
        <button class="hB" id="e5">Übung 5</button>
      </div>
      <div class="h2row2">
        <button class="hB" id="e6">Übung 6</button>
        <button class="hB" id="e7">Übung 7</button>
        <button class="hB" id="e8">Übung 8</button>
        <button class="hB" id="e9">Übung 9</button>
        <button class="hB" id="e10">Übung 10</button>
        <button class="hB" id="eExtras">Extras</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .header{
    border: 1px solid black;

    background-color: #6ab8a2;
    grid-row: 1;
    /*text-shadow: 2px 2px 5px #8d8d8d;*/
    display: grid;
    grid-template-columns: auto;
    grid-template-rows:50% 50% ;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  .head1{
    margin-top: 21px;
    margin-bottom: 21px;
  }
  .head2{
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .head2 div{

  }
  .hB{
    padding: 5px 10px;
    background-color: #7fb0a3;
    border-radius: 8px;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    border-bottom: 3px solid #002b28;
    border-left: 1px solid #7a7a7a;
    border-top: 1px solid #c3c3c3;
    border-right: 1px solid #d2d2d2;
    font-family: "Arial";
    color: #000000;
  }
  .hB:hover{
    background-color: #729f93;
  }
  .hB:active{
    background-color: #568679;
    transform: rotate(5deg);
  }
  @media screen and (max-width: 990px) {
    .header{
      grid-template-rows:50% 25% 25%;
    }
    .head1{
      margin-top: 5px;
      margin-bottom: 21px;
    }
    .head2{
      grid-row: 2 / span 2;
      display: grid;
      grid-template-rows: 50% 50%;
      grid-template-columns: 100%;
    }
    .h2row1{
      width: 100%;
      height: 100%;
      grid-row: 1;
      margin-bottom: 5px;
    }
    .h2row2{
      width: 100%;
      height: 100%;
      grid-row: 2 / span 1;
      margin-bottom: 2px;
    }
    .h2row2 button{
      margin-left: 3px;
      margin-right: 3px;
    }
  }
</style>
