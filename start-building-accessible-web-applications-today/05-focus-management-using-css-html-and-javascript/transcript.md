# 5. Focus management using CSS, HTML, and JavaScript

## Introduction
Something important to consider when coding a web application is managing the user's focus. For keyboard and screen reader users, we must ensure their focus is not dropped as content is deleted or shown in new contexts. Skip links also provide a way for users to get past a lot of content. In this lesson, you'll learn HTML, CSS and JavaScript techniques for focus management that can be applied to many situations.

## Description
00:00 Something you should really consider if you're coding a web application is _**focus management**, making sure that keyboard and screen reader users are guided through your application as elements are removed or new contexts are added such as modal windows._
00:14 You want to make sure that you're not ever dropping their focus or leaving them in the wrong context as new things appear so that you're making a totally inaccessible experience.

00:24 I'll show you a couple techniques today that you can use in web applications. Keep in mind, this is a really simple demo. These techniques become more useful as you have more content, larger applications that become really critical that the user is kept up to date with what's happening, and that their focus is never dropped.

### Demo
00:44 In my demo page, I have a couple of headings, I've got some links, and I've got a list of items with a delete button on each one. If I hit the delete button, it will remove that item. I can do a refresh since it's a soft delete.

00:58 But each item, when I focus on that button and I delete the item that I'm focused on, my focus is dropped. It's somewhere in between. If I tab, I can get to the next button, which isn't too far off. It didn't kick me all the way to the top. However, I'm not handling the focus. For a screen reader, this becomes really problematic. I'll show you why.

01:22 Turn on voiceover with `command + F5`.

01:25 Voiceover on Chrome, focus management window. Focus internal link. A link may delete item one. Button left three items. You are currently on a button. To click this button, press `control+ option + space`.

01:33 If I hit the inner key to delete this item, let's see what happens. It shows an outline, it looks like I'm focused on the next button, but it didn't announce anything. If I hit the inner key again, nothing happens. If I hit `tab`...

01:49 Delete item two. Button left two items.

01:50 Now, you can see I am on that button.

01:52 To click this button, press `control option space`.

01:54 **When I'm on the button, because it's the focusable element and it has JavaScript event attached to it, I can hit enter and it will delete the item. But if I'm not on the actual item, it won't do it. The focus not being handled makes this unusable as is.**

02:10 What we're going to do...

02:11 Voiceover off.

### JavaScript - add focus management
...02:11 is go back to our JavaScript and add a little bit of focus management. I have a really simple jQuery script. It looks for a button with a class of button delete, and then on click, it will remove it based on its parent.

02:25 **What I need to do is get a hold of a remaining list item, look for one that's still there that has a focusable button in it to delete that item, that way I can send focus to that button after this one is deleted.**

02:38 I'm going to grab the list items that I've stored in a variable. I'm going to find the closest button delete just with find. Then, I'll make it the first one.

02:52 Just in case we're on the left one and we don't know which item we're on, we're just going to send it back to the first item in the list by doing the programmatic .focus event. Now, if we go back to the browser and I fire up voiceover again, we'll see what happens.

03:06 Voiceover on Chrome. Focus internal link. A link, item one. Button left, three items. Delete item two. Button left, two items. Delete item three. Button left, one item. Voiceover off.

03:14 **As you can see, when I delete each item, it sends focus into a button that's nearby so that I can keep deleting items if I want or at least I am not being left in no man's land on some element that both isn't announced and isn't actionable.**

03:28 It is important if you're doing a list like this where you're deleting items, that you make some sort of an announcement to the user with the screen reader that the item has been deleted.

03:39 It would be good to look at Aria live regions. That's one way to do that. But by sending focus to the next item, we are making them somewhat aware that the item is being deleted, so that's good. This is a real good start.

### Skip Navigation Links
[WebAIM Link](https://webaim.org/techniques/skipnav/)
03:51 The next thing we're going to do is make these regions of the page easier to navigate with skip links. I'm going to go over to our `index.html`. At the top, I'm going to add an unordered list and give it a class of skip links. This is a really common way to make your site much easier to use with a keyboard and a screen reader.

04:15 I'm going to add an anchor with an internal link and point it to main so we can skip past the header and get to the main content. Then, I'm going to add another anchor with an internal link of footer and say global footer. This list has two items in it. It will let me skip past the header in case I've got a ton of navigation I want to get by and I want to get to the content.

04:43 To make these skip links actually work, we need to give an `id` that matches that internal link. I'm going to say an `id` of `main` and then I'm going to say `id` of footer on the `footer`. That will bind these two together, but there is one more thing that we need to make sure that the focus is caught when we use these skip links.

05:07 That is adding a `tabindex` of `-1`. I'm going to put that on the main and on the footer. **That way when we go to use these skip links, they will send our focus to the appropriate area. (e.g. we click Main, we go to Main Content, we click Global Footer, we go to Global Footer content)**

### Blue Focus Trick
05:20 Now, I know what you're going to say. That blue focus line if hideous. How do I get rid off it? You could argue both ways. I think this focus outline is really useful to know where you are and, depending on the site and how accepting the designers are of accessibility, you may want to leave that enabled.

05:39 But I will tell you a trick that...it is OK to do this. **You shouldn't ever remove the focus outline for buttons and anchors and things that you need to see where you are.**

05:49 However, **for focus management, it is generally accepted to add a CSS selector for the `tabindex` attribute when it matches `-1`. That means if you've added negative one to something to make it programmatically focusable, it is technically OK to add the `outline` of none.** I'll show you what happens.

```css
[tabindex="-1"] {
	outline: 0;
}
```

06:08 When I tab onto the link that says main content, it still has the blue focus outline so I can see where I am. But if I hit enter, I'm now focused on the main element, but the blue focus outline was suppressed. You can argue about that all day if you want.

06:28 I just wanted to tell you that that is OK to do, and it makes people a little bit happier. That way when they're clicking around the screen, they don't see that blue outline when they click on that area.

### Hide Skip Links until Focused on them
06:39 The skip links are handy, but we want to hide them from people until they're focused on them. We're going to add a little bit of CSS. I had a `skip-links` class on that UL. I'm going to add a `position` of `absolute` to pull them out of the page order. Then for each list item inside of it, I think those are actually fine.

07:03 We'll go straight to the anchor. We're going to style each anchor giving it a `display` of `block` so we can position it. We'll give it a `position` of `absolute`. Then, I'm going to do a little hack that we like to do sometimes to put things off the screen with `left: -99,999`, however many you want.

07:24 Now, we've got these skip links. I'm also going to give them a `background-color` so that they stand out on top of the content, and I will give them a little bit of `padding`. We've got these skip links that, if we go back to the page, now, they are missing.

07:40 Ah, we did need one more thing, the skip link list items. We can do this right on the...we don't need another selector. I can say on the UL `list-style` "`none`." I'll add a UL to the selector just so it's not ambiguous.

08:04 We have an unordered list of skip lines. They're now pulled out of the page flow, but we want to make them visible on focus. I'm going to say `UL skip links A focus`, get that focus pseudo element. Then, we'll give it a `left: 0`.

08:19 With this CSS only solution, we now have skip links that show up - they are ONLY visible on focus. You could play with the position and the style. But you now have skip links that will get you through the page and the focus is handled much better.

```css
ul.skip-links {
	list-style: none;
	position: absolute;
}
	ul.skip-links a {
		background-color: #fff;
		display: block;
		left: -999999px;
		padding: 1em;
		position: absolute;
    }
	ul.skip-links a:focus {
		left: 0;
	}

```
