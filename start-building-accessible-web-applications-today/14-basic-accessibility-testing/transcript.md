# 14. Basic Accessibility Testing

## Introduction
Learn the basics of web accessibility testing using the keyboard, [Web Developer Toolbar](https://addons.mozilla.org/en-US/firefox/addon/web-developer/), [aXe Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/), and [Lea Verou's Contrast Ratio tool](https://contrast-ratio.com/). We'll look at how to get an overview of a webpage's accessibility, with special attention paid to solving color contrast issues.

For more on accessibility auditing, check out this [article](https://marcysutton.com/how-i-audit-a-website-for-accessibility/).

## Transcript

### Keyboard
[00:00] Today I'll show you **how to audit a Web page for accessibility**, using a few different tools, starting with the keyboard. We're looking at an older copy of the "New York Times" technology page, which we'll use on a subsequent lesson on accessibility unit test.

### 1) Tab through everything
[00:13] The first thing I would do upon on arriving on a Web page to determine its accessibility, would be to start all the way at the top and then tab through everything to see if things that should be interactive are in fact interactive, like links, and buttons, and so on.

[00:27] I could see a focus outline in Firefox that was pretty faint, but the issue in the header is there's a menu and a search button that if I go and inspect in the developer tools, and the elements inspector, I can see that those buttons were actually made with DIVs, so there's issue number one.

[00:46] The New York Times has actually fixed this on their live site, but to show you something that we might encounter, very common, and this is how it was even a few months ago, that's why you want to test with your keyboard to make sure that something is actually accessible.

### 2) Web Developer Extension through Firefox - Web Document Outline
[01:01] The next thing that I would do would be to use the Web developer extension, which you can add to Firefox. I've already got it installed, so I'll show you what it can do. I go on up to **Tools**, and then **Web Developer Extension**, I can go to **Information**, and the **View Document Outline**.

[01:18] It will show you all of the headings for this page, I really like this tool, because it will show you when there's missing heading levels, it'll show you if there's a heading tag but it's missing content, and **it will really show you the hierarchy of content on a Web page.**

[01:34] For something like a news site, headings are very important for a screen reader user to navigate, because you can navigate it by an outline which would make it a lot easier than going through every single piece of content. You can get an idea of the overall page structure, so headings are super important.

[01:50] I like the **Web developer document outline** because it helps visualize this to you as a developer. It shouldn't actually skip from H1 to H6, there should be heading levels in between to establish a clear hierarchy, but they do quite a bit of jumping around from H1 to H6, and it's probably for style purposes.

[02:08] Instead of doing that, you should **use semantic headings in order, and use CSS to style them.**

### 3) Axe Developer Tools - Firefox & Chrome, develoepd by DQ Labs
The next tool that I would use is the **aXe Developer Tools**, which is available for Firefox and Chrome, it's developed...I will do a bit of disclaimer that I work on the aXe Developer Tools at Deque Labs, so you can see a bit of what I'm working on.

[02:33] I'm going to open the developer tools with `command-option-I` on a Mac, it's `control-shift-I` on Windows. If I go to the **accessibility tab**, it's called the **aXe tab in Chrome**, if you happen to use that version of the extension. If I go to **analyze**, I can analyze any Web page that is running on localhost, or on a remote URL, it does not run on files at this time.

[02:56] There's a number of issues that came back including:
- elements requiring color contrast
- ID attributes that they should be unique
- headings should not be empty
- links should have discernible text
- list, and script, and template elements requiring child elements that follow the HTML spec.

[03:17] For each of these items, you can see there's a number of violations that we can navigate through. They have tags for **WCAG2AA** or **Section 508**, or whatever standard you're testing against. **It will float up the actual CAG violation, which for color contrast is 1.4.3.**

[03:36] It will show you the HTML in question, and then a bit more information. For color contrast, it shows you the `ratio` of `3.76` for whatever element this is. It tells you the foreground color, and the background color, font size, and font weight.

[03:50] All of those things factor into the ratio. It we want to see what element that is, we can hit inspect, and over in the element inspector I can see that it is a link, an anchor link, and it's got white on blue background color.

[04:06] If I do scroll into view from the elements inspector, I can see that it is a subscribe now button up in the New York Times masthead. I can see this background color is blue and the foreground color is white.

### 4) Leaverou's Contrast Ratio
[04:18] With this hex color, I can go over to a tool like **Lea Verou's contrast ratio**, and I can paste in this hex color to see the `3.8` does not...and her ratio is actually rounding up. If we go back to aXe, we can see it's actually `3.76`, so we can get one more decimal point from the aXe extension.

[04:39] If we were going to change that, we can go over to this element, go `inspect `it, and then we can just choose a bit darker of a blue. Using this color picker, I can pick a color with a darker shade but a similar hue, and then I can just go test it again.

[04:58] If I paste that color into the contrast ratio tool, I can see that it passes with `7.4`. If I run the **aXe extension again**, we had 10 violations, we can run `analyze` again, and now that I've just changed that in the developer tools, we can see we have 9 violations.

[05:15] That color contrast issue is now passing for one of the buttons. You'd want to go and add that background color to your style guide, and to your global style sheet, so that every instance of that button would benefit from the same style.

[05:29] That's how you could test for accessibility using the keyboard, and the Web developer toolbar, and the aXe extension. In our next lesson, we'll look at how to automate some of these tests we can ensure accessibility is built in to our developer workflow.