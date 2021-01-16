# 6. What is the Accessibility Tree?

## Introduction
Coding for accessibility? You should get familiar with the _**accessibility tree**, a structure produced by platform Accessibility APIs running parallel to the DOM, which exposes accessibility information to assistive technologies such as screen readers._ There are multiple tools for visualizing this tree; in this lesson we'll look at **Chrome** and **Microsoft Edge**. For more on Accessibility APIs, refer to [this](https://www.smashingmagazine.com/2015/03/web-accessibility-with-accessibility-api/) amazing article by Leonie Watson. For a how-to on setting up the Chrome Accessibility Inspector, visit bit.ly/chrome-a11y.

## Transcript
00:01 Hi. Today, I'm going to show you how to look at _**the accessibility tree,** which is information exposed by a web browser through accessibility APIs to be utilized by screen readers and other assistive technologies._
00:13 It strips out information that really isn't useful to a screen reader like scripts and meta tags in the head of a document. _It really just leaves the information that's useful for accessibility._

00:24 There's a number of ways that you can look at this information. The first method I'm going to show you is if we go into Chrome. I have an accessibility experiment enabled that gives me an accessibility tab in my toolbar, not to be confused with the accessibility properties, which is an extension that runs an audit.

### Chrome Accessibility Pane 
(Chrome a11y dev tools)[https://developers.google.com/web/updates/2018/01/devtools#a11y]
- Use the Accessibility pane on the Elements panel to investigate the accessibility properties of the currently-selected element.
- Figure 4. The Accessibility pane shows the ARIA attributes and computed properties for the element that's currently selected in the DOM Tree on the - Elements panel, as well as its position in the accessibility tree
- Check out Rob Dodson's A11ycast on labeling below to see the Accessibility pane in action.

00:44 When you go to this accessibility tab in the elements console, you can see that it exposes some accessibility information. In Chrome, the `header` element exposes the `role` of `banner`, because it is the global header. I think Chrome might be smart about looking at nested headers, but I'd have to go and check. This tool would help me go and find that.

01:06 I can go through each of these elements. I can see that sections implicitly have a `role` of `region`. This is going node by node. I can go and look at each element and look at its accessibility information. If I'm looking at a button, see if it's labeled or a form element, if that's labeled.

01:22 This information is part of a tree that I want to show you the rest of it. If you go to `chrome://accessibility`, you get every tab and its accessibility information as something you can go and look at. Obviously, these are turned off, because it would be a huge performance problem to be building and showing this tree all the time.

01:42 The tree is always there, but to actually show it to you in this text format, they turn it off. I have a bunch of tabs open elsewhere in my browser, but I'm looking for the Egghead version. If I click accessibility off, it will turn accessibility on, and then I can show the accessibility tree.

02:02 When I expand this thing, this is the not-pretty version. _This is the raw dump of the accessibility tree and all of its information._ There's things like AX Link, and it has a role description of link, has a title of browse. **Every element on your page has accessibility information, whether or not you've thought about it before.**

### Microsoft Edge Windows 10
02:22 I want to show you another tool that's new, and it's pretty useful. It's better designed than the Chrome dump. I'm using a **Microsoft Edge Windows 10** preview that I've downloaded from modern.ie. I'm using the virtual box version.

02:37 If I open a web page in Edge and I go to inspect an element, in the **DOM explorer**, I get this little icon that says **"accessibility tree."** Admittedly, I had to go looking for it, but I knew this feature was there. **What it does is it will show you all of the same information as a tree.** We can see we've got that global header with a banner role. It tells us that inside of it, it's got a heading.

03:02 I'm looking at my own website, `marcysutton.com`, which I've actually thought about some of this stuff before. However, _having it presented to you in this tree format is so useful, because you can go and look at what you've added or what you've forgotten._

03:17 Each section of the page should be within a landmark, such as a header with a role of banner, or a main region, or a footer with content info. Each one of those needs a heading to describe what it's for. Then, the content inside of that needs headings.

03:34 For example, if I scroll down on my actual page, you can see I've got a YouTube video here from my last conference talk. That is an iframe that I'm pulling in from YouTube, but I manually went onto the iframe and added a `title` attribute of `accessibility and performance on YouTube`.

03:50 When that iframe gets rendered, it automatically gets titled with that `title` attribute. That's a nice pattern for iframes when you're pulling in videos like that. When I looked at it in the Edge accessibility tree inspector, I could see that the application, which that role is coming from YouTube, but it's being labeled with this title that I added.

04:12 Within there, there's other headings, and there's other content. There's a complementary region for the sidebar. Just like inspecting styles, this method gives us a lot more information about accessibility, so you can actually see the tree that a screen reader would navigate by.