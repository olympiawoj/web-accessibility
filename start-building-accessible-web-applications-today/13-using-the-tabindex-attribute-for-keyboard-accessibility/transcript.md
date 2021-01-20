# 13. Using the tabindex attribute for keyboard accessibility

## Introduction
You can make any element keyboard interactive with the [HTML tabindex attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex). But you might need a little extra JavaScript and [ARIA](https://egghead.io/lessons/aria-intro-to-aria) to support keyboards and screen readers. For more on using tabindex in practice, check out my [focus management lesson](https://egghead.io/lessons/javascript-focus-management-using-css-html-and-javascript).

## Transcript
[00:01] After my focus management demo, there were some questions about `tabindex`. Let's look at `tabindex` in HTML. We'll start by creating a div element and I'll add a `tabindex` of `0`. I'll also give it an `ID` to identify it and a `class` of `btn`so we can style it.

[00:20] If we go over to our browser and refresh, you can see I have this thing that looks like a button but it's just a div with some CSS style. If I tab onto it, I get the native focus outline. **`Tabindex` of `0` has made this div focusable, and you could add it to really any element to make it focusable**, but you might not want to for the reasons that it needs to be interactive from a keyboard and a screen reader.

### role -> to tell a screenreader that a div is a button
[00:45] Let's look at how you can do that. Now I'm not recommending that you create a div button. **If you needed to, you could bolt on a `role` of `button` to tell a screen reader that this div is actually a button.** If we go over to our JavaScript, we can bind an event on the fake button using addEventListener and we'll pass it a click event and a button event handler callback function.

[01:05] In the callback function when we have passed in the event object, we can log the `event.type` and see what event got fired. If we refresh and I tab onto this button, if I hit the `Enter key` or the `spacebar,` I get nothing. If I `click with the mouse`, I get a click event.

### keydown -> making a div accessible to a keyboard
[01:24] This alone is not accessible from the keyboard. **How do you make a div accessible to a keyboard? You can add another event listener. We'll add the `keydown` event. We'll call the same button event handler because it's logging the event type.**

[01:41] Now, if I tab onto it after refreshing the browser and I hit the `Enter key` or the `spacebar`, you can see it is logging `keydown`. It still logs `clicks` separately. **I can bind to both of these events on any element regardless of if it's natively keyboard-accessible to get keyboard accessibility handled.**

[02:00] You'll want to look at the `aria-role`, as I mentioned, as well as its **accessible name**. The `keydown `event is the first step to making something accessible with tabindex.

### tabindex -1 -> pulls the button out of tab order 
[02:09] The next thing I want to show you is `tabindex` of `-1`, and we will put that on a native button element. I'll put tabindex of -1. I'm going to give it an `ID` of `realButton` so we can identify it and a class of button to make it look like our fake button.

[02:26] Now, this one doesn't need a role because it is a native button element, so it gets that `role` implicitly. If we go over to our browser and refresh, we'll see we have another button-like thing, but this is an actual button element. **It has `tabindex` of `-1`, so if I try to tab onto it, I skip right on by.**

[02:44] **It has pulled it out of the tab order, which is handy if, say, that button is in an inactive screen in a web application or behind a modal window.** You might have some reason to pull it out of the tab order, so that a screen reader or keyboard user isn't landing on something that they can't use, for whatever reason.

### Focus Management -> Sending focus from fake button to real button
[03:03] Now, when would that be useful, other than pulling it out of the tab order? If you watch my focus management demo, you'll see that **I use focus management to send the user's focus around the screen in different scenarios.**

[03:14] One quick way to show that to you here is if we wanted to send focus from our fake button to the real button, even though it's pulled out of the tab order, that `tabindex` of `-1` means that **I can still click on it and I can send focus to it with JavaScript.**

[03:29] We'll go and get our real button in JavaScript using `document.getElementById`. I can say `realButton.focus`. When I click on that other button, it'll send the focus from our fake button where we are currently focused. If I hit the Enter key, it sends my focus over to that other button, which, even though it's pulled out of the tab order, `tabindex` of `-1` means that it's still reachable by script.

[03:54] It's a really helpful thing if you're working on focus management. You need to send focus around, super useful tool to have in your toolbox.

[04:03] It's possible to add positive integer `tabindex` values anywhere from `1` to `32,767`. That would be a lot to manage, so I wouldn't recommend adding anything other than `0` or `-1`. But let's say I added a `tabindex` of `100` and I removed `tabindex` of `-1` on our button and I just quickly added another button so we could see what happened with the focus of multiple elements.

[04:29] I've got these three buttons. I hit tab. I'm on the first one because it has a `tabindex` of `100`. If I hit tab again, it skips to the last button for some unknown reason. I do not know why. If I do `shift` `tab`, I can go back in a row. It's very unpredictable. You can quickly see that this uncertainty with the tab order means that you would have to manage those integer values of every single interactive element on a page.

[04:56] I would not recommend doing that. I would stick with `tabindex` of `0` or `tabindex` of `-1`, if you need to use it for focus management or pull something out of the tab order. That is how you use tabindex for accessible web applications.