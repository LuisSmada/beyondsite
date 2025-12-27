import * as React from "react";

type ContactEmailProps = {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  locale?: "fr" | "en";
  sentAt?: string; // optionnel (ex: new Date().toLocaleString("fr-FR"))
};

const BRAND = "#0C343D";
const ACCENT = "#F9BF4B";
const BG = "#FAFAF8";
const SURFACE = "#FFFFFF";
const BORDER = "#E5ECEC";
const MUTED = "#3E5E65";

export const EmailTemplate = ({
  firstname = "",
  lastname = "",
  email = "",
  phone = "",
  company = "",
  message = "",
  locale = "fr",
  sentAt = "",
}: ContactEmailProps) => {
  const isFr = locale === "fr";
  const fullName =
    [firstname, lastname].filter(Boolean).join(" ").trim() ||
    (isFr ? "—" : "—");

  const previewText = isFr
    ? `Nouveau message de ${fullName}${company ? ` (${company})` : ""}`
    : `New message from ${fullName}${company ? ` (${company})` : ""}`;

  return (
    <div style={styles.body}>
      {/* Preview text (hidden) */}
      <div style={styles.preview}>{previewText}</div>

      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.brandRow}>
            {/* <div style={styles.logoMark} /> */}
            <div>
              <div style={styles.brandName}>BEYOND</div>
              <div style={styles.brandTagline}>
                {isFr
                  ? "Nouveau message via le formulaire de contact"
                  : "New message via contact form"}
              </div>
            </div>
            <div style={{ flex: 1 }} />
            {/* <div style={styles.badge}>{isFr ? "Contact" : "Contact"}</div> */}
          </div>

          {sentAt ? (
            <div style={styles.metaLine}>
              <span style={styles.metaLabel}>
                {isFr ? "Reçu :" : "Received:"}
              </span>{" "}
              <span style={styles.metaValue}>{sentAt}</span>
            </div>
          ) : null}
        </div>

        {/* Card */}
        <div style={styles.card}>
          <div style={styles.cardTitle}>
            {isFr ? "Détails du contact" : "Contact details"}
          </div>

          <div style={styles.grid}>
            <InfoRow label={isFr ? "Nom" : "Name"} value={fullName} />
            <InfoRow label="Email" value={email || "—"} mono />
            <InfoRow
              label={isFr ? "Téléphone" : "Phone"}
              value={phone || "—"}
              mono
            />
            <InfoRow
              label={isFr ? "Entreprise" : "Company"}
              value={company || "—"}
            />
          </div>

          <div style={styles.divider} />

          <div style={styles.sectionTitle}>{isFr ? "Message" : "Message"}</div>
          <div style={styles.messageBox}>
            {message?.trim() ? (
              <div style={styles.messageText}>{message}</div>
            ) : (
              <div
                style={{
                  ...styles.messageText,
                  color: MUTED,
                  fontStyle: "italic",
                }}
              >
                {isFr ? "Aucun message." : "No message."}
              </div>
            )}
          </div>

          {/* CTA */}
          {/* <div style={styles.ctaRow}>
            <a
              href={email ? `mailto:${email}` : undefined}
              style={{
                ...styles.button,
                ...(email ? {} : styles.buttonDisabled),
              }}
            >
              {isFr ? "Répondre" : "Reply"}
            </a>

            {phone ? (
              <a href={`tel:${phone}`} style={styles.link}>
                {isFr ? "Appeler" : "Call"}
              </a>
            ) : (
              <span style={{ ...styles.link, opacity: 0.45 }}>
                {isFr ? "Appeler" : "Call"}
              </span>
            )}
          </div> */}
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <div style={styles.footerLine} />
          <div style={styles.footerText}>
            {isFr
              ? "Cet email a été généré automatiquement depuis le site BEYOND."
              : "This email was generated automatically from the BEYOND website."}
          </div>
          {/* <div style={styles.footerSmall}>
            {isFr
              ? "Astuce : utilisez Reply-To côté serveur."
              : "Tip: use Reply-To on the server."}
          </div> */}
        </div>
      </div>
    </div>
  );
};

function InfoRow({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div style={styles.infoRow}>
      <div style={styles.infoLabel}>{label}</div>
      <div style={{ ...styles.infoValue, ...(mono ? styles.mono : {}) }}>
        {value}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  body: {
    margin: 0,
    padding: "32px 16px",
    backgroundColor: BG,
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
    color: BRAND,
  },
  preview: {
    display: "none",
    fontSize: 1,
    lineHeight: "1px",
    maxHeight: 0,
    maxWidth: 0,
    opacity: 0,
    overflow: "hidden",
  },
  container: {
    maxWidth: 640,
    margin: "0 auto",
  },
  header: {
    marginBottom: 16,
    padding: "18px 18px 14px",
    border: `1px solid ${BORDER}`,
    borderRadius: 18,
    backgroundColor: SURFACE,
    boxShadow: "0 10px 30px rgba(12,52,61,.10)",
  },
  brandRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  logoMark: {
    width: 14,
    height: 14,
    borderRadius: 999,
    backgroundColor: ACCENT,
    boxShadow: "0 10px 22px rgba(249,191,75,.35)",
    border: `1px solid rgba(12,52,61,.12)`,
  },
  brandName: {
    fontWeight: 800,
    letterSpacing: 0.2,
    fontSize: 16,
    lineHeight: "20px",
  },
  brandTagline: {
    fontSize: 12,
    color: MUTED,
    marginTop: 2,
  },
  badge: {
    fontSize: 12,
    fontWeight: 700,
    color: BRAND,
    backgroundColor: "rgba(249,191,75,.25)",
    border: "1px solid rgba(249,191,75,.45)",
    padding: "6px 10px",
    borderRadius: 999,
  },
  metaLine: {
    marginTop: 10,
    fontSize: 12,
    color: MUTED,
  },
  metaLabel: { fontWeight: 700 },
  metaValue: { fontWeight: 500 },

  card: {
    border: `1px solid ${BORDER}`,
    borderRadius: 20,
    backgroundColor: SURFACE,
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(12,52,61,.10)",
  },
  cardTitle: {
    padding: "16px 18px",
    fontWeight: 800,
    fontSize: 14,
    background:
      "linear-gradient(135deg, rgba(249,191,75,.22), rgba(249,191,75,0) 55%)",
    borderBottom: `1px solid ${BORDER}`,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 10,
    padding: "14px 18px",
  },
  infoRow: {
    display: "flex",
    gap: 12,
    alignItems: "baseline",
  },
  infoLabel: {
    width: 110,
    fontSize: 12,
    fontWeight: 800,
    color: MUTED,
    letterSpacing: 0.2,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: 600,
    color: BRAND,
    wordBreak: "break-word",
  },
  mono: {
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontWeight: 600,
  },
  divider: {
    height: 1,
    backgroundColor: BORDER,
    margin: "0 18px",
  },
  sectionTitle: {
    padding: "14px 18px 10px",
    fontSize: 12,
    fontWeight: 900,
    color: MUTED,
    letterSpacing: 0.25,
    textTransform: "uppercase",
  },
  messageBox: {
    margin: "0 18px 16px",
    borderRadius: 16,
    border: `1px solid ${BORDER}`,
    backgroundColor: "#F3F6F6",
    padding: "14px 14px",
  },
  messageText: {
    fontSize: 14,
    lineHeight: "20px",
    whiteSpace: "pre-wrap",
  },
  ctaRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "0 18px 18px",
  },
  button: {
    display: "inline-block",
    background: "linear-gradient(135deg, #F9BF4B, #FFD777)",
    color: BRAND,
    fontWeight: 800,
    textDecoration: "none",
    borderRadius: 14,
    padding: "10px 14px",
    border: "1px solid rgba(12,52,61,.14)",
    boxShadow: "0 14px 35px rgba(249,191,75,.30)",
  },
  buttonDisabled: {
    opacity: 0.45,
    pointerEvents: "none",
  },
  link: {
    fontSize: 13,
    color: BRAND,
    fontWeight: 800,
    textDecoration: "underline",
    textUnderlineOffset: 3,
  },
  footer: {
    marginTop: 14,
    textAlign: "center",
    color: MUTED,
  },
  footerLine: {
    height: 4,
    borderRadius: 999,
    backgroundColor: ACCENT,
    margin: "0 auto 10px",
    width: 84,
    boxShadow: "0 12px 28px rgba(249,191,75,.25)",
  },
  footerText: {
    fontSize: 12,
    fontWeight: 600,
  },
  footerSmall: {
    fontSize: 11,
    marginTop: 6,
    opacity: 0.85,
  },
};
