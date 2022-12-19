<template>
  <form action="#" method="post" dir="rtl">        
    <div id="confirmation">
      <div class="container">
        <label for="name" >الاسم: </label>
        <input type="text" id="name" name="name" required minlength="5" maxlength="15" />
      </div>
      <div class="container">
        <label for="phone" >الهاتف: </label>
        <input type="text" id="phone" name="phone" required minlength="8" maxlength="18" />
      </div>
      <div class="container">
        <label for="address" >العنوان: </label>
        <input type="text" id="address" name="address" required minlength="8" maxlength="50" />
      </div>          
     
    <button type="submit">تأكيد</button>

    </div>
  </form>
</template>

<style lang="scss" >
$mainColor: #e0f2e9;
$secondaryColor: #1f2124;
#confirmation {
  // position: absolute;
  // right: 1rem;
  // bottom: 1rem;
  width: 90%;
  border-radius: 7px;
  background-color: $secondaryColor;
  padding: 0.5rem;
  color: $mainColor;
  .container {
    padding: 0.5rem;
    margin-right: 0.2rem;
    margin-top: 0.4rem;
    input[type='text']{
      background: rgba($color: $mainColor, $alpha: 1);
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
      border: none;
      border-radius: 8px;
      &:focus {
        border: none;
      }
    }
    select {
      background-color: $mainColor;
      border: 1px solid $secondaryColor;
    }
  }
}
</style>