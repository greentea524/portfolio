import React, { useContext } from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard.jsx";
import { blogSection } from "../../portfolio";
// import { Fade } from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Blogs() {
  const { isDark } = useContext(StyleContext);

  if (!blogSection.display) {
    return null;
  }
  return (
    <>
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blogSection.blogs.map((blog) => {
              return (
                <BlogCard
                  key={blog.url || blog.title}
                  isDark={isDark}
                  blog={{
                    url: blog.url,
                    image: blog.image,
                    title: blog.title,
                    description: blog.description,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
