import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "react-email";

const NOT_PROVIDED = "Not provided";

function Detail({ label, children }) {
  return (
    <Row style={detailRow}>
      <Column style={detailLabelColumn}>
        <Text style={detailLabel}>{label}</Text>
      </Column>
      <Column style={detailValueColumn}>
        <Text style={detailValue}>{children}</Text>
      </Column>
    </Row>
  );
}

export default function ContactEnquiryEmail({ submission }) {
  const firstName = submission.name.split(" ")[0];
  const previewText = `${firstName} sent a new project enquiry to Nymbor`;

  return (
    <Html lang="en">
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={brandSection}>
            <Text style={wordmark}>NYMBOR</Text>
            <Text style={eyebrow}>New project enquiry</Text>
            <Heading as="h1" style={heading}>
              A new idea just landed.
            </Heading>
            <Text style={introduction}>
              {submission.name} would like to start a conversation about a
              project.
            </Text>
          </Section>

          <Section style={detailsSection}>
            <Detail label="Name">{submission.name}</Detail>
            <Detail label="Email">
              <Link href={`mailto:${submission.email}`} style={link}>
                {submission.email}
              </Link>
            </Detail>
            <Detail label="Phone">{submission.phone || NOT_PROVIDED}</Detail>
            <Detail label="Company">
              {submission.companyName || NOT_PROVIDED}
            </Detail>
            <Detail label="Services">{submission.services.join(", ")}</Detail>
            <Detail label="Project type">
              {submission.projectType || NOT_PROVIDED}
            </Detail>
            <Detail label="Investment">
              {submission.budget || NOT_PROVIDED}
            </Detail>
          </Section>

          <Hr style={divider} />

          <Section>
            <Text style={sectionLabel}>THE BRIEF</Text>
            <Text style={brief}>{submission.projectDetails}</Text>
          </Section>

          <Button href={`mailto:${submission.email}`} style={replyButton}>
            Reply to {firstName}
          </Button>

          <Hr style={footerDivider} />
          <Text style={footer}>
            Sent from the project form at nymbor.com to contact@nymbor.com.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#f4f1f8",
  color: "#1c1920",
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  margin: "0",
  padding: "28px 12px",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e5dfee",
  borderRadius: "20px",
  margin: "0 auto",
  maxWidth: "620px",
  overflow: "hidden",
  padding: "44px 42px 36px",
};

const brandSection = {
  paddingBottom: "10px",
};

const wordmark = {
  color: "#7221fc",
  fontSize: "13px",
  fontWeight: "800",
  letterSpacing: "0.18em",
  lineHeight: "18px",
  margin: "0 0 34px",
};

const eyebrow = {
  color: "#766d80",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "0.12em",
  lineHeight: "16px",
  margin: "0 0 10px",
  textTransform: "uppercase",
};

const heading = {
  color: "#1c1920",
  fontSize: "34px",
  fontWeight: "600",
  letterSpacing: "-0.035em",
  lineHeight: "40px",
  margin: "0 0 14px",
};

const introduction = {
  color: "#696271",
  fontSize: "16px",
  lineHeight: "25px",
  margin: "0",
};

const detailsSection = {
  backgroundColor: "#faf8fd",
  border: "1px solid #ebe5f2",
  borderRadius: "14px",
  marginTop: "28px",
  padding: "12px 18px",
};

const detailRow = {
  borderBottom: "1px solid #ece7f1",
};

const detailLabelColumn = {
  padding: "11px 12px 11px 0",
  verticalAlign: "top",
  width: "34%",
};

const detailValueColumn = {
  padding: "11px 0",
  verticalAlign: "top",
};

const detailLabel = {
  color: "#89808f",
  fontSize: "12px",
  fontWeight: "600",
  lineHeight: "18px",
  margin: "0",
};

const detailValue = {
  color: "#28232d",
  fontSize: "13px",
  fontWeight: "500",
  lineHeight: "19px",
  margin: "0",
};

const link = {
  color: "#7221fc",
  textDecoration: "none",
};

const divider = {
  borderColor: "#ebe6ef",
  margin: "32px 0 28px",
};

const sectionLabel = {
  color: "#7221fc",
  fontSize: "11px",
  fontWeight: "800",
  letterSpacing: "0.12em",
  lineHeight: "16px",
  margin: "0 0 10px",
};

const brief = {
  color: "#3c3542",
  fontSize: "15px",
  lineHeight: "25px",
  margin: "0",
  whiteSpace: "pre-wrap",
};

const replyButton = {
  backgroundColor: "#7221fc",
  borderRadius: "999px",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "13px",
  fontWeight: "700",
  marginTop: "30px",
  padding: "13px 22px",
  textDecoration: "none",
};

const footerDivider = {
  borderColor: "#ebe6ef",
  margin: "34px 0 20px",
};

const footer = {
  color: "#9a929f",
  fontSize: "11px",
  lineHeight: "17px",
  margin: "0",
};
