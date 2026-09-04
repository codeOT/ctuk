import Link from "next/link";
import LegalPage from "@components/LegalPage";
import { ukBranchContact } from "@data/ukBranchData";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Cardinal Torch Company UK Limited collects, uses, and protects personal data under UK GDPR.",
};

const PrivacyPolicyPage = () => {
  return (
    <LegalPage title="Privacy Policy" updated="Last updated 4 September 2026">
      <p>
        This Privacy Policy explains how {ukBranchContact.company} (
        <strong>“we,” “us,”</strong> and <strong>“our”</strong>) collects and
        uses personal data when you use this website. We process personal data
        in line with the UK General Data Protection Regulation (UK GDPR) and
        the Data Protection Act 2018.
      </p>

      <h2>Who we are</h2>
      <p>
        The data controller is {ukBranchContact.company}, registered in England
        and Wales, with its registered office at {ukBranchContact.address}.
      </p>
      <p>
        You can contact us at{" "}
        <a href={`mailto:${ukBranchContact.email}`}>{ukBranchContact.email}</a>{" "}
        or {ukBranchContact.phone}.
      </p>

      <h2>What we collect</h2>
      <p>We may collect:</p>
      <ul>
        <li>
          <strong>Contact form details</strong> — name, email address, telephone
          number, company name, and your message, when you send an enquiry.
        </li>
        <li>
          <strong>Cookie preference</strong> — whether you accepted or declined
          optional cookies.
        </li>
        <li>
          <strong>Technical data</strong> — if you accept optional cookies, we
          may collect anonymous usage information such as pages visited, to
          improve the site.
        </li>
      </ul>
      <p>
        We do not ask you to create an account, and we do not knowingly collect
        data from children.
      </p>

      <h2>Why we use your data</h2>
      <ul>
        <li>
          To respond to enquiries you send through the contact form (legitimate
          interests, and steps prior to a contract if you are exploring a
          business relationship).
        </li>
        <li>
          To operate the website and remember your cookie choice (legitimate
          interests / essential cookies).
        </li>
        <li>
          Optional analytics, only if you consent via the cookie banner
          (consent).
        </li>
      </ul>

      <h2>Who we share data with</h2>
      <p>
        Contact form messages are emailed to {ukBranchContact.email}. We use
        Resend as a processor to deliver those emails. They only process the
        message in order to send it to us.
      </p>
      <p>
        We do not sell your personal data. We may disclose information if
        required by law.
      </p>

      <h2>Cookies</h2>
      <p>
        We use essential cookies to store your cookie preference. Optional
        cookies are only set if you accept. Full details are in our{" "}
        <Link href="/cookie-policy">cookie policy</Link>.
      </p>

      <h2>How long we keep data</h2>
      <p>
        Enquiry emails are kept for as long as needed to handle your request
        and for a reasonable period afterwards for our records. The cookie
        preference cookie lasts 182 days. You can change that choice at any
        time using Cookie settings in the footer.
      </p>

      <h2>Your rights</h2>
      <p>Under UK GDPR you can ask us to:</p>
      <ul>
        <li>access the personal data we hold about you</li>
        <li>correct inaccurate data</li>
        <li>erase your data in certain cases</li>
        <li>restrict or object to processing</li>
        <li>receive your data in a portable format</li>
        <li>withdraw consent where we rely on it (for example optional cookies)</li>
      </ul>
      <p>
        To exercise these rights, email{" "}
        <a href={`mailto:${ukBranchContact.email}`}>{ukBranchContact.email}</a>.
        You can also complain to the Information Commissioner’s Office (ICO) at{" "}
        <a
          href="https://ico.org.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          ico.org.uk
        </a>
        .
      </p>

      <h2>Updates</h2>
      <p>
        We may update this policy from time to time. The date at the top shows
        when it was last revised.
      </p>
    </LegalPage>
  );
};

export default PrivacyPolicyPage;
