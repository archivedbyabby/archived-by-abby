/*
  Archived by Abby — easier blog editor version

  HOW TO EDIT POSTS:
  1. Add/edit posts inside POSTS below.
  2. For article content, use content blocks instead of raw HTML.
  3. You can add paragraphs, headings, buttons, images, notes, lists, and product cards.
  4. Keep commas between blocks. Duplicate a block, change the text/image/link, and save.
*/

const AMAZON_LINK = "AMAZON_STOREFRONT_LINK_HERE";
const DEFAULT_COLLECTION_LIMIT = 3;
const SHOW_AMAZON = false;

const categories = {
  "full": { title: "The Full Archive", subhead: "Everything I have ever posted to this site." },
  "home-living": { title: "Home & Living Space", subhead: "Home essentials that inspire and help bring your vision to life." },
  "outdoor-garden": { title: "Outdoor & Garden", subhead: "Ideas and tips to make your patio, garden, and outdoor spaces feel like an oasis." },
  "gift-guides": { title: "Gift Guides", subhead: "Thoughtful, fun, and unique gift ideas for any and all occasions." },
  "lifestyle": { title: "Lifestyle", subhead: "Everyday finds, ideas, and little things worth saving." }
};

const POSTS = [
  {
    slug: "pool-bag-essentials",
    title: "What to Pack In Your Pool Bag: 25 Essentials",
    subhead: "Everything you need and more to enjoy your fun in the sun.",
    date: "March 16, 2026",
    category: "outdoor-garden",
    image: "assets/blog-post.jpg", // Card/grid image. Best size: 1000x1500px.
    articleImage: "assets/blog-article-image.jpg", // Article title image. Best size: about 550x300px.
    visible: true,

    /*
      EASY ARTICLE EDITOR:
      Duplicate any block below to add more text, buttons, products, or images.
      You DO NOT need to paste HTML into this section.
    */
    content: [
      {
        type: "paragraph",
        text: "This is placeholder article copy. Replace this with your intro paragraph, affiliate disclosure notes, and any context you want readers to have before the list begins."
      },
      {
        type: "paragraph",
        text: "Use each product block as a template. You can change the button text to Buy On Amazon, Shop This Find, or Check out this inspiration on Pinterest."
      },
      {
        type: "button",
        text: "Shop My Pool Bag Picks",
        link: "https://www.amazon.com/"
      },
      {
        type: "heading",
        text: "My Favorite Pool Bag Essentials"
      },
      {
        type: "product",
        name: "This Thing",
        image: "assets/amazon-product.jpg",
        link: "https://www.amazon.com/",
        button: "Buy On Amazon",
        copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Add your product description here."
      },
      {
        type: "product",
        name: "This Thing",
        image: "",
        link: "#",
        button: "Buy On Amazon",
        copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Add your product description here."
      },
      {
        type: "product",
        name: "This Thing",
        image: "",
        link: "#",
        button: "Buy On Amazon",
        copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Add your product description here."
      },
      {
        type: "note",
        text: "Tip: You can use this note block for a quick reminder, affiliate disclaimer, or personal comment inside a post."
      }
      
    ]
  },
  {
    slug: "other-post",
    title: "Check Out These Awesome Finds",
    subhead: "Everything you need and more to enjoy your fun in the sun.",
    date: "March 16, 2026",
    category: "home-living",
    image: "assets/blog-post.jpg",
    articleImage: "assets/blog-article-image.jpg",
    visible: false,
    content: [
      { type: "paragraph", text: "This is a second post template. Replace this intro with your own body copy." },
      { type: "heading", text: "Favorite Finds" },
      { type: "product", name: "This Thing", image: "assets/amazon-product.jpg", link: "https://www.amazon.com/", button: "Buy On Amazon", copy: "Add your product description here." },
      { type: "button", text: "Visit My Amazon Storefront", link: "https://www.amazon.com/" }
    ]
  },

  // Hidden examples: duplicate one of these, edit it, and switch visible to true when ready.
  {
    slug: "hidden-home-post",
    title: "Hidden Home Post Template",
    subhead: "This one will not appear until visible is true.",
    date: "April 20, 2026",
    category: "home-living",
    image: "assets/blog-post.jpg",
    articleImage: "",
    visible: false,
    content: [
      { type: "paragraph", text: "Hidden placeholder body copy." }
    ]
  }
];

const app = document.querySelector("#app");

function isPostVisible(post) {
  // Posts are visible by default. Set visible: false to hide/draft a post.
  // This also treats visible: "false" as hidden in case it is typed as text by mistake.
  return post?.visible !== false && post?.visible !== "false";
}

function getVisiblePosts() {
  return POSTS.filter(isPostVisible);
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuToggle?.addEventListener("click", () => nav.classList.toggle("open"));

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderImage(className = "poster-frame", src = "", alt = "") {
  if (!src) return "";
  return `<figure class="${className}"><img src="${src}" alt="${escapeHTML(alt)}" loading="lazy" /></figure>`;
}

function amazonStrip(extraClass = "") {
  if (!SHOW_AMAZON) return ""; // 👈 hides it completely

  return `<section class="amazon-strip ${extraClass}">
    <div>
      <h2>Shop my Amazon Storefront!</h2>
      <p>Full of products I’m loving and highly recommend.</p>
    </div>
    <a class="btn" href="${AMAZON_LINK}">Visit Now</a>
  </section>`;
}

function sideWidgets() {
  return `<aside class="sidebar">
    <section class="side-box">
      <div class="arch-image">
        <img src="assets/hero-image.jpg" alt="Hero image" />
      </div>
      <h3>Explore the Archives</h3>
      <p>Click below to browse my entire archive of posts!</p>
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

    ${SHOW_AMAZON ? `
      <section class="side-amazon">
        <h3>Shop my Amazon Storefront!</h3>
        <p>Full of products I’m loving and highly recommend.</p>
        <a class="btn" href="${AMAZON_LINK}">Visit Now</a>
      </section>
    ` : ""}

  </aside>`;
}

function homePage() {
  const trendingPosts = getVisiblePosts().slice(0, 6);
  app.innerHTML = `
    <section class="section hero">
      <div class="hero-image"><img src="assets/hero-image.jpg" alt="Hero image" /></div>
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
  return `<a class="post-poster" href="#/post/${post.slug}">${renderImage("poster-frame", post.image, post.title)}<div class="poster-caption">${post.title}</div></a>`;
}

function archivePage(slug = "full") {
  const cat = categories[slug] || categories.full;
  const posts = (slug === "full" ? getVisiblePosts() : getVisiblePosts().filter(p => p.category === slug))
    .slice(0, DEFAULT_COLLECTION_LIMIT);

  app.innerHTML = `
    <section class="section archive-heading"><h1>${cat.title}</h1><p class="subhead">${cat.subhead}</p></section>
    <section class="archive-grid">${posts.length ? posts.map(archiveCard).join("") : emptyArchiveMessage()}</section>
    ${amazonStrip()}`;
}

function archiveCard(post) {
  return `<a class="archive-card" href="#/post/${post.slug}">${renderImage("poster-frame", post.image, post.title)}<h3>${post.title}</h3></a>`;
}

function emptyArchiveMessage() {
  return `<article class="archive-card empty-card"><h3>More posts coming soon.</h3></article>`;
}

function renderArticleContent(post) {
  const content = post.content || [];

  // Older posts used body/products. This keeps them working if you still have any.
  if (!content.length) {
    const bodyBlocks = (post.body || []).map(text => ({ type: "paragraph", text }));
    const productBlocks = (post.products || []).map(item => ({ type: "product", ...item }));
    return [...bodyBlocks, ...productBlocks].map(renderContentBlock).join("");
  }

  return content.map(renderContentBlock).join("");
}

function renderContentBlock(block) {
  const type = block.type || "paragraph";

  if (type === "paragraph" || type === "p") {
    return `<p>${escapeHTML(block.text)}</p>`;
  }

  if (type === "heading" || type === "h2") {
    return `<h2 class="article-section-heading">${escapeHTML(block.text)}</h2>`;
  }

  if (type === "smallHeading" || type === "h3") {
    return `<h3 class="article-small-heading">${escapeHTML(block.text)}</h3>`;
  }

  if (type === "button") {
    return `<div class="article-button-row"><a class="btn btn-filled" href="${block.link || "#"}" target="_blank" rel="sponsored noopener">${escapeHTML(block.text || "Visit Link")}</a></div>`;
  }

  if (type === "image") {
    return renderImage("article-inline-image", block.src || block.image, block.alt || "Article image");
  }

  if (type === "note" || type === "callout") {
    return `<div class="article-note"><p>${escapeHTML(block.text)}</p></div>`;
  }

  if (type === "list") {
    const items = block.items || [];
    return `<ul class="article-list">${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
  }

  if (type === "divider") {
    return `<hr class="article-divider" />`;
  }

  if (type === "product") {
    return productBlock(block);
  }

  return "";
}

function blogPage(slug = "pool-bag-essentials") {
  const post = getVisiblePosts().find(p => p.slug === slug) || getVisiblePosts()[0];

  if (!post) {
    app.innerHTML = `<section class="section legal"><h1>Post unavailable</h1><p>This post is hidden or has not been published yet.</p><a class="btn btn-filled" href="#/archive/full">Return to the Full Archive</a></section>`;
    return;
  }

  app.innerHTML = `<div class="two-column">
    <article class="article">
      <h1>${post.title}</h1>
      <p class="subhead">${post.subhead}</p>
      <p class="date">${post.date}</p>
      ${renderImage("article-hero-image", post.articleImage || post.heroImage || post.image, post.title)}
      ${renderArticleContent(post)}
      <section class="about-callout">
        <div class="arch-image"><img src="assets/about-image.png" alt="About Abby" /></div>
        <div><h3 style="font-size: 2.5rem;">Archived by Abby</h3><p>My name is Abby, and thank you for visiting my page! Click below to learn more about me and my digital archive.</p><a class="btn" href="#/about">Learn More</a></div>
      </section>
    </article>
    ${sideWidgets()}
  </div>`;
}

function productBlock(item) {
  return `<section class="article-product-block">
    <div class="product-card">
      ${item.image ? `<img class="product-image" src="${item.image}" alt="${escapeHTML(item.name)}" loading="lazy" />` : ""}
      <a class="btn" href="${item.link || "#"}" target="_blank" rel="sponsored noopener">${escapeHTML(item.button || "Visit Link")}</a>
    </div>
    <h3>${escapeHTML(item.name || "Product Name")}</h3>
    <p>${escapeHTML(item.copy || "Add your product description here.")}</p>
  </section>`;
}

function aboutPage() {
  app.innerHTML = `<div class="two-column">
    <section class="article">
      <h1>About Archived by Abby</h1>
      <p class="subhead">Welcome to my digital archive!</p>
      <p>My name is Abby, and welcome to my corner of the internet! I'm a blogger from the Midwest who enjoys making life more beautiful, whether it be through elevating my home space, indulging in a little retail therapy, taking on a DIY project or craft, or giving a loved one the perfect gift.</p>
      <p>Here you will find a digital collection of products, ideas, and trends I fell in love with at first sight! Feel free to get in touch with me below with any inquries, or if you'd just like to say hi!</p>
      <h2 style="font-size: 2.2rem; margin-top: 5vw;">Let’s Get In Touch!</h2>
      <p class="subhead">Send me a message below.</p>
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
    <p>Archived by Abby is a personal blog created for informational, inspirational, and entertainment purposes only. All content reflects personal opinions, experiences, and recommendations.</p>
    <p>Some links on this website are affiliate links. This means that I may earn a small commission, at no additional cost to you, if you click through and make a purchase. As an Amazon Associate and participant in other affiliate programs, I earn from qualifying purchases. These commissions help support the maintenance and growth of this site.</p>
    <p>I make every effort to provide accurate and up-to-date information; however, I make no guarantees regarding the completeness, reliability, or accuracy of any content. Any reliance you place on information found on this website is strictly at your own risk.</p>
    <p>Archived by Abby is not responsible for any losses, damages, or issues that may arise from the use of products, services, or information found on this site or through external links. All products and services are purchased and used at your own discretion.</p>
    <p>This website may contain links to third-party websites. I have no control over the content, policies, or practices of these external sites and cannot be held responsible for their actions or content.</p>
    <p>All content, including text, graphics, and design elements, is the property of Archived by Abby unless otherwise stated and may not be reproduced, distributed, or used without prior written permission.</p>
    <p>By using this website, you agree to this disclaimer and its terms.</p>
    <p>If you have any questions, please contact me through the contact form on this site.</p>
  </section>`;
}

function router() {
  const hash = location.hash || "#/";
  nav.classList.remove("open");
  if (hash.startsWith("#/archive/")) archivePage(hash.split("/")[2]);
  else if (hash.startsWith("#/post/")) blogPage(hash.split("/")[2]);
  else if (hash === "#/about") aboutPage();
  else if (hash === "#/disclaimer") legalPage("disclaimer");
  else if (hash === "#/privacy") legalPage("privacy");
  else homePage();

  setTimeout(() => window.scrollTo(0, 0), 0);
}

window.addEventListener("hashchange", router);
router();
