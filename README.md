# SimpSoon
SimpSoon is animation responsive coming soon page

## Live preview
[Demo](http://demo.eadhassan.com/simpsoon)

## Description
Simpsoon template is a simple comming soon page with awesome jquery animation effect and countdown timer.

## How to use
1.  Edit counter date : to edit counter date search for "$COUNTER"
    and under this you will fined (div) named (counter)
    then edit (timer) attribute like (Month Day, Year Hours:Minutes:Seconds).
```html
<!-- 4.$COUNTER ====================================================================

COUNTER

-->
<div class="counter" timer="12 25, 2017 12:00:0">
  <div class="container">
    <div class="row">

      <div class="col-md-3 col-sm-6 days wow bounceIn" data-wow-delay="1.3s">
        <div class='count-round'></div>
      </div>

      <div class="col-md-3 col-sm-6 hours wow bounceIn" data-wow-delay="1.6s">
        <div class='count-round'></div>
      </div>

      <div class="col-md-3 col-sm-6 min wow bounceIn" data-wow-delay="1.9s">
        <div class='count-round'></div>
      </div>

      <div class="col-md-3 col-sm-6 sec wow bounceIn" data-wow-delay="2.1s">
        <div class="count-round animated jello"></div>
      </div>
      
    </div>
  </div>
</div>
```

2.  change message text : to change message text go to (assets/js/simpsoon) file
    and go to line number (36) and edit this ["first message", "second message"]
    and if you need to add more messages just add (,) between messages.
```javascript
// typed function
$(function(){
    $(".text span").typed({
      strings: ["WE WILL BE ONLINE AFTER.", "Visit us after this time."],
      typeSpeed: 40,
      startDelay: 3000,
      backDelay: 3000,
      loop: true
    });
});
```

## Credits
1. [Typed.js](http://www.mattboldt.com/demos/typed-js/)
2. [Wow.js](http://mynameismatthieu.com/WOW/)
3. [Bootstrap v3.3.5](http://getbootstrap.com)
4. [animate.css](https://daneden.github.io/animate.css/)
