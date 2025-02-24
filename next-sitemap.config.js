/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_HOST, 
  generateRobotsTxt: true, 
  changefreq: 'daily',
  priority: 0.7,
  exclude: [], 
  additionalPaths: async (config) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/blog/get-all?page=1&limit=1000`); // Thay URL API của bạn
    const blogs = await response.json();

    const blogPaths = blogs.data.data.map((blog) => ({
      loc: `/blog/${blog.slug}`,
      lastmod: blog.updatedAt || new Date().toISOString(),
    }));

    const staticPaths = [
      { loc: '/', lastmod: new Date().toISOString() },
    ];

    return [...staticPaths, ...blogPaths];
  },
};

module.exports = config;
