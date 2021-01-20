# 8. How Visible vs. Hidden Elements Affect Keyboard/Screen Reader Users

## Introduction
There are many techniques for hiding content in user interfaces, and not all are created equal! Learn how different hiding techniques in HTML, CSS and ARIA impact keyboard and screen reader users in addition to visual display. As a bonus, we'll also take a look using a screen reader on a mobile device.

## Transcript
00:01 Today, we're going to talk about **visible versus hidden content in HTML pages and apps**. There's quite a few ways that you can hide something from the screen, but not all techniques are created equal. Today, we will look at a collection of techniques for hiding content, and see how they impact the keyboard, and potentially a screen reader user.
00:20 In my HTML document, I've got a set of divs, each with a heading and a link inside. If we go and look at these in the browser, I've got some CSS set up for them in my style sheet so that each div has a different background color, a bit of a rainbow going on here.

00:35 If I tab through each of these, you can see that the links inside of these divs are all focusable. The default focus outline is shown, because I have been a good citizen and kept a visible focus style. If you are going to override that, make sure you replace it with something in your CSS.

### display: none
00:52 However, if we go and modify these divs, and start adding some hiding techniques, the first I'm going to add an in-line style of display none. If you were really putting this in your document, you would probably extract that into a CSS class.

### hidden attribute, style opacity 0, visibility hidden
01:07 For now, I'm just going to go and add a collection of techniques. The second one is the HTML5 hidden attribute. The third technique I'll add is a style of opacity zero. The fourth one will be another CSS style of visibility hidden, see what that does.

### css class visually-hidden
01:26 The second-to-last one, I'm going to add a CSS class of `visually` hidden, which I have set up in my CSS. If we go look at that, we can see visually hidden.

01:36 It is the one taken from the HTML5 Boilerplate project, but it has a collection of CSS that will make it so that this element is rendered using things like border zero, clip with a rectangle of zero dimensions, a height of one pixel, and width of one pixel, but margin of negative one pixel, so those cancel each other out.

01:57 Overflow hidden, padding zero, position absolute, so **this will be rendered**. You can tab onto something that's inside of it if there is a link in there,**but it won't be shown visually**. 

## aria-hidden attribute
The last thing we'll add is an `aria-hidden` attribute with true value.

02:15 Now we have six divs, all with different hiding techniques. If we go over to the browser and refresh, we can see that only one of them is actually visible. There's two more in here that are reserving space, but we can't see them. Let's go look at what each of these did.

02:35 The first div has `display:none`. It's pretty obvious that that's what that would do. It hides it from everybody. That includes the children. They have been hidden, but display none cascades down. If you want to hide something from everybody, your keyboard and screen reader users included, use display none.

02:52 If we go to the accessibility inspector in Chrome, we can see that the `element is not rendered`. Therefore the accessibility node is not exposed. If you remember my earlier lesson about the accessibility tree, and talking about ARIA, and how these things get exposed to screen readers, **`display-none` will remove something from the accessibility tree.**

03:12 Similarly, the HTML5 `hidden` attribute -- which is supported in quite a few browsers, but if you were worried about backwards compatibility, you might want to go and just add some CSS to make that display none in all browsers, if you match that attribute selector -- we can see that Chrome, the user-agent style sheet here is applying `display:none` with that `hidden` attribute.

03:37 The third version is the first one that we can see it has reserved some space. The `opacity: 0` version is reserving the dimensions of the div, but the content is not visible. If we go to tab through the page, we can see Link 3 is still focusable in the div with opacity zero.

04:00 If you want to hide something from a keyboard user, with `opacity:0`you might need to go and do a little bit more work. For example, to hide the link from a keyboard user, we could put a `tabindex=-1` on this link. Then when I go to tab on it, we skip by. I'm now tabbing onto Link 5, which is the next one that's been left visible to a keyboard, so to speak.

04:25 The `opacity:0` method, a use case for this might be animation, like if you want to fade in an element and you can use opacity, but the intent would be that it would get changed to opacity `1`. If you were going to animate it on page load or something, the links would still be reachable if you didn't apply this tab index onto it.

04:47 It's good to know what that `opacity` is doing to the keyboard user and screen reader user potentially. If we go look at the opacity zero div -- I'll change this back to zero -- we can see in the accessibility inspector that that node is not exposed, but the div itself isn't really interesting for accessibility.

05:06 We should look at what's happening to the children. The heading and the link are still exposed to the accessibility tree. Those nodes will still exist. That means that a screen reader user could still navigate to this heading using their screen reader.

05:21 The link would still be reachable in the links list, but with the `tabindex` of `-1`, they wouldn't ever get onto it, you would never tab onto the link. This technique, you'd probably use sparingly but like I said, it might be good for animation.

05:37 The next one that we can see, `visibility: hidden`, using the CSS style of visibility hidden. It's similar to `opacity`. **It's reserving the space, there's pixels reserved for this element, but the link inside of it was not reachable.**

05:55 It's very similar to `display none`, except that it's reserving the pixels on the screen. You might wonder when you would actually use this. I have seen it used in a toolbar, where the space for the element needed to be reserved, but you didn't want it to be reachable because maybe it was disable, or something like that.

06:15 If you need to reserve the space in the DOM without wrapping it, and you still want it to be removed from the accessibility tree, you could use `visibility hidden`. That's the use case for this one. Using that, both the heading and the link are not exposed. It's just like `display none`, but it reserves the pixel space.

06:37 The next one we'll look at is the `visuallyhidden` class. If you remember, the CSS for that was the visually hidden class taken from the HTML5 Boilerplate. **What that does is it renders it to the screen, so the content is still being rendered. That means a screen reader user can reach it. The link is still reachable, but the CSS is hiding it.** If we tab, we can reach Link 5, but we're not seeing it on the screen. You might use `visuallyhidden` classes for things like text alternatives.

07:12 My example was working on an annual report that had a lot of graphs in it. There was just too much content for an alt attribute in an image. I could put a table with the tabular data represented in the graph off-screen using a class just like this `visually-hidden` class.

07:30 The catch to doing that is if there is a link or something inside of there, you might make it so that you're tabbing onto things you can't see. For a sighted keyboard user, that wouldn't be what you want. If you have this `visuallyhidden` class, try not to put anything focusable in there.

07:48 Next we've got our `aria-hidden` of `true`. 

Out of our elements that are still reserving space, 
- the opacity version
- the visibility hidden version
- the aria-hidden true version 
are all taking up pixel space on the screen.

08:05 The difference with `aria-hidden`, versus something like `opacity:0`, is that **it will remove the children as well. The accessibility tree is being impacted here, but not the DOM tree**. What happens is we can tab onto this Link 6, but for a screen reader user, because it has been stripped of its accessibility information, if I turn on VoiceOver, you'll see what happens here.

08:33 There's our opacity version. There's our visually hidden version. Did you notice there's no Link 6 read aloud? We tabbed onto it with VoiceOver running, but there was no information. This is what we call a **ghost control.**

08:54 You want to be really careful of this if you're using `aria-hidden` of `true`. Now the use case for `aria-hidden` would be some like a dialog. If you're opening something over the page content, and you need the background to still be visible, but you want to disable it from a screen reader user, because maybe it's not relevant anymore.

09:11 You would use `aria-hidden` of `true`, but then you have to be very careful. Just like the `visuallyhidden` class, this is rendered visible, but we need to remove the link from the tab order so that a screen reader user doesn't tab onto it.

09:25 We need to add this `tabindex` of `-1`, and then we will just skip right by. If you notice now, I'm going from Link 5 back to the browser control. That is a technique, you need to use these together.

09:38 If you're using `aria-hidden` of `true`, you probably need to use some JavaScript to walk the child subtree here, and make sure that links that are hidden from a screen reader are also not reachable.

09:49 Else it will get these ghost controls that act as tab stops with no accessibility information, because **`aria-hidden` will cascade.** We can see the div has aria-hidden, and then that ends up cascading down to anything inside of it, including links, which might be still reachable.

10:05 Any time you're using these techniques, you could refer to this video to see what each of these do. Depending if you really want to hide it from everybody, you might want to use`display:none`, or if you're animating, you might want to use `opacity` to toggle that effect, but make sure that you're handling any focusable links inside of it.

10:26 `Visibilityhidden`, similar to `display:none`, but it reserves the pixels on the screen for layout purposes. `Visuallyhidden` is something you might use for infographics, or tables with off-screen tabular data. Then `aria-hidden="true"` might be useful for something like a dialog.

10:45 Before we wrap up real quick, I want to show you how this impacts a mobile device. I've got my iPhone plugged in over a USB cable. Using QuickTime, I can turn on VoiceOver, and show you what this is like with a mobile screen reader.

10:58 I have my iPhone set up to turn VoiceOver on with a triple tap of the home button. Our `opacity=0` version of our div, we can still reach the heading and the link inside of it. I'm going to navigate in VoiceOver using a single swipe left or right.

11:24 That's our `visuallyhidden` version. We were skipping over `visibility :hidden`, and then we've got this `aria-hidden` true on our last one. Let's see what that one does.

11:46 We can see in the latest version of iOS, they've actually fixed a bug where that link inside of the `aria-hidden` region, it used to be on mobile VoiceOver that it would send you through all of that hidden content.

11:57 It seems like Apple has pushed a fix, so **on mobile devices now, `aria-hidden` true will actually cascade to focusable children.** That's great, because that is a bit of a gotcha on the desktop, as we could see. Our `opacit=0`and visually hidden versions were still reachable.

12:13 It's important to pick a technique that hides it in the way that you want, and ensures you're providing a good experience to all users, including people using keyboard screen readers and mobile screen readers.