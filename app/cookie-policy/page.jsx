import Link from "next/link";
import LegalPage from "@components/LegalPage";
import { ukBranchContact } from "@data/ukBranchData";

export const metadata = {
  title: "Cookie Policy",
  description:
    "How Cardinal Torch Company UK Limited uses cookies and similar technologies on this website.",
};

const CookiePolicyPage = () => {
  return (
    <LegalPage title="Cookie Policy" updated="Last updated 4 September 2026">
      <p>
        This Cookie Policy explains how {ukBranchContact.company} (
        <strong>“Company,” “we,” “us,”</strong> and <strong>“our”</strong>) uses
        cookies and similar technologies when you visit this website. It
        describes what these technologies are, why we use them, and how you can
        control them.
      </p>
      <p>
        This website is operated by {ukBranchContact.company}, a UK company with
        its registered office at {ukBranchContact.address}.
      </p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small data files placed on your computer or mobile device
        when you visit a website. They are widely used to make websites work, or
        work more efficiently, and to provide information to the site operator.
      </p>
      <p>
        Cookies set by us are called first-party cookies. Cookies set by other
        organisations are called third-party cookies. Third-party cookies can
        enable features such as analytics. Those parties may recognise your
        device when you visit this website and other websites.
      </p>

      <h2>Why do we use cookies?</h2>
      <p>
        We use cookies for two reasons:
      </p>
      <ul>
        <li>
          <strong>Essential cookies</strong> are required for the website to
          function. They remember your cookie preference so we do not ask you
          on every visit.
        </li>
        <li>
          <strong>Optional cookies</strong> help us understand how the site is
          used (for example analytics), so we can improve it. We only set these
          if you choose Accept cookies.
        </li>
      </ul>

      <h2>Cookies we use</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Purpose</th>
              <th>Duration</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>__client_consent</td>
              <td>Stores whether you accepted or declined optional cookies</td>
              <td>182 days</td>
              <td>Essential, first-party</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        If you accept optional cookies, additional analytics cookies may be set
        by our providers. Those cookies are not set if you decline.
      </p>

      <h2>How you can control cookies</h2>
      <p>
        When you first visit, a banner asks you to accept or decline optional
        cookies. Essential cookies cannot be switched off because they are
        needed to remember that choice.
      </p>
      <p>
        You can change your mind later using Cookie settings in the website
        footer. You can also control cookies in your browser:
      </p>
      <ul>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/microsoft-edge-browsing-data-and-privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Edge
          </a>
        </li>
      </ul>

      <h2>Updates</h2>
      <p>
        We may update this Cookie Policy if our use of cookies changes. The date
        at the top shows when it was last revised.
      </p>

      <h2>Further information</h2>
      <p>
        For more about how we handle personal data, see our{" "}
        <Link href="/privacy-policy">privacy policy</Link>. Questions about
        cookies can be sent to{" "}
        <a href={`mailto:${ukBranchContact.email}`}>{ukBranchContact.email}</a>
        .
      </p>
      <p>
        {ukBranchContact.company}
        <br />
        {ukBranchContact.address}
        <br />
        Phone: {ukBranchContact.phone}
      </p>
    </LegalPage>
  );
};

export default CookiePolicyPage;
