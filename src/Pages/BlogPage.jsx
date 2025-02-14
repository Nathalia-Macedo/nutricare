import { Link } from "react-router-dom"
import { useBlogPosts } from "../Context/BlogsContext"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer"

export default function BlogPage() {
  const { blogPosts } = useBlogPosts()

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Blog Nutricare</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="h-full flex flex-col">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex-grow">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">
                    Por {post.author} | {post.date} | {post.readTime} min de leitura
                  </p>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                </div>
                <div className="p-6 pt-0">
                  <span className="text-green-600 hover:text-green-700 font-medium">Ler mais</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

