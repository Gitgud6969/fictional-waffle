---
layout: ../layout/BlogPostLayout.astro
url: project-showcase-astro-tailwind
title: Astro.js and Tailwind
description: Project Showcase - Rebuilding My Portfolio with Astro.js and Tailwind
---

## Introduction: Setting the Stage

After spending some time exploring frontend technologies, I recently decided to finally build my portfolio. But as a challenge using something different than what i use professionally, Astro.js and Tailwind were my tools of choice. Here's a detailed rundown of the hows and whys.

### The Project: A Portfolio and Blog

I needed a platform to both showcase my work and share my thoughts—a portfolio with integrated blogging functionality. Given that I'm always keen to try out new things, Astro.js was my pick for this project, particularly because of its framework-agnostic capabilities.

### The Decision: Why Astro.js?

Astro 3.0 was a game-changer. Not only does it handle Markdown effortlessly—perfect for my blog—but it also supports some very slick view transitions. It was an offer too tempting to pass up.

```
transition:name={`blog ${article.frontmatter.title} title`}
```

### Performance Showdown: Astro.js vs Next.js

Originally, I leaned towards Next.js due to its robust performance optimization features. However, Astro now provides stable image optimization, effectively closing the performance gap between the two.

### Developer Experience: Smooth Sailing

Starting with Astro was a piece of cake. Although I began with React components, Astro's well-written docs and intuitive setup allowed me to transition to native Astro components seamlessly. Similiar syntax and functionality as nextjs made it very easy to adopt.

```
export async function getStaticPaths() {
  const posts = await Astro.glob("/src/content/blog/*.md");
  return posts.map((post) => ({
    params: { id: post.frontmatter.url },
    props: {
      post,
    },
  }));
}
```

### Integration: Tailwind’s Convenience

Marrying Astro with Tailwind was straightforward. Astro offers built-in support, making the entire setup process efficient. A quick adjustment to support Markdown styling, and I was good to go.

```
npx astro add tailwind
```

### Efficiency: More With Less

One of the final delights of this project was realizing the efficiency gains. I achieved identical functionality to what I would've with Next.js, but with less code.

### Conclusion: Take the Leap

If you’re considering a new frontend project, Astro.js deserves your attention. It’s got the developer experience, the performance, and the flexibility to make it a compelling choice.

## What’s Next for Me?

This is just the beginning. With Astro’s framework-agnostic features, I’m excited to venture further, possibly integrating some svelte, vue or solidjs components into this ongoing project. Aswell as learning about all of the functionality Astro might offer that im not aware of yet.
Stay tuned, because this journey is about to get a lot more exciting.



