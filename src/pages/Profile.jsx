import { useSelector } from 'react-redux';
import { UserError } from '../components';

const Profile = () => {
  const { userName } = useSelector((state) => state.auth);

  return (
    <main>
      {!userName ? (
        <UserError message={'Profile not setup'} cta={'Setup profile'} />
      ) : (
        <section className="container mx-auto">
          <div>Profile</div>
        </section>
      )}
    </main>
  );
};
export default Profile;
