import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogList } from '../components/organisms/BlogList';
import { BlogDetail } from '../components/organisms/BlogDetail';
import { CreateBlogForm } from '../components/organisms/CreateBlogForm';
import { Button } from '../components/atoms/Button';

export function HomePage() {
  const navigate = useNavigate();
  const [selectedBlogId, setSelectedBlogId] = useState<string | undefined>();
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleSelectBlog = (id: string) => {
    setSelectedBlogId(id);
    setShowCreateForm(false);
    // Update URL without navigation (for state-based view)
    navigate(`/blogs/${id}`, { replace: true });
  };

  const handleCreateSuccess = () => {
    setShowCreateForm(false);
    setSelectedBlogId(undefined);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            CA Monk Blog
          </h1>
          <p className="text-lg text-black">
            Stay updated with the latest trends in finance, accounting, and career growth
          </p>
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
                  onClick={() => {
                    setShowCreateForm(true);
                    setSelectedBlogId(undefined);
                  }}
                  size="sm"
                  variant="grey"
                >
                  + New
                </Button>
              </div>
              <BlogList
                selectedBlogId={selectedBlogId}
                onSelectBlog={handleSelectBlog}
              />
            </div>
          </aside>

          {/* Right Column - Blog Detail or Create Form */}
          <main className="flex-1">
            <div className="bg-white p-6 lg:p-8">
              {showCreateForm ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-black">
                      Create New Blog
                    </h2>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowCreateForm(false);
                      }}
                      size="sm"
                    >
                      Cancel
                    </Button>
                  </div>
                  <CreateBlogForm onSuccess={handleCreateSuccess} />
                </div>
              ) : selectedBlogId ? (
                <BlogDetail blogId={selectedBlogId} />
              ) : (
                <div className="flex items-center justify-center h-96 text-gray-500">
                  <div className="text-center">
                    <p className="text-lg mb-2">Select a blog to view details</p>
                    <p className="text-sm">or create a new blog post</p>
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
