import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogContent from "@/components/blog/BlogContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto border rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">
          <BlogSidebar />
          <BlogContent />
        </div>
      </div>
    </main>
  );
}
