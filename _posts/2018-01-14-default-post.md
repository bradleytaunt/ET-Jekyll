---
layout: post
excerpt_separator: <!--more-->
title: ET-Jekyll theme
description: A visual breakdown of how to use the ET jekyll theme
permalink: et-jekyll-theme/
date: 2018-01-14
---

ET-Jekyll theme is based off of <a href="http://www.daveliepmann.com">Dave Liepmann's</a> awesome <a href="https://edwardtufte.github.io/tufte-css/">Tufte CSS</a> - which takes its style and inspiration from the wonderful book and handout designs of <a href="https://www.edwardtufte.com/tufte/">Edward Tufte</a>.

The differences are subtle when comparing my variation to Tufte CSS, but these changes were made out of personal preference and are not in any way "better". If you prefer the <a href="https://edwardtufte.github.io/tufte-css/">original CSS styling</a> - please use it!

## Setup

To use ET-Jekyll, simply <a href="https://github.com/bradleytaunt/ET-Jekyll">download the files off Github</a> and run the build as you would any other Jekyll site:

<pre class="code">
jekyll serve
</pre>

You'll want to make edits to the <code>_config.yml</code> and <code>Gemfile</code> for core setting changes. For navigation, heading, footer or post layout changes - edit the corresponding HTML files in the includes folder.

That's it for setup!

## Structure &amp; Elements

ET-Jekyll makes everything extremely easy for you to start writing content immediately. Simply write your posts in <code>markdown</code> and the theme will handle the rest. 

For best results, try following the writing design standards below:

### Headings

Blog post titles automatically use the <code>h1</code> heading followed by a <code>subtitle</code> classed paragraph tag for the date. Proceeding section headings use the <code>h2</code> tag and lower level inner-headings use the <code>h3</code> tag. As stated in the original Tufte CSS documentation:

<blockquote>
    <p>More specific headings are not supported</p>
    <footer><a href="https://edwardtufte.github.io/tufte-css/">Tufte CSS - Sections &amp; Headings</a></footer>
</blockquote>

<span class="caps">If the mood strikes</span>, you can always use the <code>caps</code> class to make the first set of words small-caps for new section headings. This should not be done in conjunction with the regular <code>h1</code>, <code>h2</code> heading structure. Stick to one or the other for reader consistency.

### Text &amp; Links

Write your content using regular <code>markdown</code> structure for paragraphs, unordered / ordered lists, blockquotes, links, and code snippets. ET-Jekyll takes care of everything for you:

**Unordered List**
- List item one
- List item two
- List item three

**Ordered List**
1. List item one
2. List item two
3. List item three

**Blockquotes**

<blockquote>
    The minimum we should hope for with any display technology is that it should do no harm.
    <footer><a href="https://www.edwardtufte.com/tufte/">Edward Tufte</a></footer>
</blockquote>

<blockquote>
    The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.
    <footer><a href="http://www.paul-rand.com">Paul Rand</a></footer>
</blockquote>

**Links**

Text links are set to the same color as the rest of the base content, as not to distract from the flow of reading. The <code>text-decoration</code> is set to <code>underline</code> which allows the interactive element to stand out without drawing the reader's attention away from the content itself.

**Code Snippets**

<pre class="code">
library(lattice)
x <- mtcars$wt
y <- mtcars$mpg
xyplot(y ~ x, xlab="Car weight (lb/1000)", ylab="Miles per gallon of fuel",
par.settings = list(axis.line = list(col="transparent")),
panel = function(x, y,...) { 
panel.xyplot(x, y, col=1, pch=16)
panel.rug(x, y, col=1, x.units = rep("snpc", 2), y.units = rep("snpc", 2), ...)})
</pre>

**Math Equations**

ET-Jekyll uses MathJax for placing mathematical equations inline within your content.

When \(a \ne 0\), there are two solutions to \(ax^2 + bx + c = 0\) and they are

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

**Tables**

<p class="sans">End of year device distribution by percentage</p>
<figure>
<table>
    <thead>
        <tr>
            <th>Devices</th>
            <th>2016</th>
            <th>2017</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Medium phones</th>
            <td>44</td>
            <td>55</td>
        </tr>
        <tr>
            <th>Phablets</th>
            <td>41</td>
            <td>55</td>
        </tr>
        <tr>
            <th>Full-size tablets</th>
            <td>8</td>
            <td>6</td>
        </tr>
        <tr>
            <th>Small tablets</th>
            <td>6</td>
            <td>4</td>
        </tr>
        <tr>
            <th>Small phones</th>
            <td>1</td>
            <td>0</td>
        </tr>
    </tbody>
</table>
<span class="marginnote">Source: <a href="http://flurrymobile.tumblr.com/tagged/insights/">Flurry Insights</a>, 2016-2017. This is a sidenote. Feel free to add as much content as needed in these elements in order to better explain their attached figure item.</span>
</figure>

### Sidenotes: Footnotes and Marginal Notes

On larger viewports, sidenotes<span class="sidenote-number"></span> and marginal notes are placed into the far right column so the reader avoids eye-jumping around the page to find the corresponding content. On small viewports these notes are placed under it's parent content.
<span class="sidenote">This is an short example of a generated sidenote.</span>

Try resizing your viewport to see the design change in action.

**Why no toggle?**

The original Tufte CSS hides sidenote and marginal note content on smaller viewports until the user toggles them into view. Although this approach is pretty and keeps the overall design clean, it's best not to sacrifice user accessibility over a slightly cleaner presentation.

### Figures

You're welcome to simply use an <code>img</code> element when pasting in static content to your articles, but a <code>figure</code> element with included marginal notes is preferred. 

Also remember to add the <code>loading="lazy"</code> attribute to all image elements to help improve initial loading performance.

<figure>
    <img loading="lazy" src="{{ site.baseurl }}/images/flat-design-toggles_qfre51_c_scale,w_1400.jpg" alt="Flat UI Toggles">
    <span class="marginnote">User interface toggle comparison between flat and skeuomorphic design by <a href="https://bradleytaunt.com">Bradley Taunt</a>.</span>
</figure>

## Performance

### Using font-display

<p><strike>ET-Jekyll theme uses <a href="https://github.com/bramstein/fontfaceobserver">Bram Stein’s FontFaceObserver script</a> which adds a <code>fonts-loaded</code> class to the document <code>html</code> only once the custom typeface (<i>et-book</i> in this instance) is loaded. Doing so prevents <a href="https://css-tricks.com/fout-foit-foft/">FOIT</a> and ugly content pop-in on slower connections.</strike></p>

ET-Jekyll now uses the `font-display` property to swap out the custom typeface. Less JS and simplicity is always a good thing.

<pre class="code">
// Keeping things simple
font-display: swap;
</pre>

### CSS File

All styling for this theme is loaded inside the `style.css` file (compressed by default). This ensures the main structure, layout and core elements of ET-Jekyll load instantly and avoid even further "pop-in". The `et-book` typeface is pulled in from the `/fonts` directory which helps cache and avoid FOUT.

Any design changes should be made to the <code>style.scss</code> file inside the root directory.

## Final Thoughts

This theme is an open source side project by <a href="https://bradleytaunt.com">Bradley Taunt</a> - made with passion and care. Edit, improve, customize or butcher this theme as much as you'd like. If you spot an issue or find a better solution for any user pain-spots, please don't hesitate to <a href="https://github.com/bradleytaunt/ET-Jekyll/pulls">open a PR with your changes</a>.

Enjoy ET-Jekyll!
