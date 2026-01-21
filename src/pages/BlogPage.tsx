import { useParams, useNavigate } from 'react-router-dom';
import { BlogDetail } from '../components/organisms/BlogDetail';
import { BlogList } from '../components/organisms/BlogList';
import { Button } from '../components/atoms/Button';

export function BlogPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleSelectBlog = (blogId: string) => {
    navigate(`/blogs/${blogId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                CA Monk Blog
              </h1>
              <p className="text-lg text-black">
                Stay updated with the latest trends in finance, accounting, and career growth
              </p>
            </div>
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              size="sm"
            >
              ← Back to All Blogs
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Latest Articles */}
          <aside className="w-full lg:w-1/3">
            <div className="bg-white p-6 sticky top-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-black">
                  Latest Articles
                </h2>
                <Button
                  onClick={() => navigate('/')}
                  size="sm"
                  variant="grey"
                >
                  + New
                </Button>
              </div>
              <BlogList
                selectedBlogId={id}
                onSelectBlog={handleSelectBlog}
              />
            </div>
          </aside>

          {/* Right Column - Blog Detail */}
          <main className="flex-1">
            <div className="bg-white p-6 lg:p-8">
              {id ? (
                <BlogDetail blogId={id} />
              ) : (
                <div className="flex items-center justify-center h-96 text-gray-500">
                  <div className="text-center">
                    <p className="text-lg mb-2">Blog ID not found</p>
                    <Button
                      onClick={() => navigate('/')}
                      variant="outline"
                      size="sm"
                    >
                      Go to Home
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
