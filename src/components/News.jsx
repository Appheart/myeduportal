import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkBtn from './Link';
// import { api } from '../app/api';

const News = ({ newsData }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsData.length > 0 ? (
          newsData
            .sort(function (a, b) {
              if (a.publishedOn > b.publishedOn) {
                return -1;
              }

              if (a.publishedOn < b.publishedOn) {
                return 1;
              }

              return 0;
            })
            .map((item, index) => (
              <div
                key={index}
                className={
                  'flex bg-white shadow-sm update flex-col border  p-3 rounded gap-1 text-gray-700'
                }
              >
                <small className="text-green-800 font-bold">
                  {item.publishedOn}
                </small>

                <div className="flex items-center justify-between gap-2">
                  <p className="">{item.title}</p>

                  <div className="img-container">
                    <img
                      src={item.illustration}
                      alt=""
                      height={80}
                      width={80}
                    />
                  </div>
                </div>

                <LinkBtn
                  link={item.link}
                  className="text-red-800 text-xs font-bold"
                >
                  Read more
                </LinkBtn>
              </div>
            ))
        ) : (
          <div
            className={
              'flex py-7 text-center bg-white shadow-sm update flex-col border  p-3 rounded gap-1 text-gray-700'
            }
          >
            <p className="text-sm text-gray-900">
              your news is loading, please wait...
            </p>
          </div>
        )}
      </div>

      <div className="mt-5 flex justify-center items-center  gap-4">
        <FontAwesomeIcon icon={faArrowLeft} />
        <LinkBtn
          link={'/'}
          className=" text-sm flex  justify-center text-center text-red-400 font-bold underline"
        >
          1
        </LinkBtn>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </>
  );
};

export default News;
