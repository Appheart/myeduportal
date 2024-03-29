import Loading from './Loading';

const News = ({ status, error, newsData, prevPage, nextPage, page }) => {
  const date = (d) => {
    return new Date(d).toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  let content;

  if (status == 'loading') {
    content = <Loading />;
  }

  if (status == 'error') {
    content = (
      <div
        className={
          'flex py-7 text-center bg-white shadow-sm update flex-col border  p-3 rounded gap-1 text-gray-700 h-[10rem]'
        }
      >
        <p>Error: {JSON.stringify(error)}</p>
      </div>
    );
  }

  content = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {newsData.map((item, index) => (
          <div
            key={index}
            className={
              'flex bg-white shadow-sm flex-col justify-between border p-3 rounded-xl gap-2 text-gray-700'
            }
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center h-8  my-1 -mx-1.5">
                <a
                  aria-label="EDUPORA"
                  className="flex items-center no-underline"
                  href="/"
                >
                  <img
                    src="/images/logo.png"
                    alt="devto's profile"
                    className="object-contain w-8 h-8 rounded-full"
                    loading="lazy"
                  />
                </a>
                <span className="flex flex-row ml-auto laptop:mouse:invisible laptop:mouse:group-hover:visible">
                  <a
                    href={item.link}
                    target="_blank"
                    className="flex-row items-center border font-bold cursor-pointer select-none focus-outline justify-center flex relative mr-2 px-3 text-xs rounded-xl"
                  >
                    <span>Read article</span>
                    <svg
                      width=".8rem"
                      height=".8rem"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 pointer-events-none ml-2 icon"
                    >
                      <path
                        d="M7.801 6.6c.66 0 1.196.535 1.196 1.196 0 .55-.376 1.02-.912 1.154l-.137.026-.145.009H6.89l-.118.003-.315.02c-.506.06-.92.434-1.028.917l-.022.134-.007.138V17.4c0 .57.399 1.052.927 1.17l.135.023.138.007h7.197c.57 0 1.052-.399 1.17-.917l.022-.131.008-1.352a1.2 1.2 0 012.392-.14l.008.14v1.2a3.602 3.602 0 01-3.18 3.575l-.21.019-.21.006H6.6a3.602 3.602 0 01-3.575-3.18l-.019-.21L3 17.4v-7.203a3.597 3.597 0 013.386-3.59l.211-.007h1.204zM19.797 3a1.2 1.2 0 011.192 1.06l.008.14v8.4a1.2 1.2 0 01-2.392.14l-.008-.14V7.094l-6.012 6.016a1.2 1.2 0 01-1.463.183l-.121-.084-.113-.1a1.2 1.2 0 01-.1-1.583l.1-.113L16.9 5.399l-5.503.001a1.2 1.2 0 01-1.168-.925l-.024-.135-.008-.14a1.2 1.2 0 011.06-1.192l.14-.008h8.4z"
                        fill="currentcolor"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <button
                    aria-label="Options"
                    className="iconOnly small btn flex-row items-center border font-bold no-underline shadow-md cursor-pointer select-none focus-outline justify-center flex relative my-auto btn-tertiary bg-white"
                  >
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 pointer-events-none"
                    >
                      <path
                        d="M12 17a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
                        fill="currentcolor"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </span>
              </div>
              <div className="flex flex-col px-2">
                <h3 className="my-2 font-bold typo-title3 break-words Card_title__6axF8 text-theme-label-primary multi-truncate line-clamp-3 ">
                  {item.title}
                </h3>

                <div className="mb-0 relative flex flex-1 flex-col">
                  <div className="flex items-center text-xs">
                    <time dateTime="2023-01-16T03:18:22.054Z">
                      {date(item.date)}
                    </time>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col h-40 w-full  overflow-hidden justify-center items-center ">
              <img
                alt="Post Cover image"
                src={item.cover_photo}
                className="object-cover my-2 rounded-xl h-full max-w-max shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
      {/* <div className="mt-5 flex justify-center items-center  gap-4">
        <button
          onClick={prevPage}
          disabled={page === 1}
          link={'/'}
          className="text-sm flex px-4 py-3 bg-white border  justify-center text-center text-red-400 font-bold"
        >
          <FontAwesomeIcon icon={faAnglesLeft} />
        </button>
        <LinkBtn
          link={'/'}
          className=" text-sm flex px-4 py-3 bg-white border  justify-center text-center text-red-400 font-bold"
        >
          {page}
        </LinkBtn>

        <button
          onClick={nextPage}
          disabled={!newsData.length}
          link={'/'}
          className=" text-sm flex px-4 py-3 bg-white border  justify-center text-center text-red-400 font-bold"
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </button>
      </div> */}
    </>
  );

  return content;
};

export default News;
