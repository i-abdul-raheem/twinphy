import { Header } from "../Header";

export const Terms = () => {
  return (
    <>
      <div className="page-wraper header-fixed">
        <Header text="Terms" />
        <div className="page-content">
          <div className="container">
            <h6 className="title">Introduction</h6>
            <ul className="list-style-1">
              <li>
                The Terms are to be read together by you with any terms,
                conditions or disclaimers provided in the pages of our website.
                Please review the Terms carefully. The Terms apply to all users
                of our website, including without limitation, users who are
                browsers, customers, merchants, vendors and/or contributors of
                content. If you access and use this website, you accept and
                agree to be bound by and comply with the Terms and our Privacy
                Policy. If you do not agree to the Terms or our Privacy Policy,
                you are not authorized to access our website, use any of our
                website’s services or place an order on our website.
              </li>
            </ul>
            <h6 className="title">Use of our Website</h6>
            <ul className="list-style-1">
              <li>
                You agree to not use our website to conduct any activity that
                would constitute a civil or criminal offence or violate any law.
                You agree not to attempt to interfere with our website’s network
                or security features or to gain unauthorized access to our
                systems.
              </li>
            </ul>
            <h6 className="title">General Conditions</h6>
            <ul className="list-style-1">
              <li>
                You agree that we will not be liable to you or any third party
                for any modification, suspension or discontinuance of our
                website or for any service, content, feature or product offered
                through our website.
              </li>
            </ul>
            <h6 className="title">Products or Services</h6>
            <ul className="list-style-1">
              <li>
                All purchases through our website are subject to product
                availability. We may, in our sole discretion, limit or cancel
                the quantities offered on our website or limit the sales of our
                products or services to any person, household, geographic region
                or jurisdiction.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
