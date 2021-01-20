# 16. Accessible Animations with reduced motion

## Introduction
Animations can make people sick, or worse! By adding animation toggles and listening in to the user's system preference for reducing motion on OSX and iOS, we can give them more control over our interfaces. Animation can be a safety issue; let's do something about it!

Warning: there is a flashing animation in the video.

In this lesson:
-  [prefers-reduced-motion](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [WCAG 2.1, Guideline 2.3: Seizure risks](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-seizure-does-not-violate)
- [Your Interactive Makes Me Sick](https://source.opennews.org/articles/motion-sick/)

## Transcript
Instructor: [00:00] Hey friends, today we're going to talk about **accessible SVG animation, specifically giving users a cross-browser way to turn our animations off**, because for users with vestibular disorder, motion sickness, or even a wicked hangover, animations can make people sick or worse. It could give someone a seizure and become a safety issue.


### Button to toggle animation
[00:19] The first thing we're going to do is add a button element. This will be a cross-browser mechanism to toggle our animation.

[00:26] I will give it an `id` of `animation-toggle` and the text of `toggle`, a `span` with the word `off` in it, and then animation. Toggle off animation to start in our JavaScript program and toggle not only the state of the animation, but the text inside of our toggle button.

[00:43] We've got some SVG here. Let's go look at it in the browser real quick to see. We've got our toggle off animation button and these pulsating circles. I won't leave them up on the screen for too long, but we want to control this with this animation button. Later on, we're going to use the prefers reduced motion media query to respect the user's preference in iOS Safari and OSX Safari.

[01:06] In our JavaScript, we've got a few things set up already including an `animating` flag set to `true`. Now, you could pull in the default state of that flag from your favorite state library or a database. I'm using a static vanilla JavaScript file here to start.

[01:22] I've got a couple dom references for our `animation-target` which is where our circles are animating, our `animationtoggle` button and the `span` inside of that button. Let's go and add some JavaScript to bind a click handler to our button. I will say toggle button, `addEventListener`, add a `click`. Since it's a native button element, we can accessibly add this handler.

[01:48] In our `toggleBtnHandler` function, we will check if the `animating` flag is set to `true`. Then we're going to disable the animation using a separate function we will write in a second `disableAnimation()`. That way we can call these functions separately. The business logic will be separate from actual click handler.

[02:09] Now, we'll have an `enableEnimation` function. In our `disableAnimation` function, we're going to toggle that button's text using the text content property. We will change it to on - `toggleBtnText.textContent = 'on'`. We'll have our animation target, its class list.

[02:32] We're going to add a CSS class of no-animate - `animationTarget.classList.add('no-animate')`. That will give us a CSS hook to react to these changes. We're going to change our animating flag to false - `animating = false`.

[02:45] In our `enableAnimation` function, we'll do the inverse of all that, so `toggleBtnText`, text content we'll set that back to off - `toggleBtnText.textContent = 'off'`. The `animationTarget`, we'll target its class list and remove that no-animate class - `animationTarget.classList.remove('no-animate')`.

[03:05] Then we'll change our `animating` flag back to `true` - `animating = true`. What's nice about this is we can disable and enable from various scenarios.

### CSS for disabling Animation
[03:16] If we look at our CSS for this, I'm writing Sass but this compiles to real CSS that I'm then referencing in the browser. Our `animation-toggle`, I have overridden the default style of this button.

[03:28] Our `animation-target` is a 400 by 600 div and then it has these pulsating circles inside with an animation of pulse. It's got a cubic Bézier easing function.

[03:42] It transforms the size and opacity of these circles on this animation. If we go back to the browser, we've got our little toggle on and off animation, but it's not actually being controlled with CSS yet, so we need to go and override some of these styles. I'm actually going to write a **mix-in, so that this is reusable**. This mix-in is going to be called `noAnimate`.

[04:08] We've got a couple of things in here that are animating, including the pulse and the circle. I believe it might actually just be the circle, but that's OK.

[04:17] We'll say animation `none !important`. Now, this is like the last resort. If the user doesn't want animation because of the safety issue, we want to override any other specific CSS.

[04:29] Normally, I wouldn't recommend using the `!important` flag, but in this case, the user really doesn't want to see animation. Our circle animation, we're going to set some styles so that we have a nice animation end state, without it actually having to transition.

[04:47] I'm going to transform some of these circles to various sizes that would normally be done with the animation itself. I've got a couple of circles. I'm using nth child to get the second and third ones. I'm setting various opacities, just so that it's got a nice default state when you have animation turned off.

[05:14] Otherwise, it looks like nothing's happening. We've got our `nth-child` of three. This is the last one. We'll give it half opacity, and transform its scale to be half.

[05:32] We've got a .25, a .75, and a .05. They have some nice opacity and some nice scale.

[05:40] Then we're going to, in our `no-animate` class, I'm just going to `@include` that `noAnimate` mix-in. I'm going to reuse that in a second. That way, we've got our `noAnimate` class. It will compile all of this CSS to land inside of our `noAnimate` class.

[05:58] Now if we got to our browser and I toggle off this animation, we get the final state, and it looks nice, but it's not transitioning and making people sick. If we turn it back on, it'll start over. That's working well.

### Local Storage
[06:12] One thing I want to do, before we move onto to prefers reduce motion, is store this in `localStorage`. **If the user turns off the animation, they leave and come back, in their local storage it will remember what they have selected.**

[06:28] In our `disableAnimation` function, I'm going to say `localStorage.setItem`. We'll say animating, just set to false. You could do this with a cookie, if you wanted. There's different ways. I'm just using `localStorage` today, because it's easy.

[06:47] You could even check if it exists before you add it. There's lots of different ways that you could handle this. We've got an `animating` set to a string of `true` or `false`, depending if we've disabled or enabled the animation.

[06:59] What that does for us is then on page load, I can say in `localStorage.getItem('animating')`, if it exists, and it's set to a string of `false`, then I can `disableAnimation` using that function that we created. **Now, if I toggle this, and I hit refresh, it remembers. It remembers that state, so the user won't be assaulted with our animating circles, if that's what they chose.**

### System Preferences
[07:27] Now, we're going to go one step further. I'm going to show you a setting in the **system preferences.**

[07:35] In OSX and iOS Safari, we can actually listen into the system preferences. Under **Accessibility in OSX -> Display**, there's this **reduce motion setting**. **It doesn't affect Chrome currently, but in Safari, if we've checked that setting, that means that we can actually respond to that in CSS.**

[07:54] In our CSS, I'm going to write `@media(prefers-reduced-motion)`. Then in parentheses, I will say, "Prefers reduced motion." Inside of here, I could then `@include` our `noAnimate` class. It will, in Sass, go and print all of that good stuff that we wrote above.

[08:15] I'm also going to one step further and say `#animation-toggle`, that button, they don't really need to toggle it. If that's not going to control the animation, we're just going to go ahead and hide that toggle button, because it's not really relevant anymore - `display: none`.

[08:30] In Chrome, we've still got our toggle, but in Safari, it just shows the end state of that animation, and our toggle button goes away. If I go back into the system preferences and turn that setting on and off, then it sets it back to the way it looked in Chrome on default.

[08:50] Regardless of what you're monkeying around with -- localStorage, cookies, or whatever -- **this really listens to the user's preference. It works on both OSX and iOS Safari.** Hopefully, more browsers soon.

[09:01] Between these two tools, you should be able to make an animation that gives the user more control, and doesn't make them sick or worse.
