import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { UserError, UserErrorMessage } from '../components';

const Profile = () => {
  const { userName, instituteSync } = useSelector((state) => state.auth);

  return (
    <main>
      {!userName ? (
        <UserError message={'Profile not setup'} cta={'Setup profile'} />
      ) : (
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset">
            <h2 className="fieldset-title">Profile</h2>
            <div className="flex item-center justify-center">
              <button>Show data</button>
            </div>
          </fieldset>

          <fieldset className="fieldset">
            <h2 className="fieldset-title">Institution</h2>
            <div className="">
              {!instituteSync ? (
                <UserErrorMessage
                  message={'You are yet to sync with institution portal'}
                  cta="Sync now"
                />
              ) : (
                ''
              )}
            </div>
          </fieldset>

          <fieldset className="fieldset cc">
            <div className="flex items-center justify-between mb-2">
              <h2 className="fieldset-title">Courses</h2>

              <div className="selection flex items-center gap-3">
                <select name="session" id="session">
                  <option value="2020-2021">2020-2021</option>
                </select>

                <select name="semester" id="semester">
                  <option value="1">First</option>
                  <option value="1">Second</option>
                </select>
              </div>
            </div>

            <div className="grid grid-flow-col courses">
              <div className="">Cos 101 </div>
              <div className="">Intro. to Computer</div>
              <div className="justify-self-end">2</div>
            </div>

            <button>
              <FontAwesomeIcon icon={faPrint} /> <span>Print</span>
            </button>
          </fieldset>

          <fieldset className="fieldset cc">
            <h2 className="fieldset-title">Examinations</h2>
            <div className="">
              <UserErrorMessage
                message={'No examinations yet'}
                cta="Sync now"
              />
            </div>
          </fieldset>
        </section>
      )}
    </main>
  );
};
export default Profile;
