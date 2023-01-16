import { UserErrorMessage } from '.';

const userError = ({ illustration, message, cta }) => {
  return (
    <section className="container mx-auto errorPage">
      <UserErrorMessage
        illustration={illustration}
        message={message}
        cta={cta}
      />
    </section>
  );
};
export default userError;
