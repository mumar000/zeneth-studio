import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getProjectPublicationStatus,
  getPublicProjects,
} from "../../../lib/projects-data";
import JsonLd from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  caseStudySchema,
  createPageMetadata,
} from "@/lib/seo";
import DetailHero from "../../../components/works/detail/detail-hero";
import ImagePair from "../../../components/works/detail/image-pair";
import BoardingPassQuote from "../../../components/works/detail/boarding-pass-quote";
import WordmarkBlock from "../../../components/works/detail/wordmark-block";
import TrioRow from "../../../components/works/detail/trio-row";
import SystemBoard from "../../../components/works/detail/system-board";
import ClosingQuote from "../../../components/works/detail/closing-quote";
import VideoStory from "../../../components/works/detail/video-story";
import AlignmentCTA from "@/components/home/alignment-cta";

const DEDICATED_PROJECT_SLUGS = new Set([
  "spreadshop",
  "lets-grub",
  "sapphire",
  "arpm",
]);

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublicProjects()
    .filter((project) => !DEDICATED_PROJECT_SLUGS.has(project.slug))
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const publicationStatus = getProjectPublicationStatus(slug);

  if (!project || publicationStatus === "unpublished") {
    return createPageMetadata({
      title: "Case Study Not Found",
      description: "The requested Nymbor case study could not be found.",
      path: `/works/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `${project.title} Case Study`,
    description: project.tagline,
    path: `/works/${slug}`,
    eyebrow: "Nymbor case study",
    imageAlt: `${project.title} case study by Nymbor`,
    noIndex: publicationStatus === "noindex",
  });
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
    case "video":
      return (
        <VideoStory
          key={i}
          src={block.src}
          poster={block.poster}
          eyebrow={block.eyebrow}
          title={block.title}
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
  const publicationStatus = getProjectPublicationStatus(slug);
  if (!project || publicationStatus === "unpublished") notFound();

  const path = `/works/${slug}`;

  return (
    <main id="main-content" className="relative min-h-screen bg-[#fffcf7]">
      <JsonLd
        data={[
          caseStudySchema({
            title: project.title,
            description: project.tagline,
            path,
            image: project.image,
            services: project.tags,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/works" },
            { name: project.title, path },
          ]),
        ]}
      />
      <DetailHero project={project} />

      {project.media.map((block, i) => renderBlock(block, i, project))}

      <ClosingQuote
        text={project.closingQuote}
        accent={project.accent}
        bg={project.bg}
      />

      <AlignmentCTA />

    </main>
  );
}
