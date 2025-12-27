type Props = {
  firstname?: string;
  company?: string;
  locale?: "fr" | "en";
  sentAt?: string;
};

export const ConfirmationEmailTemplate = ({
  firstname = "",
  company = "",
  locale = "fr",
  sentAt = "",
}: Props) => {
  const isFr = locale === "fr";
  const name = firstname?.trim() || (isFr ? "Bonjour" : "Hi");

  return (
    <div
      style={{
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        background: "#FAFAF8",
        padding: "32px",
        color: "#0C343D",
      }}
    >
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          background: "#FFFFFF",
          borderRadius: 16,
          padding: 24,
          border: "1px solid #E5ECEC",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ fontWeight: 800, letterSpacing: 1 }}>BEYOND</div>
        </div>

        <h1 style={{ marginTop: 18, fontSize: 22 }}>
          {isFr ? "Message bien reçu ✅" : "Message received ✅"}
        </h1>

        <p style={{ marginTop: 10, lineHeight: 1.6, color: "#3E5E65" }}>
          {isFr
            ? `${name}, merci pour votre message${
                company ? ` au nom de ${company}` : ""
              }.`
            : `${name}, thanks for your message${
                company ? ` from ${company}` : ""
              }.`}
          <br />
          {isFr
            ? "Nous revenons vers vous dès que possible."
            : "We’ll get back to you as soon as possible."}
        </p>

        {sentAt ? (
          <p style={{ marginTop: 14, fontSize: 12, color: "#6B8287" }}>
            {isFr ? "Reçu le" : "Received on"}: {sentAt}
          </p>
        ) : null}

        <div style={{ marginTop: 18, height: 1, background: "#E5ECEC" }} />

        <p style={{ marginTop: 14, fontSize: 12, color: "#6B8287" }}>
          {isFr
            ? "Cet email est une confirmation automatique."
            : "This is an automatic confirmation email."}
        </p>
      </div>
    </div>
  );
};
