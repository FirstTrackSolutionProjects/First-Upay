import React from "react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "5 Tips to Save More on Your Monthly Bills",
      excerpt:
        "Learn practical ways to manage expenses and save money effectively every month.",
      date: "August 25, 2025",
      image: "/images/blog 1.jpg", // apna local image ya URL
    },
    {
      id: 2,
      title: "The Future of Digital Payments",
      excerpt:
        "Discover how digital payments are transforming lives and creating cashless ecosystems.",
      date: "July 10, 2025",
      image: "/images/blog 2.jpg",
    },
    {
      id: 3,
      title: "Why FASTag is Essential for Every Vehicle Owner",
      excerpt:
        "Skip the long queues at toll plazas with FASTag recharges. Here’s everything you need to know.",
      date: "June 18, 2025",
      image: "/images/blog 3.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center">Our Blog</h1>

      {/* Blog List */}
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-6 border rounded-xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="rounded-lg mb-4 w-full h-80 object-cover"
            />
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-3">{post.excerpt}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
