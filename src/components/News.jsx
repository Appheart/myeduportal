import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkBtn from './Link';

const News = ({ newsData }) => {
  return (
    <>
      {newsData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsData
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
            ))}
        </div>
      ) : (
        <div
          className={
            'flex py-7 text-center bg-white shadow-sm update flex-col border  p-3 rounded gap-1 text-gray-700 h-[10rem]'
          }
        >
          <img
            src="/images/gif/loading.gif"
            alt="news_loading_state"
            height={60}
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </div>
      )}

      <div className="mt-5 flex justify-center items-center  gap-4">
        <FontAwesomeIcon icon={faAnglesLeft} />
        <LinkBtn
          link={'/'}
          className=" text-sm flex px-4 py-3 bg-white border  justify-center text-center text-red-400 font-bold"
        >
          1
        </LinkBtn>
        <LinkBtn
          link={'/'}
          className=" text-sm flex px-4 py-3 bg-white border  justify-center text-center text-red-400 font-bold"
        >
          2
        </LinkBtn>
        <FontAwesomeIcon icon={faAnglesRight} />
      </div>
    </>
  );
};

export default News;
