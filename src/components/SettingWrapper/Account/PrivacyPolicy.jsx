import { Header } from "../Header";

export const PrivacyPolicy = () => {
  return (
    <>
      <div className="page-wraper header-fixed">
        <Header text="Privacy Policy" />

        <div className="page-content">
          <div className="container">
            <h6 className="title">Information We Collect</h6>
            <ul className="list-style-1">
              <li>
                Contact Information: We collect contact information, which
                includes personal information (e.g., name, phone number, and
                email address) that you knowingly provide when you use our
                Website.
              </li>
              <li>
                Payment Details: Your payment details can be collected in
                connection with an order.
              </li>
              <li>
                Call records or email records: If you call or email our customer
                service agents, we may keep records of those conversations.
              </li>
            </ul>
            <h6 className="title">How Your Information Is Collected</h6>
            <ul className="list-style-1">
              <li>
                You: We collect information directly from you, whenever you:
                visit our Website; contact us with questions or comments; upload
                content to our Social Media Pages; enter our contests or
                sweepstakes or contests or sweepstakes we are affiliated with;
                respond to surveys; or fill out any forms on our Website or
                Social Media Pages.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
