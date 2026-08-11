import { notFound } from "next/navigation";
import {
  projects,
  getProjectBySlug,
} from "../../../lib/projects-data";
import DetailHero from "../../../components/works/detail/detail-hero";
import ImagePair from "../../../components/works/detail/image-pair";
import BoardingPassQuote from "../../../components/works/detail/boarding-pass-quote";
import WordmarkBlock from "../../../components/works/detail/wordmark-block";
import TrioRow from "../../../components/works/detail/trio-row";
import SystemBoard from "../../../components/works/detail/system-board";
import ClosingQuote from "../../../components/works/detail/closing-quote";
import FloatingCTA from "../../../components/works/detail/floating-cta";
import AlignmentCTA from "@/components/home/alignment-cta";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Work — Zenith Studio" };
  return {
    title: `${project.title} — Zenith Studio`,
    description: project.tagline,
  };
}

function renderBlock(block, i, project) {
  switch (block.type) {
    case "pair":
      return <ImagePair key={i} left={block.left} right={block.right} />;
    case "trio":
      return <TrioRow key={i} images={block.images} />;
    case "quote":
      return (
        <BoardingPassQuote
          key={i}
          text={block.text}
          author={block.author}
          role={block.role}
          code={block.code}
          date={block.date}
          accent={project.accent}
        />
      );
    case "wordmark":
      return (
        <WordmarkBlock
          key={i}
          image={block.image}
          text={block.text}
          accent={project.accent}
        />
      );
    case "system":
      return (
        <SystemBoard
          key={i}
          icons={block.icons}
          image={block.image}
          accent={project.accent}
        />
      );
    default:
      return null;
  }
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="relative bg-[#fffcf7] min-h-screen">
      <DetailHero project={project} />

      {project.media.map((block, i) => renderBlock(block, i, project))}

      <ClosingQuote
        text={project.closingQuote}
        accent={project.accent}
        bg={project.bg}
      />

      <AlignmentCTA />

      <FloatingCTA accent={project.accent} projectTitle={project.title} />
    </div>
  );
}
