import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import ProjectDetailSection from '@/components/sections/portfolio/ProjectDetailSection';

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ProjectDetailSection project={project} />
    </main>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
