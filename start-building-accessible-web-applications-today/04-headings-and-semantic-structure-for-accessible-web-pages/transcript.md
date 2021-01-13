# 4. Headings and semantic structure for accessible web pages

## Introduction
Webpages are more than simply how they look. By coding with headings, landmarks and semantic HTML, you can expose a rich document outline to users of assistive technologies, as well as search engines.

## Transcript
00:01 Today I'm going to talk to you about semantic structure in your HTML documents and Web applications. A site that does this really well is Wikipedia. If you look at their English landing page, you can see there's a ton of text content. There's headings, paragraphs, links, sidebar, utility navigation, search, images, all kinds of stuff. If you were using a screen reader you'd want to be able to get around easily.

00:26 It's also if your pages are marked up semantically to help screen readers, they'll probably rank well in search engines because you're programmatically declaring the outline for your page, and really providing more information beyond just the way it looks. Today I'm going to show you some tools and techniques that I use for diagnosing semantic structure that will inform you when you're going to author Web pages.

### Firefox - Web Developer Extension
Install -> Information -> View Document Outline

00:50 The first tool I want to show you is in **Firefox, it is the Web developer extension**. Not to be confused with the Web developer built-in tools that Mozilla provides, the Web developer extension is a third-party add-on that you can add. I really like the feature, once you install the extension, then go to information, **view document outline.** We can look at the heading structure for the Wikipedia English landing page, there's one H1, there's a bunch of H2s, and some H3s, and they all go in order.

01:26 If there was a page like, let's go look at another one, like CNN. If we go and look at their heading structure, after this page takes forever to load, so I'm going to go to Web developer, information, view document outline. We can see that CNN for some reason is missing their H1, and it shows up in yellow, and it says missing heading. If they had an H1, it should probably be CNN, that's my guess, because that's the most important piece of information on this page.

02:01 Now their URL will be announced, `cnn.com`, the user does know where they are, but it's a pretty silly heading to miss, the H1. Your rule of thumb for the H1, well, that's two rules. One there's only one per page, two it should be the most important piece of content on the page. So in the case of an article detail, the name of the article would be the H1, and then the logo would probably it could either be a paragraph, or it could be the H2, it's up to you.

### Safari - VoiceOver
02:32 If we get back to Wikipedia, I'm going to show you this page in Safari, which you might grumble, but Safari is a really great browser to use with VoiceOver, the screen reader on a Mac. **It correctly exposes accessibility information.** Well, it does have some bugs, however, compared to something like Firefox which doesn't expose much accessibility information on the Mac platform, Safari and VoiceOver work really well together.

03:00  **Firefox works better on the Windows platform with the NVDA screen reader**, that's a very popular combination as well. To show you the power of semantic structure in VoiceOver, I'm going to turn it on using `Command-F5`.

VoiceOver: 03:14 VoiceOver on Safari. Wikipedia, the free encyclopedia. Window, Wikipedia. HTML content has keyboard focus. You are currently on HTML content, to enter the Web area press control option shift down arrow.

03:24 Now some VoiceOver tips, I'm going to hold down `control option command` and the `H` key to cycle through the headings on this page.

VoiceOver: 03:33 Heading level two, from today's featured article. Heading level two, that you know. You are currently on heading level two. Heading level two, in the news. You are currently on heading level two, inside of a cell.

03:43 **That's pretty cool, using `control option command and the H key`, I can cycle through all the headings on a page.** 

Now if I wanted to get more of an overview, I could open the **VoiceOver rotor**, which is a pretty useful tool, it's on the OS 10 platform and iOS. 
So I'm going to hold the VoiceOver keys which are `control`and `option`, and then `U`.

VoiceOver: 04:01 Headings menu.

04:03 **Now I've got a list of all of the headings on a page, and I could go through them to really jump around without having to hit tab a million times using arrow keys.**

VoiceOver: 04:10 Heading level two, from today's featured article. Heading level two, that you know. Heading level two, in the news, heading level two, on this day. Heading level two today's featured picture, heading level two, other areas of Wikipedia, heading level two, other areas of Wikipedia, heading level two, other areas of Wikipedia, you are currently on heading level two.

04:23 It's a really handy way to jump around a page. Now I also want to show you something else in the VoiceOver rotor, which is the **landmarks**. I'm going to hold the `control` `options` and `U` keys.

VoiceOver: 04:32 Headings menu, links menu.

04:34 I can see all the links.

VoiceOver: 04:35 Windows soft menu, images menu.

04:37 Images, all of the alt text for those images which you could probably see why it's important to add alt text.

VoiceOver: 04:43 Landmarks menu.

04:45 Now we're at this important thing I wanted to show you, which is the **landmarks**. There's things like main, personal tools navigation.

VoiceOver: 04:52 Main. Personal tools navigation.

04:53 Namespaces navigation.

VoiceOver: 04:54 Namespaces navigation, views navigation, search.

04:58 Search, let's go to that one.

VoiceOver: 05:01 Search, search text field, search Wikipedia, control alt F, access unavailable, VoiceOver off.

05:04 Each one of those regions was marked up as such so it would provide this hook for a screen reader to be able to jump around. **Most modern screen readers have this ability to jump by headings and landmarks.** They don't all have the rotor like VoiceOver, but the users of those screen readers are very familiar with how to jump around in this fashion. It's super helpful to provide this information.

05:26 Now I'm going to debug some of this stuff and show you how they did it by going to the element inspector and say we want to go look at the search field. I'm going to make my developer tools a little larger so you can see those, and we can go and see the input, we can look at the accessibility inspector, we can see it has a role of search box. If we go up the DOM tree a little bit, we can see this `role` of `search`. Now that `role` is what is exposing that search into the rotor in VoiceOver.

06:01 There's others, like the `role` of `navigation`, and we can see the `role` along with the `arialabelledby`. That will expose that navigation as having a specific name. Now there were multiple roles of navigation, so if we didn't have that association with the `arialabelledby` pointing to a heading, they would all just say navigation, navigation, navigation. If they're all for different purposes, you can start to see why this arialabelledby technique is so useful.

06:30 Wikipedia does a really great job of exposing all of the stuff, like their `role` of `main`, the navigation, the header has a `role` of `banner` to indicate that it's the top header of the Web page. **So using aria roles for landmarks, and `arialabelledby`, and heading tags, you can create a semantic structure that will really help out screen reader users, and harness some of the magic that Wikipedia has going on on their semantic Web pages.**