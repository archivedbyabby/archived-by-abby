/*
  Archived by Abby template notes:
  - Edit posts in the POSTS array below.
  - To make a post visible in category grids, set visible: true.
  - To hide a post from category grids for now, set visible: false.
  - Use #/post/post-slug links for blog posts.
  - Use #/archive/category-slug links for collection pages.
  - Replace placeholder image paths with your real 1000x1500 images when ready.
*/

const AMAZON_LINK = "AMAZON_STOREFRONT_LINK_HERE";
const DEFAULT_COLLECTION_LIMIT = 3;

const categories = {
  "full": { title: "The Full Archive", subhead: "Everything I have ever posted to this site." },
  "home-living": { title: "Home & Living Space", subhead: "Essentials with a touch of whimsy, cozy décor, and clever finds for a home that reflects your style." },
  "outdoor-garden": { title: "Outdoor & Garden", subhead: "Ideas and tips to make your patio, garden, and outdoor spaces feel like an oasis." },
  "gift-guides": { title: "Gift Guides", subhead: "Thoughtful, fun, and sometimes wacky gift ideas for any and all occasions." },
  "lifestyle": { title: "Lifestyle", subhead: "Everyday finds, ideas, and little things worth saving." }
};

const POSTS = [
  {
    slug: "pool-bag-essentials",
    title: "What to Pack In Your Pool Bag: 25 Essentials",
    subhead: "Everything you need and more to enjoy your fun in the sun.",
    date: "March 16, 2026",
    category: "outdoor-garden",
    image: "", // Example: assets/pool-bag.jpg
    visible: true,
    body: [
      "This is placeholder article copy. Replace this with your intro paragraph, affiliate disclosure notes, and any context you want readers to have before the list begins.",
      "Use each product block as a template. You can change the button text to Buy On Amazon, Shop This Find, or Check out this inspiration on Pinterest."
    ],
    products: [
      { name: "This Thing", image: "", link: "#", button: "Buy On Amazon", copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Add your product description here." },
      { name: "This Thing", image: "", link: "#", button: "Buy On Amazon", copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Add your product description here." },
      { name: "This Thing", image: "", link: "#", button: "Buy On Amazon", copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Add your product description here." }
    ]
  },
  { slug: "cozy-home-finds", title: "Cozy Home Finds I’m Saving", subhead: "Small pieces that make a room feel collected.", date: "April 2, 2026", category: "home-living", image: "", visible: true, body: ["Placeholder body copy for this blog post."], products: [] },
  { slug: "weird-gift-ideas", title: "Weird Gift Ideas That Are Actually Useful", subhead: "Fun finds for people who are hard to shop for.", date: "April 8, 2026", category: "gift-guides", image: "", visible: true, body: ["Placeholder body copy for this blog post."], products: [] },
  { slug: "slow-weekend-ideas", title: "Slow Weekend Ideas", subhead: "Simple ways to make a weekend feel more intentional.", date: "April 13, 2026", category: "lifestyle", image: "", visible: true, body: ["Placeholder body copy for this blog post."], products: [] },

  // Hidden examples: duplicate one of these, edit it, and switch visible to true when ready.
  { slug: "hidden-home-post", title: "Hidden Home Post Template", subhead: "This one will not appear until visible is true.", date: "April 20, 2026", category: "home-living", image: "", visible: false, body: ["Hidden placeholder body copy."], products: [] },
  { slug: "hidden-garden-post", title: "Hidden Garden Post Template", subhead: "This one will not appear until visible is true.", date: "April 22, 2026", category: "outdoor-garden", image: "", visible: false, body: ["Hidden placeholder body copy."], products: [] }
];

const app = document.querySelector("#app");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuToggle?.addEventListener("click", () => nav.classList.toggle("open"));

function placeholderImg(className = "poster-frame", src = "") {
  return src ? `<div class="${className}"><img src="${src}" alt="" /></div>` : `<div class="${className}"></div>`;
}

function amazonStrip(extraClass = "") {
  return `<section class="amazon-strip ${extraClass}">
    <div><h2>Shop my Amazon Storefront!</h2><p>Full of products I’m loving and highly recommend.</p></div>
    <a class="btn" href="${AMAZON_LINK}">Visit Now</a>
  </section>`;
}

function sideWidgets() {
  return `<aside class="sidebar">
    <section class="side-box">
      <div class="arch-image"></div>
      <h3>Explore the Archives</h3>
      <p>Archived by Abby is a digital collection of products, ideas, and trends I fell in love with at first sight. Browse my blog posts to get inspired!</p>
      <a class="btn btn-filled" href="#/archive/full">View the Full Archive</a>
    </section>
    <section class="categories">
      <h3>Categories</h3>
      <a href="#/archive/full">Full Archive</a>
      <a href="#/archive/home-living">Home & Living Space</a>
      <a href="#/archive/outdoor-garden">Outdoor & Garden</a>
      <a href="#/archive/gift-guides">Gift Guides</a>
      <a href="#/archive/lifestyle">Lifestyle</a>
    </section>
    <section class="side-amazon">
      <h3>Shop my Amazon Storefront!</h3>
      <p>Full of products I’m loving and highly recommend.</p>
      <a class="btn" href="${AMAZON_LINK}">Visit Now</a>
    </section>
  </aside>`;
}

function homePage() {
  const trendingPosts = POSTS.filter(post => post.visible).slice(0, 6);
  app.innerHTML = `
    <section class="section hero">
      <div class="hero-image"></div>
      <div class="hero-copy">
        <h1>Explore the Archives</h1>
        <p class="subhead">Welcome to your new favorite corner of the internet!</p>
        <p>Archived by Abby is a digital collection of products, ideas, and trends I fell in love with at first sight. Here you’ll discover the latest in all things home, lifestyle, and shopping.</p>
        <a class="btn btn-filled" href="#/archive/full">View the Full Archive</a>
      </div>
    </section>
    <section class="collection-band">
      <h2>Popular Collections</h2>
      <div class="collection-cards">
        ${collectionCard("assets/home-icon.svg", "Home & Living Space", categories["home-living"].subhead, "#/archive/home-living")}
        ${collectionCard("assets/flower-icon.svg", "Outdoor & Garden", categories["outdoor-garden"].subhead, "#/archive/outdoor-garden")}
        ${collectionCard("assets/gift-icon.svg", "Gift Guides", categories["gift-guides"].subhead, "#/archive/gift-guides")}
      </div>
    </section>
    <section class="section trending">
      <div class="trending-text"><h2>Trending Posts</h2><p>Our most popular finds, guides, and ideas right now.</p><a class="btn btn-filled" href="#/archive/full">View All Trending Posts</a></div>
      <div class="scroller-wrap">
        <p class="scroller-hint">Scroll sideways to browse posts →</p>
        <div class="scroller">${trendingPosts.map(postCard).join("")}</div>
      </div>
    </section>
    ${amazonStrip()}`;
}

function collectionCard(icon, title, copy, link) {
  return `<article class="collection-card"><div class="collection-card-inner"><div><img class="collection-icon" src="${icon}" alt="" /><h3>${title}</h3><p>${copy}</p></div></div><a class="btn" href="${link}">Browse Posts</a></article>`;
}

function postCard(post) {
  return `<a class="post-poster" href="#/post/${post.slug}">${placeholderImg("poster-frame", post.image)}<div class="poster-caption">${post.title}</div></a>`;
}

function archivePage(slug = "full") {
  const cat = categories[slug] || categories.full;
  const posts = (slug === "full" ? POSTS : POSTS.filter(p => p.category === slug))
    .filter(post => post.visible)
    .slice(0, DEFAULT_COLLECTION_LIMIT);

  app.innerHTML = `
    <section class="section archive-heading"><h1>${cat.title}</h1><p class="subhead">${cat.subhead}</p></section>
    <p class="template-note">Template note: this collection is currently set to show ${DEFAULT_COLLECTION_LIMIT} visible posts. To add more, duplicate a post in the POSTS array inside app.js, set its category, and set visible: true. To hide a post, set visible: false.</p>
    <section class="archive-grid">${posts.length ? posts.map(archiveCard).join("") : emptyArchiveMessage()}</section>
    ${amazonStrip()}`;
}

function archiveCard(post) {
  return `<a class="archive-card" href="#/post/${post.slug}">${placeholderImg("poster-frame", post.image)}<h3>${post.title}</h3></a>`;
}

function emptyArchiveMessage() {
  return `<article class="archive-card"><div class="poster-frame"></div><h3>More posts coming soon.</h3></article>`;
}

function blogPage(slug = "pool-bag-essentials") {
  const post = POSTS.find(p => p.slug === slug) || POSTS[0];
  app.innerHTML = `<div class="two-column">
    <article class="article">
      <h1>${post.title}</h1>
      <p class="subhead">${post.subhead}</p>
      <p class="date">${post.date}</p>
      ${placeholderImg("wide-placeholder", post.image)}
      ${post.body.map(p => `<p>${p}</p>`).join("")}
      ${post.products.map((item, index) => productBlock(item, index + 1)).join("")}
      <section class="about-callout">
        <div class="arch-image"></div>
        <div><h3>Archived by Abby</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Browse more finds, guides, and curated inspiration across the archives.</p><a class="btn" href="#/about">Learn More</a></div>
      </section>
    </article>
    ${sideWidgets()}
  </div>`;
}

function productBlock(item, number) {
  return `<section>
    <div class="product-card">
      ${item.image ? `<img class="product-image" src="${item.image}" alt="${item.name}" />` : `<div class="product-image"></div>`}
      <a class="btn" href="${item.link}">${item.button}</a>
    </div>
    <h3>${number}. ${item.name}</h3>
    <p>${item.copy}</p>
  </section>`;
}

function aboutPage() {
  app.innerHTML = `<div class="two-column">
    <section class="article">
      <h1>About Archived by Abby</h1>
      <p class="subhead">Subtext will go here with a slight description.</p>
      <div class="wide-placeholder"></div>
      <p>Archived by Abby is a digital collection of products, ideas, and trends I fell in love with at first sight. Replace this placeholder text with your about copy when you are ready.</p>
      <p>This template can hold your personal description, brand mission, affiliate note, and any extra information about what readers can expect from the archives.</p>
      <h2>Let’s Get In Touch!</h2>
      <p class="subhead">Subtext will go here with a slight description.</p>
      <form class="form-grid" onsubmit="event.preventDefault(); alert('This contact form is a placeholder until hosting is connected.');">
        <input type="text" name="name" placeholder="Name" required>
        <input type="email" name="email" placeholder="Email" required>
        <textarea name="message" placeholder="Message" required></textarea>
        <button class="btn" type="submit">Send</button>
      </form>
    </section>
    ${sideWidgets()}
  </div>`;
}

function legalPage(type) {
  const isPrivacy = type === "privacy";
  app.innerHTML = `<section class="section legal">
    <h1>${isPrivacy ? "Privacy Policy" : "Disclaimer"}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Replace this text with your final ${isPrivacy ? "privacy policy" : "affiliate disclaimer"} when the site is ready to launch.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. You can include affiliate link disclosures, Amazon Associates language, data collection details, contact information, and cookie notices here.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is placeholder text only and should not be treated as legal advice.</p>
  </section>`;
}

function router() {
  const hash = location.hash || "#/";
  nav.classList.remove("open");
  if (hash.startsWith("#/archive/")) return archivePage(hash.split("/")[2]);
  if (hash.startsWith("#/post/")) return blogPage(hash.split("/")[2]);
  if (hash === "#/about") return aboutPage();
  if (hash === "#/disclaimer") return legalPage("disclaimer");
  if (hash === "#/privacy") return legalPage("privacy");
  return homePage();
}

window.addEventListener("hashchange", router);
router();
