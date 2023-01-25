import { faComment } from '@fortawesome/free-regular-svg-icons';
import {
  faAnglesLeft,
  faAnglesRight,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkBtn from './Link';

const News = ({ newsData, prevPage, nextPage, page }) => {
  return (
    <>
      {newsData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsData
            .sort(function (a, b) {
              if (
                new Date(a.publishedOn).getTime() >
                new Date(b.publishedOn).getTime()
              ) {
                return -1;
              }

              if (
                new Date(a.publishedOn).getTime() <
                new Date(b.publishedOn).getTime()
              ) {
                return 1;
              }

              return 0;
            })
            .map((item, index) => (
              <div
                key={index}
                className={
                  'flex bg-white shadow-sm update flex-col border p-3 rounded-xl gap-2 text-gray-700'
                }
              >
                <div class="Card_header__ygcHv flex items-center h-8  my-1 -mx-1.5">
                  <a
                    aria-label="EDUPORA"
                    class="flex items-center no-underline"
                    href="/"
                  >
                    <img
                      src="/images/logo.png"
                      alt="devto's profile"
                      class="object-contain w-8 h-8 rounded-full"
                      loading="lazy"
                    />
                  </a>
                  <span class="flex flex-row ml-auto laptop:mouse:invisible laptop:mouse:group-hover:visible">
                    <a
                      href={item.link}
                      target="_blank"
                      class="small btn flex-row items-center border typo-callout font-bold no-underline shadow-none cursor-pointer select-none focus-outline justify-center flex relative mr-2 btn-primary px-3 rounded-xl"
                    >
                      <span>Read article</span>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6 pointer-events-none ml-2 icon"
                      >
                        <path
                          d="M7.801 6.6c.66 0 1.196.535 1.196 1.196 0 .55-.376 1.02-.912 1.154l-.137.026-.145.009H6.89l-.118.003-.315.02c-.506.06-.92.434-1.028.917l-.022.134-.007.138V17.4c0 .57.399 1.052.927 1.17l.135.023.138.007h7.197c.57 0 1.052-.399 1.17-.917l.022-.131.008-1.352a1.2 1.2 0 012.392-.14l.008.14v1.2a3.602 3.602 0 01-3.18 3.575l-.21.019-.21.006H6.6a3.602 3.602 0 01-3.575-3.18l-.019-.21L3 17.4v-7.203a3.597 3.597 0 013.386-3.59l.211-.007h1.204zM19.797 3a1.2 1.2 0 011.192 1.06l.008.14v8.4a1.2 1.2 0 01-2.392.14l-.008-.14V7.094l-6.012 6.016a1.2 1.2 0 01-1.463.183l-.121-.084-.113-.1a1.2 1.2 0 01-.1-1.583l.1-.113L16.9 5.399l-5.503.001a1.2 1.2 0 01-1.168-.925l-.024-.135-.008-.14a1.2 1.2 0 011.06-1.192l.14-.008h8.4z"
                          fill="currentcolor"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <button
                      aria-label="Options"
                      class="iconOnly small btn flex-row items-center border typo-callout font-bold no-underline shadow-md cursor-pointer select-none focus-outline justify-center flex relative my-auto btn-tertiary bg-white"
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6 pointer-events-none"
                      >
                        <path
                          d="M12 17a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
                          fill="currentcolor"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </span>
                </div>
                <div className="flex flex-col px-2">
                  <h3 class="my-2 font-bold typo-title3 break-words Card_title__6axF8 text-theme-label-primary multi-truncate line-clamp-3 ">
                    {item.title}
                  </h3>

                  <div class="mb-0 relative flex flex-1 flex-col">
                    <div class="flex items-center text-xs">
                      <time datetime="2023-01-16T03:18:22.054Z">
                        Jan 16, 2023
                      </time>
                      <div class="mx-1 w-0.5 h-0.5 rounded-full bg-black"></div>
                      <span>2m read time</span>
                    </div>
                  </div>
                </div>

                <div class="relative flex flex-1 flex-col">
                  <img
                    alt="Post Cover image"
                    src={item.illustration}
                    class="object-cover my-2 rounded-xl h-40 shadow-md"
                    loading="lazy"
                  />
                  <div class="mt-4 flex flex-row items-center mx-4 justify-between gap-3">
                    <div class="small btn-quaternary flex flex-row items-stretch select-none btn-tertiary-avocado w-[4.875rem]">
                      <button
                        aria-label="Upvote"
                        id="post-f68Bw6QQH-upvote-btn"
                        class="iconOnly small btn flex-row items-center border typo-callout font-bold no-underline shadow-md cursor-pointer select-none focus-outline justify-center flex relative bg-white"
                      >
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-6 h-6 pointer-events-none"
                        >
                          <path
                            d="M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z"
                            fill="currentcolor"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div class="small btn-quaternary flex flex-row items-stretch select-none btn-tertiary-blueCheese w-[4.875rem] gap-3">
                      <button
                        aria-label="Comments"
                        id="post-f68Bw6QQH-comment-btn"
                        class="iconOnly small btn flex-row items-center border typo-callout font-bold no-underline shadow-md cursor-pointer select-none focus-outline justify-center flex relative bg-white"
                      >
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-6 h-6 pointer-events-none"
                        >
                          <path
                            d="M8.084 3.217a35.447 35.447 0 017.05-.078l.782.078.279.031c1.089.121 1.885.372 2.606.828a4.516 4.516 0 011.664 1.86c.336.69.5 1.423.53 2.361l.005.321v3.975a4.493 4.493 0 01-3.545 4.392l-.207.04-2.089.346-2.86 2.992-.147.135c-.986.789-2.399.623-3.205-.324-.532-.625-.616-1.34-.51-2.29l.029-.224.038-.254.033-.187-1.332-.189a5.011 5.011 0 01-1.677-.55l-.253-.146-.243-.16a4.777 4.777 0 01-1.491-1.721 4.935 4.935 0 01-.532-1.972l-.009-.3V8.618c0-1.096.162-1.915.535-2.683.375-.77.94-1.4 1.664-1.859.649-.41 1.359-.655 2.288-.788l.318-.04.28-.031zm7.666 1.491a33.948 33.948 0 00-6.752-.075l-.748.075-.28.031c-.915.102-1.481.297-1.97.606a3.016 3.016 0 00-1.116 1.247c-.228.468-.357.989-.38 1.76l-.004.266v3.563c0 .577.134 1.116.375 1.587.242.471.592.874 1.024 1.18.37.263.801.453 1.276.554l.242.043 1.98.283c.339.048.457.096.575.175.119.078.262.187.27.386l-.002.024-.013.08-.164.741-.064.333c-.111.63-.167 1.332.09 1.634.263.309.7.39 1.037.187l.089-.062 2.998-3.135.13-.101.092-.063.077-.04.08-.03.035-.01.087-.02L17 15.545a2.993 2.993 0 002.495-2.77l.005-.182V8.618c0-.921-.13-1.506-.384-2.026A3.016 3.016 0 0018 5.345c-.44-.278-.943-.464-1.706-.572l-.265-.034-.279-.03zm-.55 6.294l.093.005c.398.044.707.36.707.746 0 .38-.301.693-.691.743l-.109.007H8.8l-.093-.005c-.398-.044-.707-.36-.707-.745 0-.38.301-.694.691-.744l.109-.007h6.4zm0-3.5l.093.004c.398.044.707.36.707.746 0 .38-.301.693-.691.743l-.109.007H8.8l-.093-.005C8.309 8.953 8 8.637 8 8.252c0-.38.301-.694.691-.744l.109-.007h6.4z"
                            fill="currentcolor"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <button
                      aria-label="Share post"
                      class="iconOnly small btn flex-row items-center border typo-callout font-bold no-underline shadow-md cursor-pointer select-none focus-outline justify-center flex relative btn-tertiary-cabbage bg-white"
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6 pointer-events-none"
                      >
                        <path
                          d="M10.981 4.973a2.84 2.84 0 00.133 3.872l.274.276-.211.012a8.815 8.815 0 00-.308.027c-3.268.344-5.723 3.001-7.528 8.121l-.156.452-.097.295c-.62 1.898 2.22 2.833 2.848.937l.095-.29.055-.148.093-.233c.884-2.077 2.828-3.313 5.068-3.582l.097-.01-.23.231a2.84 2.84 0 000 4.014 2.835 2.835 0 004.01 0l5.045-5.049c.54-.54.832-1.263.831-2.012a2.832 2.832 0 00-.83-2.006L15.124 4.83a2.835 2.835 0 00-4.011 0l-.133.142zM4.676 18.017l-.068.187.164-.473c1.627-4.592 3.711-6.812 6.254-7.08.255-.026.51-.04.767-.04h3.2L13.75 9.366l-1.576-1.582a1.339 1.339 0 011.89-1.893l5.045 5.048c.262.262.393.606.392.95 0 .342-.13.686-.392.948l-5.044 5.048a1.337 1.337 0 11-1.891-1.892l2.822-2.828h-2.992c-3.272 0-6.18 1.822-7.328 4.85z"
                          fill="currentcolor"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
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
            width={60}
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </div>
      )}

      <div className="mt-5 flex justify-center items-center  gap-4">
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
          1
        </LinkBtn>
        <LinkBtn
          onClick={nextPage}
          disabled={!newsData.length}
          link={'/'}
          className=" text-sm flex px-4 py-3 bg-white border  justify-center text-center text-red-400 font-bold"
        >
          2
        </LinkBtn>
        <button
          onClick={nextPage}
          disabled={!newsData.length}
          link={'/'}
          className=" text-sm flex px-4 py-3 bg-white border  justify-center text-center text-red-400 font-bold"
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </button>
      </div>
    </>
  );
};

export default News;
