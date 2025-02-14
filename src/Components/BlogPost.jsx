
import { useParams, Link } from "react-router-dom"
import { useBlogPosts } from "../Context/BlogsContext"
import Header from "./Header/Header"
import Footer from "../Components/Footer"
import { Calendar, ChevronLeft, Clock } from "lucide-react"
import { AgendarConsultaButton } from "../Components/AgendarConsultaButton"

export default function BlogPost() {
  const { id } = useParams()
  const { blogPosts } = useBlogPosts()
  const post = blogPosts.find((post) => post.id === Number.parseInt(id))

  if (!post) {
    return <div>Post não encontrado</div>
  }

  const paragraphs = post.content.split("\n\n").filter((p) => p.trim())

  return (
    <>
      <Header />
      <div className="relative bg-white min-h-screen">
        {/* Background Decorations */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%20(2)-s7iKwZVD0IiUPMgjlrEujNjvXpnxoK.png"
          alt=""
          className="absolute left-0 top-0 w-48 opacity-20 z-0"
        />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector%20(3)-9QwQZyRzXBWwkxe6LQr91a78qEKz9a.png"
          alt=""
          className="absolute right-0 bottom-0 w-48 opacity-20"
        />

        <div className="container mx-auto px-4 py-8 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center text-[#31A431] hover:text-[#2b932b] transition-colors mb-6"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Voltar para o Blog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime} min de leitura
                    </span>
                  </div>

                  <div className="prose max-w-none space-y-6">
                    {paragraphs.map((paragraph, index) => (
                      <div
                        key={index}
                        className={`relative pl-6 ${
                          index % 2 === 0
                            ? 'before:content-[""] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#31A431]'
                            : ""
                        }`}
                      >
                        <p className="text-gray-700 leading-relaxed">{paragraph}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 space-y-4">
                {/* Author Info */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">Sobre o Autor</h3>
                  <p className="text-gray-600 mb-4">{post.author}</p>
                  <p className="text-gray-600 mb-4">
                    Nutricionista especializada com vasta experiência em orientação nutricional.
                  </p>
                </div>

                {/* Appointment Card */}
                <div className="bg-[#E8FFE8] rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-2">Agende sua consulta</h3>
                  <p className="text-gray-600 mb-4">Cuide da sua saúde com uma consulta especializada</p>
                  <p className="text-gray-600 mb-6">
                    Descubra como uma alimentação equilibrada pode transformar sua saúde. Agende uma consulta
                    personalizada hoje mesmo!
                  </p>
                  <AgendarConsultaButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

