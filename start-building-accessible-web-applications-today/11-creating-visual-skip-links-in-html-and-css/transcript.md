# 11. Creating visual skip links in HTML and CSS

## Introduction
_**Skip links** are an extremely helpful navigation pattern for keyboard and screen reader users, since they let you skip past sections of content._ Learn how to create skip links in HTML and CSS that show on focus, and you'll benefit all users!

## Transcript
[00:00] A really helpful way to navigate a web page if you're a keyboard or a screen reader user is a **skip link**. Let's create some skip links by starting with an unordered list.

[00:08] Inside of that list, we will put a number of anchors, starting with an internal link for the global navigation. We'll say skip to navigation. Then for the second skip link, we'll point it to the main content. The third skip link will go to the footer.

[00:37] To make sure that the skip links match up with sections, we'll go code those right now.

[00:41] The first one would be the header. We'll give it a `role` of `banner` to make sure that the role is exposed in older versions of Internet Explorer, and also to differentiate this global header from headers that could appear in articles or sections.

[00:55] We'll give it an `ID` of `global-nav`, so it matches the internal link, and then we'll add `tabindex` of `-1` to ensure that focus is caught on this element.

[01:05] For the main content, we're going to give it a `role` of `main`, again, just to be redundant in older Internet Explorer, which your users may be using to navigate. We want to make sure the role is actually exposed on this main landmark. We'll give it a `ID` of `main` to match the internal link, and then a `tabindex` of `-1`.

[01:25] Then, lastly, the footer, we will expose a `role` of `contentinfo`, `ID` of `footer`, and a `tabindex` of `-1`.

[01:36] Now, to show you how these skip links are working, inside of the main section, I am going to add a couple of headings and things. I'll say home page for the H1, and it's inside of the main, so maybe our header would have some other navigation inside of it or something that's more supporting of the rest of the page.

[01:56] Then, inside of an H2, we could put an anchor. I'm just going to give it an empty H ref for temporary placement. Then I could say article title, it could be, this link could be a link to anything, just to show you what it's like to focus on something when it has another item inside of it.

[02:14] If we go over to our browser, we can see that we've got three skip links that are shown by default, and we've got the home page, H1, inside of the main section and a link. **If I tab onto these skip links, and I go to the skipped content, if I hit Enter on it, you'll see my focus was sent to the main content section, and it shows the blue focus ring by default.**

[02:35] My focus is in the general area of that main section, so if I hit Tab again, it would take me to the first link inside of it.


### Skip Link CSS
[02:43] **But we want to get these skip links to show when you use the keyboard focus, so that when you land on the page, you only see the skip links if you use the keyboard or a screen reader to navigate.** Let's go over to our CSS, and add some CSS to hide these skip links by default.

[02:59] The first thing we need to do to add some style to these is go differentiate the unordered list for our skip links from other unordered lists, and we can do that with the CSS class of skip links.

[03:09] Then, if we go over to our style sheet, I can add this class of skip links and give it things like, we're going to give it no list dial, because we want each individual link to appear more plain. We're going to zero out the margins and padding for this list. Then we'll give it a position of relative to impact the items inside of it.

[03:32] Then we'll target the skip link anchors inside of the list items. We don't need to apply anything directly to the list items, they act as a grouping mechanism for a screen reader to tell them how many items there are. But we're going to apply the visual style to the anchor text.

[03:48] We can start by giving them a `background-color`, so that they don't show through to the text behind. I'm just going to give it a default of white `#fff`.

[03:57] I can then add a `display` of `block` to these anchors, so that I can actually position them. We'll give these a `position` of `absolute`, so that they are pulled out of the page flow. Then we'll give them a `left` value of `-600000px`, so way off to the left of the screen. Then lastly, I'm going to give them a little bit of `padding`, just so that they have a bit of breathing room.

[04:23] To make them visible on `a:focus`, we need to add a focus style. We'll add skip links, we'll target the `A`, but then we'll give it a `focus` style, so that when you tab onto it, we can reset the left value of zero. Then you can see these links as you tab through the page.

[04:37] If we refresh the page now, you can see that that list was pulled out of the page flow, so it's not reserving any space.

[04:44] But if I go `Shift + Tab back` to these, I have these **skip links** that now appear on top of the page, and you could apply your brand guide to those, you can make them look however you want. But **you'll be able to provide this navigation mechanism for keyboard and screen reader users, and they will love it.**

[05:00] If you end up fighting with your design team over this blue focus ring for skip link targets, I'll show you one technique for suppressing it in CSS.

[05:08] If I target the `tabindex` attribute selector with a value of `-1`, and the `:focus` pseudo style, I can then give it a `outline:none`. You should be very careful with outline of none, however, and don't apply it in a CSS reset to all elements or to all links or all buttons.

[05:24] I'm only targeting `tabindex` of `-1` regions here, so that if I go over to my browser now and go back to my skipped content link, if I focus on the section, my focus is there, so if I hit Tab again, I'm on the next item. On a page full of a lot of content, this would be acceptable.

[05:42] But it is arguable that that focus outline for keyboard users is pretty helpful, so I would be careful. But this is one tool that you could have in your toolbox.